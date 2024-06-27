import { LuUser } from "react-icons/lu";
import {
  BsFillPersonLinesFill,
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkImageFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";
import { MdMedicalServices } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { Tab } from "@headlessui/react";
import ClinicCard from "pages/clinics/ClinicList2/ClinicCard";
import DoctorCard from "pages/medics/MedicSearch/DoctorCard";
import TreatmentPlanCard from "pages/MedicalHistory/TreatmentPlanCard";
import clinics from "pages/clinics/ClinicList2/clinics";
import Clinic1 from "assets/images/clinics/1.png";
import { Button } from "@windmill/react-ui";

import FilesGallery from "components/FileGallery";
import { duration } from "@mui/material";

const AppointmentDetail = () => {
  const appointment = {
    id: 1,
    photo: "https://via.placeholder.com/150",
    reason: "Routine Checkup",
    date: "2024-06-20",
    startTime: "10:00",
    endTime: "11:00",
    duration: "60 minutes",
    markedDate: "2024-06-20",
    recommendations: "Take rest and drink plenty of water.",
    clinic: "Downtown Health Clinic",
    parentAppointment: "Annual Checkup",
    plan: {
      id: 1,
      title: "Physical Therapy",
      diagnostic: "Lower back pain due to muscle strain",
      startDate: "2024-06-01",
      endDate: "2024-07-01",
      nextAppointment: "2024-06-25",
      appointmentCount: 5,
      status: "In Progress", // Options: 'Completed', 'In Progress', 'Pending'
    },
    medic: {
      name: "Dr. Jane Smith",
      specialty: "Dermatology",
      location: "San Francisco, USA",
      experience: 8,
      rating: 5,
      reviews: 30,
      image: "https://via.placeholder.com/300",
      clinic: {
        name: "Clinica Inimii",
        logo: Clinic1,
        location: "Str. Sperantei nr. 1, Bucharest, Romania",
        coordinates: { lat: 44.4268, lng: 26.1025 },
      },
    },
    status: "Completed",
    services: {
      description: "A routine checkup to ensure overall health and wellness.",
      medication: [{ id: 1, name: "Ibuprofen", dose: "200mg" }],
      diagnostic: [{ id: 1, date: "2024-06-20", diagnostic: "Healthy" }],
    },
    files: [
      { id: 1, name: "Medical Report.pdf", type: "pdf" },
      { id: 2, name: "Progress Photo.png", type: "image" },
      { id: 3, name: "Prescription.txt", type: "text" },
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
    <div className="min-h-screen ">
      {/* Medical Services Photo and Reason */}
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={appointment.photo}
              alt="Medical Service"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Reason
            </div>
            <p className="mt-1 block text-lg font-medium leading-tight text-black">
              {appointment.reason}
            </p>
            <p className="mt-2 text-gray-500">
              Date: {appointment.date} <br />
              Start time: {appointment.startTime} <br />
              End time: {appointment.endTime} <br />
              Duration: {appointment.duration}
            </p>
          </div>
          <div className="ml-auto  mt-4 flex flex-col justify-around">
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(appointment.status)}`}
            >
              {appointment.status}
            </span>
            <Button>Schedule a follow up</Button>
          </div>
        </div>
      </div>

      {/* Clinic and Medic Cards */}
      <div className="mx-auto max-w-4xl">
        <div>
          <FaClinicMedical className="h-6 w-6 text-indigo-500" />
          <ClinicCard clinic={clinics && clinics[0]} />
        </div>
        <div>
          <LuUser className="h-6 w-6 text-indigo-500" />
          <DoctorCard doctor={appointment.medic} />
        </div>
      </div>

      {/* Parent Appointment and Treatment Plan Cards */}
      <div className="mx-auto mt-5 max-w-4xl space-y-5">
        <div className="overflow-hidden rounded-xl bg-white p-6 shadow-md">
          {TreatmentPlanCard(appointment.plan)}
        </div>
        <div className="overflow-hidden rounded-xl bg-white p-6 shadow-md">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Parent Appointment
          </div>
          <p className="mt-2 text-gray-500">{appointment.parentAppointment}</p>
        </div>
      </div>

      {/* Attached Files */}
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <FilesGallery files={appointment.files} onFileUpload={() => {}} />
      </div>

      {/* Medic Recommendations */}
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <div className="text-lg font-medium text-black">
          Medic Recommendations
        </div>
        <p className="mt-2 text-gray-500">{appointment.recommendations}</p>
      </div>

      {/* Medical Service Done */}
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-xl bg-white p-6 shadow-md">
        <MdMedicalServices className="h-6 w-6 text-indigo-500" />
        <div className="mt-4">
          <div className="text-lg font-medium text-black">
            Medical Service Done
          </div>
          <p className="mt-2 text-gray-500">
            {appointment.services.description}
          </p>
          <div className="mt-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(appointment.status)}`}
            >
              {appointment.status}
            </span>
          </div>
        </div>
        <Tab.Group>
          <Tab.List className="mt-4 flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "w-full rounded-lg bg-white py-2.5 text-sm font-medium leading-5 text-blue-700"
                  : "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700"
              }
            >
              Medication
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
                {appointment.services.medication.map((med) => (
                  <li key={med.id} className="mb-2">
                    <div className="text-gray-800">{med.name}</div>
                    <div className="text-gray-600">{med.dose}</div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
            <Tab.Panel className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <ul>
                {appointment.services.diagnostic.map((diag) => (
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
};

export default AppointmentDetail;
