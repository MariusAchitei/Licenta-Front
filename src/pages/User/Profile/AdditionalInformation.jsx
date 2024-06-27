import React from "react";
import Section from "./Section";
import { RiInformation2Line } from "react-icons/ri";

const PersonalInfo = ({ data }) => {
  return (
    <>
      <h2 className="mb-4 font-semibold">Personal Information</h2>
      <div className="flex">
        <p className="mb-6 text-gray-600">
          <RiInformation2Line className="mr-2 inline" />
          Please keep us updated with any changes to your personal information
          to maintain access to medical information.
        </p>
      </div>

      <div>
        <p>
          <strong>Blood type:</strong> {data.bloodType}
        </p>
        <p>
          <strong>Weight:</strong> {data.weight}
        </p>
        <p>
          <strong>Height:</strong> {data.height}
        </p>
        <p>
          <strong>Profession:</strong> {data.profession}
        </p>
        <p>
          <strong>Marital status:</strong> {data.maritalStatus}
        </p>
      </div>
    </>
  );
};

export default PersonalInfo;
