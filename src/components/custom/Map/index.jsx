import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

// import ClinicModal from "@components/ClinicModal";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

const containerStyle = {
  width: "100%",
  height: "100vh",
};

function Map() {
  const [location, setLocation] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const clinics = [
    {
      id: 1,
      name: "Clinic 1",
      location: { lat: 47.167872814382655, lng: 27.5768162775583 },
    },
    {
      id: 2,
      name: "Clinic 2",
      location: { lat: 47.16947590980538, lng: 27.588296313851572 },
    },
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC6qvAEkBdH88CSgYmIGMDYKdjJRhJXCm8",
  });

  console.log("API KEY:");
  console.log(process.env.MAPS_API_KEY);

  const mapRef = useRef(null);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setLocation({ lat: coords.latitude, lng: coords.longitude });
          mapRef.current?.panTo({
            lat: coords.latitude,
            lng: coords.longitude,
          });
        },
        () => alert("Unable to retrieve your location")
      );
    }
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location || { lat: 47.173868884810766, lng: 27.57477393651532 }}
      zoom={12}
      onLoad={onLoad}
    >
      {clinics.map((clinic) => (
        <Marker
          key={clinic.id}
          position={clinic.location}
          onClick={() => setSelectedClinic(clinic)}
        />
      ))}

      {selectedClinic && (
        <InfoWindow
          position={selectedClinic.location}
          onCloseClick={() => setSelectedClinic(null)}
        >
          <div>
            {/* <ClinicModal
              clinic={selectedClinic}
              onClose={() => setSelectedClinic(null)}
            /> */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
