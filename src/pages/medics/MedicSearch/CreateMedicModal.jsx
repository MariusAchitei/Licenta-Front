import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "@windmill/react-ui";
import Select from "react-select";

const CreateMedicModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    clinic: null,
  });
  const [searchName, setSearchName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClinicSelect = (selectedClinic) => {
    setFormData({ ...formData, clinic: selectedClinic });
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
  const clinicOptions = [
    {
      id: 1,
      name: "Clinic A",
      address: "123 Street, City",
      logo: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Clinic B",
      address: "456 Avenue, City",
      logo: "https://via.placeholder.com/50",
    },
  ];

  const filteredClinicOptions = clinicOptions.filter(
    (clinic) =>
      clinic.name.toLowerCase().includes(searchName.toLowerCase()) &&
      clinic.address.toLowerCase().includes(searchAddress.toLowerCase()),
  );

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
            <Select
              options={filteredClinicOptions}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={handleClinicSelect}
              formatOptionLabel={customOptionRenderer}
              className="mt-2"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <Button layout="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="ml-4" onClick={() => onSave(formData)}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateMedicModal;
