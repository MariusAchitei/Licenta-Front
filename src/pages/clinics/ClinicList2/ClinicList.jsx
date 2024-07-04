import React, { useState, useContext, useEffect } from "react";
import ClinicCard from "./ClinicCard";
import { UserContext } from "contexts/UserContext";
import { useError } from "contexts/ErrorConntext";

import clinics from "./clinics.js";
import { Button } from "@windmill/react-ui";
import EditClinicModal from "./EditClinicModal";
import axios from "axios";
import LoadingScreen from "pages/Loading";

export default function ClinicList() {
  const { addError } = useError();
  const [clinics, setClinics] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const { user, roles } = useContext(UserContext);
  console.log("CACACACACALCALCALCLAL");
  console.log(user, roles);
  const [county, setCounty] = useState("");
  const [search, setSearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    console.log("http://localhost:8080/api" + "/public/clinics");
    axios
      .get("http://localhost:8080/api" + "/public/clinics")
      .then((response) => {
        setClinics(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching clinics: ", error);
        addError("Error fetching clinics");
        setIsLoaded(true);
      });
  }, []);

  const handleAddClinic = () => {
    setModalOpen(true);
  };

  const handleSave = (clinic) => {};

  if (!isLoaded || !clinics) {
    return <LoadingScreen />;
  } else {
    console.log("Clinics: ", clinics);
  }

  return (
    <div className="mx-auto max-w-[80vw] py-6">
      <div className="mb-6 flex items-center space-x-4">
        <select
          className="block rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        >
          <option value="">Select County</option>
          <option value="County1">County1</option>
          <option value="County2">County2</option>
          {/* Add more counties as needed */}
        </select>
        <input
          type="text"
          placeholder="Search by name"
          className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {roles.includes("admin") && (
          <Button onClick={handleAddClinic}>Create</Button>
        )}
      </div>
      <div className="space-y-6">
        {clinics
          // .filter(
          //   (clinic) =>
          //     clinic.name.toLowerCase().includes(search.toLowerCase()) &&
          //     (!county || clinic.county === county),
          // )
          .map((clinic) => (
            // <div>{clinic.name}</div>
            <ClinicCard
              key={clinic.name}
              isAdmin={roles.includes("admin")}
              clinic={clinic}
            />
          ))}
      </div>
      <EditClinicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        createMode={true}
        onSave={handleSave}
      />
    </div>
  );
}
