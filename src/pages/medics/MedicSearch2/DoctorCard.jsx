import React from "react";

const DoctorCard = () => {
  return (
    <div className="flex rounded-lg bg-white p-4 shadow-lg">
      <div className="w-1/4">
        <div className="flex h-32 w-32 items-center justify-center bg-gray-200">
          300 x 300
        </div>
      </div>
      <div className="w-3/4 pl-4">
        <h3 className="text-xl font-semibold">Dr. John Doe</h3>
        <p>MBBS, Dentist</p>
        <p>0.9 mi - Newyork, USA</p>
        <p>20 Years of Experience</p>
        <p>Rating: 4.5 (35 Reviews)</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-500">Available Today</span>
          <span className="text-gray-600">$1500</span>
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Book Appointment
          </button>
          <button className="rounded bg-gray-500 px-4 py-2 text-white">
            Book Online Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
