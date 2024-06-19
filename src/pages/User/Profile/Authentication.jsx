import React from "react";
import Section from "./Section";

const Authentication = ({ data }) => {
  return (
    <div>
      <p>
        <strong>Last Password Change:</strong> {data.lastPasswordChange}
      </p>
      <p>
        <strong>Social Authentication:</strong>
      </p>
      <ul>
        <li>Apple: {data.socialAuth.apple ? "Enabled" : "Disabled"}</li>
        <li>Google: {data.socialAuth.google ? "Enabled" : "Disabled"}</li>
        <li>Facebook: {data.socialAuth.facebook ? "Enabled" : "Disabled"}</li>
      </ul>
    </div>
  );
};

export default Authentication;
