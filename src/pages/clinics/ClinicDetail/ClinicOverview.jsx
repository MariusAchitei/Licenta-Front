import React from "react";

export default function ClinicOverview({ data }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">About {data.name}</h3>
      <p className="mt-2  text-gray-600">{data.description}</p>
      <div className="mt-4">
        <h4 className="text-md font-medium text-gray-900">
          Available Specialties
        </h4>
        <div className="mt-2">
          {data.services.map((specialty, index) => (
            <span
              key={index}
              className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-2 py-1 text-gray-800"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
