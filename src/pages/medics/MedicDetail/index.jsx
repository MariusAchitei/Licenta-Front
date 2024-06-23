import React, { useState } from "react";
import DoctorBio from "./DoctorBio";
import PracticeExperience from "./PracticeExperience";
import Services from "./Services";
import Reviews from "../../../components/custom/DetailLayout/Reviews";
import DoctorCard from "./DoctorCard";
import DetailLayout from "components/custom/DetailLayout";

const doctor = {
  name: "Dr. Bogdan Bacanu",
  specialty: "Medic Specialist, Stomatologie",
  rating: 4.97,
  reviews: 47,
  views: 29157,
  image:
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
  clinicName: "Clinica Sala Palatului",
  clinicAddress: "BUCURESTI, Str. Ion Campineanu nr. 23, Sector 1",
  mapLink: "#",
  rating: {
    score: 4.97,
  },
  reviews: [
    {
      name: "Vasile L.",
      date: "15.05.2024 la 15:46",
      comment:
        "Imagine excelenta obtinuta e drept dupa cateva zile de modificat setarile. Din pacate calitatea imaginilor diferitelor canale tv te face sa vrei sa modifici setarile la fiecare schimbare de canal. Asa ca trebuie sa te multumesti cu un compromis in setari, dar care iti ofera o imagine f. buna per ansamblu. Meniul un pic mai complex dar care iti ofera multiple posibilitati de reglare. Web.Os-ul nu se misca f.rapid dar pt mine nu e o problema. Are f multe aplicatii de streaming ceea ce este un plus pt mine. Telecomanda....magic intradevar. Intreba cineva daca are buton de revenire la canalul precedent. Da, are butonul 'return' care face si chestia asta. Concluzie: merita toti banii!",
      rating: 5,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    {
      name: "Cristina L.",
      date: "02.05.2024 la 18:16",
      comment:
        "a ajuns la timp, in conditii optime, pare sa fie un produs de calitate",
      rating: 5,
      verifiedPurchase: true,
      helpful: { yes: 0, no: 0 },
    },
    // Add more reviews as needed
  ],
};

const tabs = [
  { name: "Overview", component: DoctorBio },
  { name: "Practice Experience", component: PracticeExperience },
  { name: "Services", component: Services },
  { name: "Reviews", component: Reviews },
];

export default function DoctorDetail() {
  return (
    <DetailLayout
      tabs={tabs}
      title="Medic Profile"
      data={doctor}
      cardComponent={<DoctorCard doctor={doctor} />}
    />
  );
}
