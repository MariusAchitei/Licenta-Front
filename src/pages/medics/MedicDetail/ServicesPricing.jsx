import React from "react";

const ServicesPricing = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Services & Pricing</h3>
      <div className="flex flex-wrap">
        <div className="w-1/3 p-2">
          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <p className="text-sm font-bold">Orthopedic Consultation</p>
            <p className="text-sm text-gray-600">$50</p>
          </div>
        </div>
        {/* Repeat for other services */}
      </div>
    </div>
  );
};

export default ServicesPricing;
