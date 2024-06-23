import Clinic1 from "assets/images/clinics/1.png";
import Clinic2 from "assets/images/clinics/2.png";
import Clinic3 from "assets/images/clinics/3.png";
import Clinic4 from "assets/images/clinics/4.png";
import Clinic5 from "assets/images/clinics/5.png";
import Clinic6 from "assets/images/clinics/6.png";
import Clinic7 from "assets/images/clinics/7.png";
import Clinic8 from "assets/images/clinics/8.png";
import Clinic9 from "assets/images/clinics/9.png";

const specialties = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Endocrinology",
  "Neurology",
  "Gastroenterology",
  "Urology",
  "Oncology",
  "Rheumatology",
  "Pulmonology",
  "Ophthalmology",
  "Psychiatry",
  "Nephrology",
  "Hematology",
];

const clinics = [
  {
    name: "Clinica Inimii",
    logo: Clinic1,
    location: "Str. Sperantei nr. 1, Bucharest, Romania",
    coordinates: { lat: 44.4268, lng: 26.1025 },
  },
  {
    name: "Clinica DermaCare",
    logo: Clinic2,
    location: "Str. Libertatii nr. 5, Cluj-Napoca, Romania",
    coordinates: { lat: 46.7712, lng: 23.6236 },
  },
  {
    name: "Clinica Copilului",
    logo: Clinic3,
    location: "Str. Copilului nr. 3, Timisoara, Romania",
    coordinates: { lat: 45.7489, lng: 21.2087 },
  },
  {
    name: "Clinica OrthoPlus",
    logo: Clinic4,
    location: "Str. Ortho nr. 8, Brasov, Romania",
    coordinates: { lat: 45.6579, lng: 25.6012 },
  },
  {
    name: "Clinica EndoHealth",
    logo: Clinic5,
    location: "Str. Sanatatii nr. 4, Constanta, Romania",
    coordinates: { lat: 44.1598, lng: 28.6348 },
  },
  {
    name: "HeartCare Clinic",
    logo: Clinic6,
    location: "Str. Inimii nr. 10, Iasi, Romania",
    coordinates: { lat: 47.1585, lng: 27.6014 },
  },
  {
    name: "MediCross Health",
    logo: Clinic7,
    location: "Str. Sanatatii nr. 20, Sibiu, Romania",
    coordinates: { lat: 45.7983, lng: 24.1256 },
  },
  {
    name: "VitalHealth Center",
    logo: Clinic8,
    location: "Str. Sanatatii nr. 15, Craiova, Romania",
    coordinates: { lat: 44.3302, lng: 23.7949 },
  },
  {
    name: "LifeLine Clinic",
    logo: Clinic9,
    location: "Str. Sperantei nr. 12, Arad, Romania",
    coordinates: { lat: 46.1866, lng: 21.3123 },
  },
];

const malePhotos = [
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww",
  "https://unsplash.com/photos/man-in-blue-crew-neck-t-shirt-smiling-279xIHymPYY",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4769130/pexels-photo-4769130.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3779704/pexels-photo-3779704.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const femalePhotos = [
  "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const generateDoctors = (count) => {
  const doctors = [];
  for (let i = 0; i < count; i++) {
    const specialty =
      specialties[Math.floor(Math.random() * specialties.length)];
    const clinic = clinics[Math.floor(Math.random() * clinics.length)];
    const gender = Math.random() > 0.5 ? "male" : "female";
    const experience = Math.floor(Math.random() * 21) + 1; // 1 to 21 years
    const rating = Math.floor(Math.random() * 3) + 3; // 1 to 5 stars
    const reviews = Math.floor(Math.random() * 100) + 1; // 1 to 100 reviews
    const name =
      gender === "male"
        ? `Dr. ${["Andrei", "Radu", "Sorin", "Mihai", "George", "Cristian"][Math.floor(Math.random() * 6)]} ${["Popescu", "Georgescu", "Iliescu", "Tanase", "Enescu", "Dima"][Math.floor(Math.random() * 6)]}`
        : `Dr. ${["Elena", "Maria", "Ana", "Alina", "Claudia", "Gabriela", "Diana"][Math.floor(Math.random() * 7)]} ${["Ionescu", "Vasilescu", "Stan", "Gheorghe", "Munteanu", "Voinea", "Constantinescu"][Math.floor(Math.random() * 7)]}`;
    const image =
      gender === "male"
        ? malePhotos[Math.floor(Math.random() * malePhotos.length)]
        : femalePhotos[Math.floor(Math.random() * femalePhotos.length)];
    doctors.push({
      name,
      specialty,
      location: clinic.location,
      experience,
      rating,
      reviews,
      image,
      clinic,
    });
  }
  return doctors;
};

const doctors = generateDoctors(30);

export default doctors;
