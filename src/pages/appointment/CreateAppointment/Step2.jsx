import React, { useState } from "react";
import { Select, Card } from "flowbite-react";
import romanianCounties from "db/counties";
import romanianClinics from "db/clinics";
import romanianMedics from "db/romanianMedics";

const Step2 = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedClinic, setSelectedClinic] = useState("");
  const [clinicOptions, setClinicOptions] = useState([]);
  const [selectedMedic, setSelectedMedic] = useState("");
  const [medicOptions, setMedicOptions] = useState([]);

  const handleCountyChange = (event) => {
    console.log(event.target.value);
    console.log(romanianCounties);
    console.log(romanianClinics);
    const countyId = event.target.value;
    setSelectedCounty(countyId);
    setSelectedClinic("");
    setSelectedMedic("");
    const selectedCounty = romanianCounties.find(
      (county) => county.id === countyId,
    );
    setClinicOptions(
      romanianClinics.filter(
        (clinic) => clinic.countyId == event.target.value,
      )[0].clinics,
    );
  };

  const handleClinicChange = (event) => {
    const clinicId = event.target.value;
    setSelectedClinic(clinicId);
    setSelectedMedic("");
    const medics = romanianMedics.filter(
      (medic) => medic.clinicId === clinicId,
    );
    setMedicOptions(medics);
  };

  const handleMedicChange = (event) => {
    setSelectedMedic(event.target.value);
  };

  return (
    <div>
      <Card>
        <div className="mb-4">
          <Select
            onChange={handleCountyChange}
            value={selectedCounty}
            className="w-full"
          >
            <option value="" disabled>
              Select County
            </option>
            {romanianCounties.map((county) => (
              <option key={county.id} value={county.id}>
                {county.label}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Select
            onChange={handleClinicChange}
            value={selectedClinic}
            className="w-full"
          >
            <option value="" disabled>
              Select Clinic
            </option>
            {clinicOptions.map((clinic) => (
              <option key={clinic.id} value={clinic.id}>
                {clinic.label}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Select
            onChange={handleMedicChange}
            value={selectedMedic}
            className="w-full"
          >
            <option value="" disabled>
              Select Medic
            </option>
            {medicOptions.map((medic) => (
              <option key={medic.id} value={medic.id}>
                {medic.label}
              </option>
            ))}
          </Select>
        </div>
      </Card>
    </div>
  );
};

export default Step2;
