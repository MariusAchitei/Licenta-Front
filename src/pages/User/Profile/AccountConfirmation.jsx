import React from "react";
import Section from "./Section";

const AccountConfirmation = ({ data }) => {
  return (
    <div>
      <p>
        <strong>Email Confirmed:</strong> {data.emailConfirmed ? "Yes" : "No"}
      </p>
      <p>
        <strong>Phone Confirmed:</strong> {data.phoneConfirmed ? "Yes" : "No"}
      </p>
      <p>
        <strong>Marketing Consent:</strong>{" "}
        {data.marketingConsent ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default AccountConfirmation;
