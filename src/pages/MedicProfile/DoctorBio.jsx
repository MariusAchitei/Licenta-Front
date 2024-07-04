import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import LoadingScreen from "pages/Loading";

export default function DoctorBio({ doctor, setDoctor }) {
  const handleBioChange = (value) => {
    console.log(value);
    setDoctor({ ...doctor, bio: value });
  };

  if (!doctor) return <LoadingScreen />;

  return (
    <div className="flex h-[60vh] flex-col space-y-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Medic Bio</h3>
      <ReactQuill
        className="h-[70%]"
        value={doctor.bio}
        onChange={handleBioChange}
      />
    </div>
  );
}
