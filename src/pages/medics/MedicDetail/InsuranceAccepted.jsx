import React from "react";

const InsuranceAccepted = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Insurance Accepted</h3>
      <div className="flex flex-wrap">
        <div className="w-1/3 p-2">
          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <img
              src="path_to_logo"
              alt="Insurance Logo"
              className="mx-auto mb-2"
            />
            <p className="text-sm">Insurance 1</p>
          </div>
        </div>
        {/* Repeat for other insurances */}
      </div>
    </div>
  );
};

export default InsuranceAccepted;
