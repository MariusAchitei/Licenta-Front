import React from "react";

const ClinicList = ({ clinics }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Clinics</h3>
      <ul>
        {clinics.map((clinic) => (
          <li key={clinic.id} className="mb-4">
            <h4 className="text-lg font-semibold">{clinic.name}</h4>
            <p className="text-gray-600">{clinic.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClinicList;
