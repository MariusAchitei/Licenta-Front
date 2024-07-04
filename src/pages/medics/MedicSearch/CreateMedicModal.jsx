import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button } from "@windmill/react-ui";
import Select from "react-select";
import { useError } from "contexts/ErrorConntext";
import axios from "axios";
import axiosInstance from "utils/axiosInstance";

const CreateMedicModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    clinic: null,
  });
  const [searchName, setSearchName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const { addError } = useError();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClinicSelect = (e) => {
    console.log("fadskjbfiudsbfiodsnf;odsmflk sdlvk ng lkdsdsngds");
    console.log(e.target.value);
    console.log(e);
    setFormData({ ...formData, clinicId: e.target.value });
  };

  const handleSave = () => {
    console.log("Creating medic: ", formData);
    axiosInstance
      .post("/admin/medics", formData)
      .then((response) => {
        onSave(response.data);
        onClose();
      })
      .catch((error) => {
        console.error("Error creating medic: ", error);
        addError("Error creating medic");
      });
  };

  const customOptionRenderer = (option) => (
    <div className="flex items-center">
      <img
        src={option.logo}
        alt={option.name}
        className="h-8 w-8 rounded-full"
      />
      <div className="ml-2">
        <p className="text-sm font-medium">{option.name}</p>
        <p className="text-xs text-gray-600">{option.address}</p>
      </div>
    </div>
  );

  // Mock clinic options for demonstration purposes
  const [clinicOptions, setClinicOptions] = useState();

  useEffect(() => {
    // Fetch clinic options from API
    console.log("Fetching clinics");
    axios
      .get("http://localhost:8080/api/public/clinics")
      .then((response) => {
        setClinicOptions(response.data);
        console.log("Clinics: ", response.data);
        console.log(clinicOptions.length);
      })
      .catch((error) => {
        console.error("Error fetching clinics: ", error);
        addError("Error fetching clinics");
      });
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Medic"
      className="z-50 flex h-full w-full items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Create Medic</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Clinic Name
            </label>
            <input
              type="text"
              placeholder="Search clinic by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Clinic Address
            </label>
            <input
              type="text"
              placeholder="Search clinic by address"
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Clinic
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-5"
              value={formData.clinic}
              onChange={handleClinicSelect}
            >
              <option disabled selected value="">
                Select Clinic
              </option>
              {clinicOptions
                ?.filter((clinic) => {
                  console.log("Clinic: ", clinic);
                  console.log("Search Name: ", searchName);
                  console.log("Search Address: ", searchAddress);
                  return (
                    !searchName ||
                    (clinic.name
                      .toLowerCase()
                      .includes(searchName.toLowerCase()) &&
                      (searchAddress ||
                        clinic.address
                          .toLowerCase()
                          .includes(searchAddress.toLowerCase()) ||
                        clinic.county
                          .toLowerCase()
                          .includes(searchAddress.toLowerCase()) ||
                        clinic.city
                          .toLowerCase()
                          .includes(searchAddress.toLowerCase())))
                  );
                })
                .map((clinic) => (
                  <option key={clinic.id} value={clinic.id} className="h-10">
                    {clinic.name} - {clinic.county} - {clinic.city} -{" "}
                    {clinic.address}
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-6 flex justify-end">
            <Button layout="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="ml-4" onClick={handleSave}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateMedicModal;
