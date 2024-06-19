import React, { useState, useEffect } from "react";
import ClinicFilter from "./ClinicFilter";
import ClinicList from "./ClinicList";
import ClinicMap from "./ClinicMap";
import clinicsData from "./mockClinicsData";

const ClinicsPage = () => {
  const [selectedCounty, setSelectedCounty] = useState("All");
  const [filteredClinics, setFilteredClinics] = useState(clinicsData);

  useEffect(() => {
    if (selectedCounty === "All") {
      setFilteredClinics(clinicsData);
    } else {
      setFilteredClinics(
        clinicsData.filter((clinic) => clinic.county === selectedCounty),
      );
    }
  }, [selectedCounty]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Clinics</h1>
        </div>
      </header>
      <div className="container mx-auto flex flex-col p-4 lg:flex-row">
        <div className="w-full p-4 lg:w-1/3">
          <ClinicFilter
            selectedCounty={selectedCounty}
            setSelectedCounty={setSelectedCounty}
          />
          <ClinicList clinics={filteredClinics} />
        </div>
        <div className="w-full p-4 lg:w-2/3">
          <ClinicMap clinics={filteredClinics} />
        </div>
      </div>
    </div>
  );
};

export default ClinicsPage;
