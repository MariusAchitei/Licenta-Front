import React from "react";

export default function ClinicInfo({ clinic }) {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full overflow-hidden rounded-lg md:w-1/4">
          <img
            src={clinic.mainImage}
            alt={clinic.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-0 flex-1 md:ml-6">
          <h2 className="text-2xl font-bold text-gray-900">{clinic.name}</h2>
          <p className=" text-gray-600">{clinic.address}</p>
          <p className=" text-gray-600">{clinic.hours}</p>
          {/* <a href={clinic.mapLink} className=" text-blue-500 hover:underline">
            View on Google Maps
          </a> */}
        </div>
      </div>
    </div>
  );
}
