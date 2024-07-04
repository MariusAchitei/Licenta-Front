import React, { useState, useEffect } from "react";
import Select from "react-select";
import axiosInstance from "utils/axiosInstance";
import LoadingScreen from "pages/Loading";

export default function Services({ doctor, setDoctor }) {
  const [availableServices, setAvailableServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenServices, setChosenServices] = useState([]);

  console.log("LA INITIALIZARE AM", setDoctor);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get("/public/medical-services");
        setAvailableServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    setChosenServices(
      doctor?.medicalServicesIds?.map((id) => {
        const service = availableServices.find((s) => s.id === id);
        return { value: id, label: service ? service.name : id };
      }) || [],
    );
  }, [doctor, availableServices]);

  const handleServiceChange = (selectedOptions) => {
    const selectedServices = selectedOptions.map((option) => option.value);
    setChosenServices(selectedOptions);
    console.log(setDoctor);
    setDoctor({ ...doctor, medicalServicesIds: selectedServices });
  };

  if (loading) return <LoadingScreen />;

  const serviceOptions = availableServices.map((service) => ({
    value: service.id,
    label: service.name,
  }));

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Services</h3>
      <div className="mt-2">
        <Select
          isMulti
          value={chosenServices}
          onChange={handleServiceChange}
          options={serviceOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
}
