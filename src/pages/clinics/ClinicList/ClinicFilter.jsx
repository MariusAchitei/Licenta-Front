import React from "react";

const ClinicFilter = ({ selectedCounty, setSelectedCounty }) => {
  const counties = ["All", "San Francisco", "San Mateo", "Santa Clara"];

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Filter by County</h3>
      <select
        value={selectedCounty}
        onChange={(e) => setSelectedCounty(e.target.value)}
        className="w-full rounded-lg border p-2"
      >
        {counties.map((county) => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClinicFilter;
