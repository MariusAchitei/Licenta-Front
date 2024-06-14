import React from "react";

const ServiceCard = ({ service, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="p-4 rounded-lg shadow-lg cursor-pointer flex items-start justify-between"
    >
      <div>
        <h3 className="text-lg font-bold mb-2">{service.label}</h3>
        <p className="text-sm ">{service.description}</p>
        <p className="text-sm  mt-2">
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
