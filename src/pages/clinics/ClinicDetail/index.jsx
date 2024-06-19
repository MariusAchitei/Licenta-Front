import React from "react";
import ClinicInfo from "./ClinicInfo";
import DetailLayout from "components/custom/DetailLayout";

import ClinicOverview from "./ClinicOverview";
import ClinicGallery from "./ClinicGallery";
import Map from "components/custom/Map";
import Reviews from "components/custom/DetailLayout/Reviews";

const clinic = {
  name: "Clinica Sala Palatului",
  address: "Str. Ion Campineanu nr. 23, Sector 1, BUCURESTI",
  hours: "Luni - Vineri 09:00 - 19:00",
  image: "https://via.placeholder.com/300",
  description:
    "Clinica Sala Palatului is a medical facility offering a range of services...",
  specialties: ["Ginecologie", "Cardiologie", "Pediatrie", "Dermatologie"],
  gallery: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ],
  coordinates: { lat: 44.437926, lng: 26.096306 },
  mapLink: "https://maps.google.com/?q=Clinica+Sala+Palatului",
  rating: {
    score: 4.97,
  },
  reviews: [
    {
      name: "Alexandru P.",
      date: "10.06.2024 la 10:15",
      comment:
        "Personal foarte amabil și profesionist. Am fost la cardiologie și am primit îngrijire excelentă.",
      rating: 5,
      verifiedPurchase: true,
      helpful: { yes: 2, no: 0 },
    },
    {
      name: "Maria I.",
      date: "08.06.2024 la 14:20",
      comment:
        "Clinica este foarte curată și modernă. Am fost pentru o consultație dermatologică și am fost foarte mulțumită.",
      rating: 4,
      verifiedPurchase: true,
      helpful: { yes: 3, no: 1 },
    },
    {
      name: "Andrei T.",
      date: "05.06.2024 la 09:30",
      comment:
        "Foarte aglomerat, dar medicii sunt de excepție. Recomand pentru ginecologie.",
      rating: 4,
      verifiedPurchase: true,
      helpful: { yes: 1, no: 0 },
    },
    {
      name: "Elena D.",
      date: "02.06.2024 la 11:45",
      comment:
        "Servicii excelente la pediatrie. Copilul meu s-a simțit foarte bine și medicul a fost foarte răbdător.",
      rating: 5,
      verifiedPurchase: true,
      helpful: { yes: 4, no: 0 },
    },
    {
      name: "Mihai G.",
      date: "30.05.2024 la 13:00",
      comment:
        "Prețuri puțin cam mari, dar calitatea serviciilor este pe măsură. Recomand pentru dermatologie.",
      rating: 3,
      verifiedPurchase: true,
      helpful: { yes: 2, no: 1 },
    },
    {
      name: "Anca S.",
      date: "28.05.2024 la 16:30",
      comment:
        "Foarte mulțumită de consultația la cardiologie. Medicul a fost foarte atent și explicativ.",
      rating: 5,
      verifiedPurchase: true,
      helpful: { yes: 3, no: 0 },
    },
  ],
};

const tabs = [
  { name: "Overview", component: ClinicOverview },
  { name: "Gallery", component: ClinicGallery },
  { name: "Map", component: Map },
  { name: "Reviews", component: Reviews },
];

export default function ClinicDetail() {
  return (
    <DetailLayout
      tabs={tabs}
      title="Clinic Details"
      data={clinic}
      cardComponent={<ClinicInfo clinic={clinic} />}
    />
  );
}
