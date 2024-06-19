import React from "react";
import DoctorCard from "./DoctorCard.jsx";

const DoctorList = () => {
  return (
    <div className="space-y-4">
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      {/* Repeat DoctorCard for each doctor */}
    </div>
  );
};

export default DoctorList;
