import React from "react";
import Section from "./Section";

import { useEffect } from "react";

const AccountInfo = ({ data }) => {
  return (
    <div>
      <p>
        <strong>Account ID:</strong> {data.accountId}
      </p>
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
