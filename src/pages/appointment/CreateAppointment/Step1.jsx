import React, { useState, useEffect } from "react";
import { Select, TextInput, Card } from "flowbite-react";
import medicalDepartments from "db/medicalDepartments";
import ServiceCard from "components/custom/ServiceCard";
import NoDataPlaceholder from "components/custom/NoDataPlaceholder";
import axiosInstance from "utils/axiosInstance";

const Step1 = ({ formData, setFormData }) => {
  const [department, setDepartment] = useState();
  const [availableDepartments, setAvailableDepartments] = useState([]);
  const [availableServices, setAvailableServices] = useState([]);
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const [reason, setReason] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const result = await axiosInstance.get("/public/departments");
        setAvailableDepartments(result.data);
        const resultServices = await axiosInstance.get(
          "/public/medical-services",
        );
        setAvailableServices(resultServices.data);
        setServices(resultServices.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDepartments();
  }, []);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    setFormData({ ...formData, reason: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    console.log("TOTAL", availableServices);
    console.log("DEPARTMENT", e.target.value);
    // console.log()
    const selectedDepartment = medicalDepartments.find(
      (dep) => dep.id === e.target.value,
    );
    setDepartment(selectedDepartment);
    setServices(
      availableServices.filter(
        (service) => service.department.id == e.target.value,
      ),
    );
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredServices = availableServices.filter(
      (service) =>
        service.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        service.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase()),
    );
    setServices(filteredServices);
  };

  return (
    <div>
      <Card>
        <label htmlFor="">Reason:</label>
        <TextInput
          placeholder="Enter the reason for your appointment (summarized)"
          value={reason}
          onChange={handleReasonChange}
        />
        <div className="mb-4">
          <label htmlFor="">Department:</label>
          <Select
            onChange={handleDepartmentChange}
            value={department?.id}
            className="w-full"
          >
            <option value="" selected disabled>
              Select a department
            </option>
            {availableDepartments?.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.name}
              </option>
            ))}
          </Select>
        </div>
        <label htmlFor="">Search service by name:</label>
        <TextInput
          placeholder="Search a medical service"
          value={search}
          onChange={handleSearchChange}
        />
      </Card>
      <div className="mt-4">
        {services.length ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              setFormData={setFormData}
            />
          ))
        ) : (
          <NoDataPlaceholder />
        )}
      </div>
    </div>
  );
};

export default Step1;
