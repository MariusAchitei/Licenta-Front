import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "750px",
};

export default function ClinicMap({ data }) {
  const clinic = data;
  const [location, setLocation] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC6qvAEkBdH88CSgYmIGMDYKdjJRhJXCm8",
  });

  const mapRef = useRef(null);
  const onLoad = React.useCallback(
    function callback(map) {
      mapRef.current = map;
      if (clinic && clinic.coordinates) {
        map.panTo(clinic.coordinates);
        setLocation(clinic.coordinates);
      }
    },
    [clinic],
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          if (!location) {
            setLocation({ lat: coords.latitude, lng: coords.longitude });
            mapRef.current?.panTo({
              lat: coords.latitude,
              lng: coords.longitude,
            });
          }
        },
        () => alert("Unable to retrieve your location"),
      );
    }
  }, [location]);

  return isLoaded ? (
    <div className="flex justify-center">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          clinic.coordinates || location || { lat: 44.437926, lng: 26.096306 }
        }
        zoom={15}
        onLoad={onLoad}
      >
        <Marker
          position={clinic.coordinates}
          onClick={() => setSelectedClinic(clinic)}
        />

        {selectedClinic && (
          <InfoWindow
            position={selectedClinic.coordinates}
            onCloseClick={() => setSelectedClinic(null)}
          >
            <div>
              <h4>{selectedClinic.name}</h4>
              <p>{selectedClinic.address}</p>
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
    </div>
  ) : (
    <></>
  );
}
