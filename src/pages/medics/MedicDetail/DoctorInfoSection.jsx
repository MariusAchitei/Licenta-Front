import React from "react";

const DoctorInfoSection = () => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg lg:flex-row lg:items-start">
      <div className="mb-4 h-32 w-32 rounded-full bg-gray-200 lg:mb-0">
        {/* Doctor Image Placeholder */}
        <img src="path_to_image" alt="Doctor" className="rounded-full" />
      </div>
      <div className="text-center lg:ml-6 lg:text-left">
        <h2 className="text-xl font-bold">Dr. Martin Adrian</h2>
        <p className="text-gray-600">BDS, MDS - Oral & Maxillofacial Surgery</p>
        <p className="text-gray-600">Newyork, USA</p>
        <div className="mt-2 flex items-center justify-center lg:justify-start">
          <span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-600">
            Available Today
          </span>
          <span className="ml-2 text-sm text-gray-500">4.5 (35 Reviews)</span>
        </div>
        <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorInfoSection;
