import React from "react";

const Availability = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Availability</h3>
      <div className="flex flex-wrap">
        <div className="w-1/4 p-2">
          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <p className="text-sm">Mon Feb 24</p>
            <p className="text-sm text-gray-600">8:00 AM - 3:00 PM</p>
          </div>
        </div>
        {/* Repeat for other days */}
      </div>
    </div>
  );
};

export default Availability;
