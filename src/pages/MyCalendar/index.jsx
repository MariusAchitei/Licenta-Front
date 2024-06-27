import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaNotesMedical,
  FaCheckCircle,
  FaTimesCircle,
  FaRegClock,
} from "react-icons/fa";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";
import appointments from "./mockAppointments"; // Import the mock appointments
import { Button } from "@windmill/react-ui";

import "@schedule-x/theme-default/dist/index.css";

const statusColors = {
  scheduled: "bg-yellow-200 text-yellow-800",
  completed: "bg-green-200 text-green-800",
  canceled: "bg-red-200 text-red-800",
};

const statusIcons = {
  scheduled: <FaRegClock />,
  completed: <FaCheckCircle />,
  canceled: <FaTimesCircle />,
};

const MyCalendar = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event) => {
    const appointment = appointments.find(
      (appt) =>
        appt.date === event.start.split(" ")[0] &&
        appt.start === event.start.split(" ")[1],
    );
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const events = appointments.map((appointment, index) => ({
    id: index,
    title: appointment.service.name,
    start: `${appointment.date} ${appointment.start}`,
    end: `${appointment.date} ${appointment.end}`,
    className: `appointment-event ${statusColors[appointment.status]}`,
  }));

  const calendarConfig = {
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events,
    callbacks: {
      onEventClick: handleEventClick,
    },
  };

  const calendar = useCalendarApp(calendarConfig);

  return (
    <div>
      <div className="mt-10 space-y-12 rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          My Calendar
        </h3>
        <div className="mx-36 text-sm">
          <ScheduleXCalendar calendarApp={calendar} />
          <style jsx global>{`
            .appointment-event {
              border-left: 5px solid;
              padding-left: 10px;
            }
          `}</style>
        </div>
      </div>

      {selectedAppointment && (
        <Modal
          dismissible
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <Modal.Header>Appointment Details</Modal.Header>
          <Modal.Body>
            <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md">
              <img
                src={`https://randomuser.me/api/portraits/men/${selectedAppointment.patient.id}.jpg`}
                alt="Patient"
                className="mb-4 size-16 rounded-full"
              />
              <div className="text-center">
                <h3 className="mb-2 flex items-center justify-center text-lg font-semibold">
                  <FaUser className="mr-2" /> {selectedAppointment.patient.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Age: {selectedAppointment.patient.age} years
                </p>
                <div className="mt-4">
                  <p className="mb-2 flex items-center">
                    <FaNotesMedical className="mr-2" /> {"service: "}
                    {selectedAppointment.service.name}
                  </p>
                  <p className="mb-2 flex items-center">
                    <FaCalendarAlt className="mr-2" /> {"date: "}
                    {selectedAppointment.date}
                  </p>
                  <p className="flex items-center">
                    <FaClock className="mr-2" /> {selectedAppointment.start} -{" "}
                    {"interval: "}
                    {selectedAppointment.end}
                  </p>
                  <p className="mt-2 flex items-center">
                    <FaNotesMedical className="mr-2" /> {"reason: "}
                    {selectedAppointment.reason}
                  </p>
                  <p
                    className={`mt-2 flex items-center ${statusColors[selectedAppointment.status]}`}
                  >
                    {statusIcons[selectedAppointment.status]}{" "}
                    <span className="ml-2">{selectedAppointment.status}</span>
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => (window.location.href = "/app/appointment-detail")}
            >
              See Details
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default MyCalendar;
