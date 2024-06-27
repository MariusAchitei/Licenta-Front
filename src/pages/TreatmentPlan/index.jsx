import React from "react";
import { LuUser, LuDna } from "react-icons/lu";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkImageFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";
import { MdMedicalServices } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { Tab } from "@headlessui/react";
import ClinicCard from "pages/clinics/ClinicList2/ClinicCard";
import DoctorCard from "pages/medics/MedicSearch/DoctorCard";
import FilesGallery from "components/FileGallery";
import clinics from "pages/clinics/ClinicList2/clinics";
import { Button } from "@windmill/react-ui";
import classNames from "classnames";
import Clinic5 from "assets/images/clinics/5.png";

const TabClasses = (selected) =>
  classNames(
    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
    selected ? "bg-white text-blue-700 shadow" : "text-blue-700",
  );

const TreatmentPlanDetail = () => {
  const plan = {
    title: "Physical Therapy",
    diagnostic: "Lumbar Disc Herniation",
    startDate: "2022-05-01",
    endDate: "2022-06-01",
    nextAppointment: "2022-05-15",
    appointmentCount: 10,
    status: "Completed", // Options: 'Completed', 'In Progress', 'Pending'
    photo:
      "https://huffmanclinic.com/wp-content/uploads/2019/08/herniated-disc-1080x600.jpg",
    medication: "Ibuprofen",
    clinic: "Downtown Health Clinic",
    medic: {
      name: "Dr. Ionescu Maria",
      specialty: "Orthopedics",
      location: "Bucharest, Romania",
      experience: 15,
      rating: 4.7,
      reviews: 128,
      image: "https://via.placeholder.com/150",
      clinic: {
        name: "Clinica EndoHealth",
        logo: Clinic5,
        location: "Str. Sanatatii nr. 4, Constanta, Romania",
        coordinates: { lat: 44.1598, lng: 28.6348 },
      },
    },
    services: ["Consultation", "Physical Therapy Session", "Follow-up"],
    files: [
      { id: 1, name: "Medical Report.pdf", type: "pdf" },
      { id: 2, name: "Progress Photo.png", type: "image" },
      { id: 3, name: "Prescription.txt", type: "text" },
    ],
    appointments: [
      {
        id: 1,
        date: "2022-05-01",
        reason: "Initial Consultation",
        diagnostic: "Lumbar Disc Herniation",
      },
      {
        id: 2,
        date: "2022-05-15",
        reason: "Physical Therapy Session",
        diagnostic: "Improvement noted",
      },
    ],
    medicationHistory: [
      { id: 1, date: "2022-05-01", medication: "Ibuprofen", dose: "200mg" },
      { id: 2, date: "2022-05-05", medication: "Naproxen", dose: "250mg" },
      { id: 3, date: "2022-05-10", medication: "Paracetamol", dose: "500mg" },
    ],
    diagnosticsHistory: [
      {
        id: 1,
        date: "2022-05-01",
        diagnostic: "Lumbar Disc Herniation",
      },
      {
        id: 2,
        date: "2022-05-15",
        diagnostic: "Sciatica",
      },
    ],
    recommendations: [
      "Maintain good posture.",
      "Avoid lifting heavy objects.",
      "Engage in regular low-impact exercises.",
      "Use ergonomic furniture.",
      "Apply hot or cold packs to reduce pain.",
    ],
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <BsFillFileEarmarkPdfFill className="h-6 w-6 text-red-500" />;
      case "image":
        return <BsFillFileEarmarkImageFill className="h-6 w-6 text-blue-500" />;
      case "text":
        return <BsFillFileEarmarkTextFill className="h-6 w-6 text-gray-500" />;
      default:
        return <BsFillFileEarmarkTextFill className="h-6 w-6 text-gray-500" />;
    }
  };

  return (
    <div className="mt-3 min-h-screen rounded-3xl bg-gray-100 p-8">
      <h2 className="text-center text-3xl">Treatment plan</h2>
      {/* Plan Details Card */}
      {TreatmentPlanCard()}

      {/* Clinic and Medic Cards */}
      <div className="mx-auto max-w-4xl gap-4 md:grid-cols-2">
        <div>
          <FaClinicMedical className="h-6 w-6 text-indigo-500" />
          <ClinicCard clinic={clinics[0]} />
        </div>
        <div>
          <LuUser className="h-6 w-6 text-indigo-500" />
          <DoctorCard doctor={plan.medic} />
        </div>
      </div>

      {/* Included Services Card */}
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <MdMedicalServices className="h-6 w-6 text-indigo-500" />
        <div className="mt-4">
          <div className="text-lg font-medium text-black">
            Included Services
          </div>
          <ul className="mt-2 list-inside list-disc text-gray-500">
            {plan.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Files Gallery */}
      <FilesGallery files={plan.files} onFileUpload={() => {}} />

      {/* History Tabs */}
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {[
              "Appointments",
              "Medication History",
              "Diagnostics",
              "Recommendations",
            ].map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) => TabClasses(selected)}
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            <Tab.Panel className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <ul>
                {plan.appointments.map((appointment) => (
                  <li key={appointment.id} className="mb-2">
                    <div className="text-gray-600">{appointment.date}</div>
                    <div className="text-gray-800">{appointment.reason}</div>
                    <div className="text-gray-600">
                      {appointment.diagnostic}
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
            <Tab.Panel className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <ul>
                {plan.medicationHistory.map((med) => (
                  <li key={med.id} className="mb-2">
                    <div className="text-gray-600">{med.date}</div>
                    <div className="text-gray-800">{med.medication}</div>
                    <div className="text-gray-600">{med.dose}</div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
            <Tab.Panel className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <ul>
                {plan.diagnosticsHistory.map((diag) => (
                  <li key={diag.id} className="mb-2">
                    <div className="text-gray-600">{diag.date}</div>
                    <div className="text-gray-800">{diag.diagnostic}</div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
            <Tab.Panel className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <ul className="list-disc pl-5">
                {plan.recommendations.map((recommendation, index) => (
                  <li key={index} className="mb-2">
                    <div className="text-gray-800">{recommendation}</div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );

  function TreatmentPlanCard() {
    return (
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={plan.photo}
              alt="Plan Image"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              {plan.title}
            </div>
            <p className="mt-1 block text-lg font-medium leading-tight text-black">
              {plan.diagnostic}
            </p>
            <p className="mt-2 text-gray-500">
              Start Date: {plan.startDate} <br />
              End Date: {plan.endDate}
            </p>
            <div className="mt-4">
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(
                  plan.status,
                )}`}
              >
                {plan.status}
              </span>
            </div>
          </div>
          <div className="flex flex-grow flex-col items-end justify-around">
            <div className="mt-4 flex items-center">
              <GiMedicines className="mr-2 h-5 w-5 text-gray-500" />
              <p className="text-gray-500">{plan.medication}</p>
            </div>
            <Button type="sm">Generate Recipe</Button>
          </div>
        </div>
      </div>
    );
  }
};

export default TreatmentPlanDetail;
