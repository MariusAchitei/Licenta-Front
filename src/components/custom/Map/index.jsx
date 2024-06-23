import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";

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
    {
      id: 3,
      name: "Clinic 3",
      location: { lat: 47.158227, lng: 27.601441 },
    },
    {
      id: 4,
      name: "Clinic 4",
      location: { lat: 47.155555, lng: 27.586789 },
    },
    {
      id: 5,
      name: "Clinic 5",
      location: { lat: 47.162838, lng: 27.590689 },
    },
    {
      id: 6,
      name: "Clinic 6",
      location: { lat: 47.168971, lng: 27.593875 },
    },
    {
      id: 7,
      name: "Clinic 7",
      location: { lat: 47.161982, lng: 27.579562 },
    },
    {
      id: 8,
      name: "Clinic 8",
      location: { lat: 47.170647, lng: 27.585833 },
    },
    {
      id: 9,
      name: "Clinic 9",
      location: { lat: 47.167391, lng: 27.573309 },
    },
    {
      id: 10,
      name: "Clinic 10",
      location: { lat: 47.158106, lng: 27.570696 },
    },
    {
      id: 11,
      name: "Clinic 11",
      location: { lat: 47.171645, lng: 27.589232 },
    },
    {
      id: 12,
      name: "Clinic 12",
      location: { lat: 47.160822, lng: 27.581545 },
    },
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC6qvAEkBdH88CSgYmIGMDYKdjJRhJXCm8",
  });

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
        () => alert("Unable to retrieve your location"),
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
            <h4>{selectedClinic.name}</h4>
            <button
              onClick={() =>
                window.open(
                  `https://maps.google.com/?q=${selectedClinic.name}`,
                  "_blank",
                )
              }
            >
              Get Directions
            </button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
