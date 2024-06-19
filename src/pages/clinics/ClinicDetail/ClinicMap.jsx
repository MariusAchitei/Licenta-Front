import React from "react";

export default function ClinicMap({ clinic }) {
  const googleMapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyC6qvAEkBdH88CSgYmIGMDYKdjJRhJXCm8&q=${encodeURIComponent(clinic.name)}&center=${clinic.coordinates.lat},${clinic.coordinates.lng}&zoom=15`;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900">Location</h3>
      <div className="mt-4">
        <iframe
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={googleMapSrc}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}
