import React from "react";

const services = [
  "Orthopedic Consultation",
  "Dental Filling",
  "Ultrasound Scan",
  "Teeth Whitening",
];

export default function Services() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Services</h3>
      <div className="mt-2">
        {services.map((service) => (
          <span
            key={service}
            className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-2 py-1  text-gray-800"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}
