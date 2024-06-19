import React from "react";
import Section from "./Section";

import { useEffect } from "react";

const AccountInfo = ({ data }) => {
  return (
    <div>
      <p>
        <strong>Patient Code:</strong> {data.patientCode}
      </p>
      <p>
        <strong>Subscriptions:</strong>
      </p>
      <ul>
        {data.subscriptions.map((subscription, index) => (
          <li key={index}>{subscription}</li>
        ))}
      </ul>
      <p>
        <strong>Phone Number:</strong> {data.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
    </div>
  );
};

export default AccountInfo;
