import React from "react";
import DoctorCard from "./DoctorCard";
import doctors from "db/doctors";

export default function DoctorList() {
  return (
    <div className="space-y-6">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.name} doctor={doctor} />
      ))}
    </div>
  );
}
