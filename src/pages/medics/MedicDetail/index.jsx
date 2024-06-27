import React, { useState } from "react";
import DoctorBio from "./DoctorBio";
import PracticeExperience from "./PracticeExperience";
import Services from "./Services";
import Reviews from "../../../components/custom/DetailLayout/Reviews";
import DoctorCard from "./DoctorCard";
import DetailLayout from "components/custom/DetailLayout";
import Clinic1 from "assets/images/clinics/1.png";

const doctor = {
  name: "Dr. Bogdan Bacanu",
  specialty: "Medic Specialist, Stomathology",
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
    name: "OrthoDent",
    logo: Clinic1,
    location: "Str. Sperantei nr. 1, Bucharest, Romania",
    coordinates: { lat: 44.4268, lng: 26.1025 },
  },
  reviews: [
    {
      name: "Vasile L.",
      date: "15.05.2024 la 15:46",
      comment:
        "I had a good experience. The dentist is very professional and explains everything clearly. The only downside was a bit of a wait, but overall, I’m satisfied with the care.",
      rating: 4,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    {
      name: "Marius A.",
      date: "15.05.2024 la 15:46",
      comment:
        "Knowledgeable and skilled, but the clinic's scheduling could be improved. I had to reschedule twice because of overbooking. The treatment itself was satisfactory",
      rating: 3,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    {
      name: "Cristina L.",
      date: "02.05.2024 la 18:16",
      comment:
        "An exceptional dentist. The clinic is clean and modern, and the staff are incredibly friendly. My root canal treatment was painless and efficiently done. Highly recommended!",
      rating: 5,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    {
      name: "Raluca M.",
      date: "02.05.2024 la 18:16",
      comment:
        "Unfortunately, my experience was not great. The procedure was painful, and I felt rushed through my appointment. The staff seemed overworked and not very attentive.",
      rating: 2,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    {
      name: "Raluca M.",
      date: "02.05.2024 la 18:16",
      comment:
        "A competent dentist, but I felt the service was a bit impersonal. The clinic was clean, and the equipment seemed up-to-date, but I expected a more caring approach",
      rating: 3,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    // Add more reviews as needed
  ],
};

const tabs = [
  { name: "Overview", component: DoctorBio },
  { name: "Services", component: Services },
  { name: "Reviews", component: Reviews },
];

export default function DoctorDetail() {
  return (
    <DetailLayout
      tabs={tabs}
      title="Medic Profile"
      data={doctor}
      props={{}}
      cardComponent={<DoctorCard doctor={doctor} />}
    />
  );
}
