import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ClinicMap = ({ clinics }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {clinics.map((clinic) => (
          <Marker
            key={clinic.id}
            position={clinic.coordinates}
            title={clinic.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ClinicMap;
