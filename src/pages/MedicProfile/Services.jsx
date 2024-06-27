import React from "react";

export default function Services({ doctor, setDoctor }) {
  const handleServiceChange = (index, value) => {
    const updatedServices = [...doctor.services];
    updatedServices[index] = value;
    setDoctor({ ...doctor, services: updatedServices });
  };

  const handleAddService = () => {
    setDoctor({ ...doctor, services: [...doctor.services, ""] });
  };

  const handleRemoveService = (index) => {
    const updatedServices = doctor.services.filter((_, i) => i !== index);
    setDoctor({ ...doctor, services: updatedServices });
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Services</h3>
      <div className="mt-2">
        {doctor?.services?.map((service, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              value={service}
              onChange={(e) => handleServiceChange(index, e.target.value)}
              className="mr-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button
              onClick={() => handleRemoveService(index)}
              className="ml-2 text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button onClick={handleAddService} className="mt-2 text-blue-600">
          Add Service
        </button>
      </div>
    </div>
  );
}
