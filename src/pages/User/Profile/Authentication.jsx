import React from "react";
import Section from "./Section";

const Authentication = ({ data }) => {
  return (
    <div>
      <p>
        <strong>Gender:</strong> {data.gender}
      </p>
      <p>
        <strong>Nationality:</strong> {data.nationality}
      </p>
      <p>
        <strong>Place of birth:</strong> {data.placeOfBirth}
      </p>
      <p>
        <strong>Current residence:</strong> {data.currentResidence}
      </p>
      <p>
        <strong>Address:</strong> {data.address}
      </p>
    </div>
  );
};

export default Authentication;
