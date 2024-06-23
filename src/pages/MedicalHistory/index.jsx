import Container from "components/custom/Container";
import { LuUser, LuDna } from "react-icons/lu";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiBodyHeight } from "react-icons/gi";
import { MdBloodtype } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { Button } from "@windmill/react-ui";

import { useState, useEffect } from "react";

import InfoCard from "components/InfoCard";
import TreatmentPlanCard from "./TreatmentPlanCard";
import FilesGallery from "components/FileGallery";

const MedicalHistory = () => {
  const infoCardIconStyle = "m-2 size-16 rounded-full border-2 p-2";
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({
      name: "Achitei Viorel",
      gender: "Male",
      age: 50,
      height: 175,
      bloodType: "O+",
      appointments: [
        {
          id: 1,
          date: "2021-03-15",
          reason: "Routine Checkup",
          diagnostic: "Healthy",
          medic: "Dr. Popescu Adrian",
          department: "General Medicine",
          medicalService: "Consultation",
        },
        {
          id: 2,
          date: "2021-06-10",
          reason: "High Blood Pressure",
          diagnostic: "Hypertension",
          medic: "Dr. Ionescu Maria",
          department: "Cardiology",
          medicalService: "Consultation",
        },
        {
          id: 3,
          date: "2022-04-20",
          reason: "Back Pain",
          diagnostic: "Lumbar Disc Herniation",
          medic: "Dr. Radulescu Bogdan",
          department: "Orthopedics",
          medicalService: "MRI Scan",
        },
        {
          id: 4,
          date: "2023-01-15",
          reason: "Chest Pain",
          diagnostic: "Angina Pectoris",
          medic: "Dr. Georgescu Elena",
          department: "Cardiology",
          medicalService: "ECG",
        },
        {
          id: 5,
          date: "2023-12-05",
          reason: "Diabetes Follow-up",
          diagnostic: "Type 2 Diabetes",
          medic: "Dr. Vasile Florin",
          department: "Endocrinology",
          medicalService: "Blood Test",
        },
      ],
      plans: [
        {
          id: 1,
          title: "Physical Therapy",
          diagnostic: "Lumbar Disc Herniation",
          startDate: "2022-05-01",
          endDate: "2022-06-01",
          nextAppointment: "2022-05-15",
          appointmentCount: 10,
          status: "Completed", // Options: 'Completed', 'In Progress', 'Pending'
          photo:
            "https://huffmanclinic.com/wp-content/uploads/2019/08/herniated-disc-1080x600.jpg",
        },
        {
          id: 2,
          title: "Hypertension Management",
          diagnostic: "Hypertension",
          startDate: "2021-06-15",
          endDate: "2022-06-15",
          nextAppointment: "2022-01-10",
          appointmentCount: 12,
          status: "Completed", // Options: 'Completed', 'In Progress', 'Pending'
          photo:
            "https://www.medicalindependent.ie/wp-content/uploads/2023/03/mindo_210323_hypertension.jpg",
        },
        {
          id: 3,
          title: "Diabetes Management",
          diagnostic: "Type 2 Diabetes",
          startDate: "2023-01-01",
          endDate: "2023-12-31",
          nextAppointment: "2023-07-01",
          appointmentCount: 12,
          status: "In Progress", // Options: 'Completed', 'In Progress', 'Pending'
          photo:
            "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/shutterstock_1439349791.jpg?itok=aLF3O1p0",
        },
      ],
    });
  }, []);
  return (
    <div className="m-auto flex min-h-screen flex-col bg-gray-50 px-5 lg:max-w-[90vw] lg:flex-row">
      {Siderbar(user)}
      <section className="p-6 lg:flex-grow">
        <h2 className="text-center text-2xl">Treatment Plans</h2>
        <div className="space-y-4">
          {user.plans &&
            user.plans.map((plan) => {
              return TreatmentPlanCard(plan);
            })}
        </div>
      </section>
    </div>
  );
};

export default MedicalHistory;

function Siderbar(user) {
  return (
    <section className="flex-col text-center lg:w-1/3 lg:flex-initial">
      <div className="my-4 flex h-fit flex-col justify-center space-y-11 overflow-hidden rounded-3xl bg-white p-10 text-center align-middle shadow-md">
        <div className="flex h-24 w-full flex-col items-center justify-center rounded-full">
          <LuUser className="size-40 rounded" />
          <h3 className="text-center font-bold">{user.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InfoCard title="Gender" value={user.gender}>
            <LuDna className="m-2 size-16 rounded-full border-2 border-green-400 p-2" />
          </InfoCard>
          <InfoCard title="Age" value={`${user.age} y.o.`}>
            <BsFillPersonLinesFill className="m-2 size-16 rounded-full border-2 border-blue-400 p-2" />
          </InfoCard>
          <InfoCard title="Height" value={`${user.height} cm`}>
            <GiBodyHeight className="m-2 size-16 rounded-full border-2 border-yellow-300 p-2" />
          </InfoCard>
          <InfoCard title="Blood type" value={user.bloodType}>
            <MdBloodtype className="m-2 size-16 rounded-full border-2 border-red-300 p-2" />
          </InfoCard>
        </div>
      </div>
      <div>
        <h4>Appointment history</h4>
        {user.appointments &&
          user.appointments.map((appointment) => {
            return (
              <div
                key={appointment.id}
                className="my-4 flex h-fit flex-col justify-center space-y-5 overflow-hidden rounded-3xl bg-white p-10 text-left align-middle shadow-md"
              >
                <div className="grid grid-cols-2 gap-2 font-semibold">
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
                    <span className="font-normal text-gray-500">
                      Department:{" "}
                    </span>
                    {appointment.department} / {appointment.medicalService}
                  </div>
                  <div>
                    <span className="font-normal text-gray-500">
                      Diagnostic:{" "}
                    </span>
                    {appointment.diagnostic}
                  </div>
                  <div>
                    <Button size="small">View details</Button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export const getStatusClass = (status) => {
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
