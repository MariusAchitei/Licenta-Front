import React from "react";

const PracticeExperience = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Practice Experience</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-200"></div>
          <div className="ml-4">
            <h4 className="font-semibold">DocCare</h4>
            <p className="text-gray-600">
              Dec 2018 - Present (3 years 5 months)
            </p>
            <p className="text-gray-600">
              Specialized in Oral & Maxillofacial Surgery
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-200"></div>
          <div className="ml-4">
            <h4 className="font-semibold">Hill Medical Hospital</h4>
            <p className="text-gray-600">
              Jan 2015 - Nov 2018 (3 years 10 months)
            </p>
            <p className="text-gray-600">Specialized in Orthopedic Surgery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeExperience;
