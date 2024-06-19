import React, { useState } from "react";
import ClinicCard from "./ClinicCard";

import clinics from "./clinics.js";

export default function ClinicList() {
  const [county, setCounty] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="mx-auto max-w-[80vw] py-6">
      <div className="mb-6 flex items-center space-x-4">
        <select
          className="block rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        >
          <option value="">Select County</option>
          <option value="County1">County1</option>
          <option value="County2">County2</option>
          {/* Add more counties as needed */}
        </select>
        <input
          type="text"
          placeholder="Search by name"
          className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-6">
        {clinics
          .filter(
            (clinic) =>
              clinic.name.toLowerCase().includes(search.toLowerCase()) &&
              (!county || clinic.county === county),
          )
          .map((clinic) => (
            <ClinicCard key={clinic.name} clinic={clinic} />
          ))}
      </div>
    </div>
  );
}
