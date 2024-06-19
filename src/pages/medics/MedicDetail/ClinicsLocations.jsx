import React from "react";

const ClinicsLocations = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Clinics & Locations</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-200"></div>
          <div className="ml-4">
            <h4 className="font-semibold">Soft Clinic</h4>
            <p className="text-gray-600">Newyork, USA</p>
            <p className="text-gray-600">Mon - Fri (9:00 AM - 5:00 PM)</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-200"></div>
          <div className="ml-4">
            <h4 className="font-semibold">The Family Dentistry Clinic</h4>
            <p className="text-gray-600">San Francisco, USA</p>
            <p className="text-gray-600">Sat - Sun (10:00 AM - 4:00 PM)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicsLocations;
