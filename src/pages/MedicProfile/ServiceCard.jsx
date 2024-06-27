import React from "react";

const ServiceCard = ({ service, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="flex cursor-pointer items-start justify-between rounded-lg p-4 shadow-lg"
    >
      <div>
        <h3 className="mb-2 text-lg font-bold">{service.label}</h3>
        <p className="text-sm ">{service.description}</p>
        <p className="mt-2  text-sm">
          <strong>Duration:</strong> {service.duration}
        </p>
      </div>
      <div className="ml-4">
        <input
          type="radio"
          name="selectedService"
          checked={isSelected}
          onChange={onSelect}
          className="form-radio h-5 w-5 text-blue-600"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
