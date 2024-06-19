import React from "react";

const SortingBar = () => {
  return (
    <div className="my-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-lg">
      <div>
        <span>100 Doctors found for: Dentist in San Francisco, California</span>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Sort</span>
        <select className="rounded border p-2">
          <option>A to Z</option>
          {/* Other sorting options */}
        </select>
        <span className="ml-4 mr-4">Availability</span>
        <input type="date" className="rounded border p-2" />
      </div>
    </div>
  );
};

export default SortingBar;
