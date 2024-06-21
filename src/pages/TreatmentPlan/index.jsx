import React, { useState } from "react";
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

const TreatmentPlanDetail = () => {
  const plan = {
    title: "Physical Therapy",
    diagnostic: "Lower back pain due to muscle strain",
    startDate: "2024-06-01",
    endDate: "2024-07-01",
    status: "In Progress",
    medication: "Ibuprofen",
    clinic: "Downtown Health Clinic",
    medic: {
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      location: "San Francisco, USA",
      experience: 8,
      rating: 5,
      reviews: 30,
      image: "https://via.placeholder.com/300",
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
        date: "2024-06-20",
        reason: "Routine Checkup",
        diagnostic: "Healthy",
      },
      {
        id: 2,
        date: "2024-06-21",
        reason: "Flu Symptoms",
        diagnostic: "Influenza",
      },
    ],
    medicationHistory: [
      { id: 1, date: "2024-06-01", medication: "Ibuprofen", dose: "200mg" },
    ],
    diagnosticsHistory: [
      {
        id: 1,
        date: "2024-06-01",
        diagnostic: "Lower back pain due to muscle strain",
      },
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
    <div className="min-h-screen bg-gray-100 p-8">
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
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full rounded-lg bg-white py-2.5 text-sm font-medium leading-5 text-blue-700"
                  : "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700"
              }
            >
              Appointments
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full rounded-lg bg-white py-2.5 text-sm font-medium leading-5 text-blue-700"
                  : "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700"
              }
            >
              Medication History
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full rounded-lg bg-white py-2.5 text-sm font-medium leading-5 text-blue-700"
                  : "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700"
              }
            >
              Diagnostics
            </Tab>
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
              src="https://via.placeholder.com/150"
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
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(plan.status)}`}
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
