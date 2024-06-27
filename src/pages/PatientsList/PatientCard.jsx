// PatientCard.jsx
import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import { LuUser, LuDna } from "react-icons/lu";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { getAppointmentsByPatientId } from "./mockData"; // Import mock appointments data

const PatientCard = ({ patient }) => {
  const [showInteractions, setShowInteractions] = useState(false);
  const [patientAppointments, setPatientAppointments] = useState([]);
  console.log(getAppointmentsByPatientId(patient.id));
  const handleShowInteractions = () => {
    // Simulate an axios request with a delay
    setTimeout(() => {
      // const filteredAppointments = appointments.filter(
      //   (appointment) => appointment.patientId === patient.id,
      // );
      setPatientAppointments(getAppointmentsByPatientId(patient.id));
    }, 1000);
    setShowInteractions(!showInteractions);
  };

  return (
    <div className="flex flex-col space-y-5">
      <div className="mb-6 flex justify-around rounded-lg bg-white p-4 shadow-lg">
        <div className="mb-4 flex items-center">
          <img
            src={patient.photo}
            alt={patient.name}
            className="mr-4 h-24 w-24 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold">{patient.name}</h3>
            <p className="text-sm text-gray-600">{patient.profession}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InfoCard title="Gender" value={patient.gender}>
            <LuDna className="m-2 size-16 rounded-full border-2 border-green-400 p-2" />
          </InfoCard>
          <InfoCard title="Age" value={`${patient.age} y.o.`}>
            <BsFillPersonLinesFill className="m-2 size-16 rounded-full border-2 border-blue-400 p-2" />
          </InfoCard>
          <InfoCard title="Height" value={`${patient.height} cm`}>
            <GiBodyHeight className="m-2 size-16 rounded-full border-2 border-yellow-300 p-2" />
          </InfoCard>
          <InfoCard title="Blood type" value={patient.bloodType}>
            <MdBloodtype className="m-2 size-16 rounded-full border-2 border-red-300 p-2" />
          </InfoCard>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <p>
            Weight: <span className="font-bold">{patient.weight}</span>
          </p>
          <p>
            Address: <span className="font-bold">{patient.address}</span>
          </p>
          <p>
            Phone: <span className="font-bold">{patient.phone}</span>
          </p>
          <p>
            Email: <span className="font-bold">{patient.email}</span>
          </p>
          <p>
            Sport Frequency:{" "}
            <span className="font-bold">{patient.sportFrequency}</span>
          </p>
          <p>
            Family Status:{" "}
            <span className="font-bold">{patient.familyStatus}</span>
          </p>
        </div>
        <div className="mt-4 flex flex-col justify-around">
          <Button>Medical History</Button>
          <Button onClick={handleShowInteractions}>
            {showInteractions ? "Hide Interactions" : "See Interactions"}
          </Button>
        </div>
      </div>
      {showInteractions && (
        // <div className="mb-6 flex justify-around rounded-lg bg-white p-4 shadow-lg">
        <div
          // key={appointment.id}
          className="mt-4 flex flex-col justify-center space-y-5 overflow-hidden rounded-3xl text-left align-middle"
        >
          {patientAppointments?.map((appointment) => (
            <div className="my-4 grid grid-cols-2 gap-2 rounded-xl bg-white p-5 font-semibold shadow-lg">
              <div>
                <CiCalendarDate className="mr-2 inline" />
                {appointment.date}
              </div>
              <div>
                <FaUserDoctor className="mr-2 inline" />
                {appointment.medic}
              </div>
              <div>
                <span className="font-normal text-gray-500">Reason: </span>
                {appointment.reason}
              </div>
              <div>
                <span className="font-normal text-gray-500">Department: </span>
                {appointment.department} / {appointment.medicalService}
              </div>
              <div>
                <span className="font-normal text-gray-500">Diagnostic: </span>
                {appointment.diagnostic}
              </div>
              <div>
                <Button size="small">View details</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InfoCard = ({ title, value, children }) => (
  <div className="flex items-center rounded-lg bg-gray-100 p-2 shadow-md">
    <div className="mr-2">{children}</div>
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

export default PatientCard;
