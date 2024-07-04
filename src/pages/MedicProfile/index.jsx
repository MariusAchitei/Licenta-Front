import React, { useState, useEffect, useContext } from "react";
import DoctorBio from "./DoctorBio";
import Services from "./Services";
import DoctorCard from "./DoctorCard";
import DetailLayout from "components/custom/DetailLayout";
import Clinic1 from "assets/images/clinics/1.png";
import EditMedicDetails from "./EditMedicDetails";
import axiosInstance from "utils/axiosInstance";
import { UserContext } from "contexts/UserContext";
const initialDoctor = {
  name: "Dr. Bogdan Bacanu",
  department: { id: 1, name: "Cardiology" },
  rank: "Medic Specialist",
  rating: 3.4,
  reviews: 5,
  views: 157,
  image:
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
  clinicName: "Clinica Sala Palatului",
  clinicAddress: "BUCURESTI, Str. Ion Campineanu nr. 23, Sector 1",
  mapLink: "#",
  rating: {
    score: 3.4,
  },
  clinic: {
    name: "Clinica Inimii",
    logo: Clinic1,
    location: "Str. Sperantei nr. 1, Bucharest, Romania",
    coordinates: { lat: 44.4268, lng: 26.1025 },
  },
  bio: "",
  services: [{ id: 1, name: "EKG" }],
  data: {
    experience: "10 years",
    studies: "University of Medicine and Pharmacy Carol Davila",
    dateOfBirth: "15.06.1985",
  },
};

const tabs = [
  { name: "Overview", component: DoctorBio },
  { name: "Services", component: Services },
  { name: "Edit Details", component: EditMedicDetails },
  //   { name: "Reviews", component: Reviews },
];

export default function MedicProfile() {
  const { getIdentity } = useContext(UserContext);
  const [doctor, setDoctor] = useState({});
  useEffect(async () => {
    const medic = await getIdentity();
    console.log(medic);
    await axiosInstance(`/medics/profile/${medic.id}`)
      .then((res) => {
        console.log("Beleauaa ADEVARATA", res.data);
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log("CPLM");
        console.log(err);
      });
  }, []);

  return (
    <DetailLayout
      tabs={tabs}
      props={{ doctor, setDoctor }}
      title="Medic Profile"
      data={doctor}
      cardComponent={<DoctorCard doctor={doctor} setDoctor={setDoctor} />}
    />
  );
}
