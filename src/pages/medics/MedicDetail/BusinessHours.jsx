import React from "react";

const BusinessHours = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
      <div className="space-y-2">
        <p className="text-gray-700">Monday: 8:00 AM - 5:00 PM</p>
        {/* Repeat for other days */}
      </div>
    </div>
  );
};

export default BusinessHours;
