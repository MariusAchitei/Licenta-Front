import React from "react";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiology",
    location: "Newport, USA",
    experience: 10,
    rating: 4,
    reviews: 50,
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Dermatology",
    location: "San Francisco, USA",
    experience: 8,
    rating: 5,
    reviews: 30,
    image: "https://via.placeholder.com/300",
  },
  // Add more doctors as needed
];

export default function DoctorList() {
  return (
    <div className="space-y-6">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.name} doctor={doctor} />
      ))}
    </div>
  );
}
