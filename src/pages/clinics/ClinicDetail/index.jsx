import React from "react";
import ClinicInfo from "./ClinicInfo";
import DetailLayout from "components/custom/DetailLayout";
import ClinicOverview from "./ClinicOverview";
import ClinicGallery from "./ClinicGallery";
import Reviews from "components/custom/DetailLayout/Reviews";
import ClinicMap from "./ClinicMap";

const clinic = {
  name: "Clinica Sala Palatului",
  address: "Str. Ion Campineanu nr. 23, Sector 1, BUCURESTI",
  hours: "Luni - Vineri 09:00 - 19:00",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykS2ypRll9Cg0OcC605mMt8JSGv7dJaSGWQ&s",
  description:
    "Clinica Sala Palatului este o unitate medicală de renume situată în inima Bucureștiului, oferind o gamă largă de servicii medicale de înaltă calitate. Echipa noastră de medici specializați și personalul dedicat se asigură că fiecare pacient primește cea mai bună îngrijire posibilă.",
  specialties: [
    "Ginecologie",
    "Cardiologie",
    "Pediatrie",
    "Dermatologie",
    "Ortopedie",
    "Neurologie",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpbmljfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpbmljfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpbmljfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpbmljfGVufDB8fDB8fHww",
  ],
  coordinates: { lat: 44.437926, lng: 26.096306 },
  mapLink: "https://maps.google.com/?q=Clinica+Sala+Palatului",
  rating: {
    score: 4.97,
    count: 182, // Number of total ratings
  },
  contact: {
    phone: "+40 21 123 4567",
    email: "contact@salapalatuluiclinic.ro",
    website: "https://www.salapalatuluiclinic.ro",
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
  services: [
    "Consultații generale",
    "Consultații specializate",
    "Analize de laborator",
    "Radiografii și ecografii",
    "Tratament ambulatoriu",
    "Vaccinări",
    "Consultații online",
  ],
  insuranceAccepted: [
    "Allianz",
    "Signal Iduna",
    "Generali",
    "Uniqa",
    "Groupama",
  ],
};

const tabs = [
  { name: "Overview", component: ClinicOverview },
  { name: "Gallery", component: ClinicGallery },
  { name: "Map", component: ClinicMap },
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
