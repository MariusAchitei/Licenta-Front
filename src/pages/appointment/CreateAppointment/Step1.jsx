import React, { useState } from "react";
import { Select, TextInput, Card } from "flowbite-react";
import medicalDepartments from "db/medicalDepartments";
import ServiceCard from "components/custom/ServiceCard";
import NoDataPlaceholder from "components/custom/NoDataPlaceholder";

const Step1 = () => {
  const [department, setDepartment] = useState(medicalDepartments[0]);
  const [search, setSearch] = useState("");
  const [services, setServices] = useState(department.services);
  const [reason, setReason] = useState("");

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    const selectedDepartment = medicalDepartments.find(
      (dep) => dep.id === e.target.value,
    );
    setDepartment(selectedDepartment);
    setServices(selectedDepartment.services);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredServices = department.services.filter(
      (service) =>
        service.label.toLowerCase().includes(e.target.value.toLowerCase()) ||
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
            value={department.id}
            className="w-full"
          >
            {medicalDepartments.map((dep) => (
              <option key={dep.id} value={dep.id}>
                {dep.label}
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
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <NoDataPlaceholder />
        )}
      </div>
    </div>
  );
};

export default Step1;
