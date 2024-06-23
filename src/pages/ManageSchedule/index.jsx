import React, { useState } from "react";
import {
  Button,
  // Modal,
  // Modal.Body,
  // Modal.Footer,
  // Modal.Header,
} from "@windmill/react-ui";
import { FaStar } from "react-icons/fa";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";
import WorkingHoursCard from "./WorkingHoursCard";

import "@schedule-x/theme-default/dist/index.css";
import { AddModal } from "./AddModal";
import { EditModal } from "./EditModal";
import { BathModal } from "./BathModal";

const defaultWorkingHours = [
  { start: "09:00:00", end: "12:00:00" },
  { start: "13:00:00", end: "17:00:00" },
];

function generateEventsForMonth() {
  const events = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // Current month (0-indexed)

  const formatDateTime = (date, hour, minute = "00") =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${hour}:${minute}`;

  const daysOfWeek = [1, 2, 3, 5]; // Monday, Tuesday, Wednesday, Friday

  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break; // Exit the loop if the month is over

    if (daysOfWeek.includes(date.getDay())) {
      // Add events for the specified days of the week
      events.push({
        id: `${day}-morning`,
        title: "9-12",
        start: formatDateTime(date, "09"),
        end: formatDateTime(date, "12"),
        className: "work-event",
      });

      events.push({
        id: `${day}-afternoon`,
        title: "13-18",
        start: formatDateTime(date, "13"),
        end: formatDateTime(date, "18"),
        className: "work-event",
      });
    } else {
      // Add "Free Day" event for other days
      events.push({
        id: `${day}-free`,
        title: "Free Day",
        start: formatDateTime(date, "00"),
        end: formatDateTime(date, "23", "59"),
        className: "free-day-event",
      });
    }
  }

  return events;
}

export default function ManageSchedule() {
  const [events, setEvents] = useState(generateEventsForMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isBatchModalOpen, setBatchModalOpen] = useState(false);
  const [newEventData, setNewEventData] = useState({
    title: "",
    start: "",
    end: "",
  });

  const handleEventClick = (event) => {
    console.log("Event clicked:", event);
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  const calendarConfig = {
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events: generateEventsForMonth(), // Assuming this function is defined elsewhere
    callbacks: {
      onEventClick: handleEventClick,
    },
  };

  const calendar = useCalendarApp(calendarConfig);

  const handleSaveEvent = () => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === selectedEvent.id
          ? { ...selectedEvent, ...newEventData }
          : event,
      ),
    );
    setEditModalOpen(false);
  };

  const handleDeleteEvent = () => {
    console.log("Deleting event:", selectedEvent);
    console.log("Events before deletion:", events);
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== selectedEvent.id),
    );
    setEditModalOpen(false);
  };

  const handleAddEvent = () => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { ...newEventData, id: `new-${Date.now()}` },
    ]);
    setAddModalOpen(false);
  };

  const handleBatchAddEvents = (startDate, endDate) => {
    const newEvents = [];
    const daysOfWeek = [1, 2, 3, 5]; // Monday, Tuesday, Wednesday, Friday

    for (
      let date = new Date(startDate);
      date <= new Date(endDate);
      date.setDate(date.getDate() + 1)
    ) {
      if (daysOfWeek.includes(date.getDay())) {
        const dateString = date.toISOString().split("T")[0];

        if (!events.some((e) => e.start.startsWith(dateString))) {
          defaultWorkingHours.forEach((hours) => {
            newEvents.push({
              id: `batch-${dateString}-${hours.start}`,
              title: `${hours.start.split(":")[0]}-${hours.end.split(":")[0]}`,
              start: `${dateString} ${hours.start}`,
              end: `${dateString} ${hours.end}`,
              className: "work-event",
            });
          });
        }
      }
    }

    setEvents((prevEvents) => [...prevEvents, ...newEvents]);
    setBatchModalOpen(false);
  };

  return (
    <>
      <div className="space-y-8">
        <WorkingHoursCard workingHours={defaultWorkingHours} />

        <div className="mt-10 space-y-12 rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Medic Schedule
          </h3>
          <div className="mx-36 text-sm">
            <ScheduleXCalendar
              calendarApp={calendar}
              onEventClick={handleEventClick}
            />
            <style jsx global>{`
              .work-event {
                background-color: #f0f8ff !important;
              }
              .free-day-event {
                background-color: #ffe4e1 !important;
              }
            `}</style>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button onClick={() => setAddModalOpen(true)}>Create Interval</Button>
          <Button onClick={() => setBatchModalOpen(true)}>
            Create Batch Intervals
          </Button>
        </div>
      </div>

      {EditModal(
        isEditModalOpen,
        setEditModalOpen,
        newEventData,
        setNewEventData,
        handleDeleteEvent,
        handleSaveEvent,
      )}

      {AddModal(
        isAddModalOpen,
        setAddModalOpen,
        newEventData,
        setNewEventData,
        handleAddEvent,
      )}

      {BathModal(
        isBatchModalOpen,
        setBatchModalOpen,
        setNewEventData,
        newEventData,
        handleBatchAddEvents,
      )}
    </>
  );
}
