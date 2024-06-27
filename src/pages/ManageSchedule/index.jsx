import React, { useEffect, useState } from "react";
import { Button } from "@windmill/react-ui";
import WorkingHoursCard from "./WorkingHoursCard";

import "@schedule-x/theme-default/dist/index.css";
import { AddModal } from "./AddModal";
import { EditModal } from "./EditModal";
import { BathModal } from "./BathModal";

import { createEventsServicePlugin } from "@schedule-x/events-service";
import { ScheduleCalendar } from "./newFunction";

const eventsServicePlugin = createEventsServicePlugin();

const getDayOfWeekString = (dayIndex) => {
  switch (dayIndex) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      return "";
  }
};

function generateEventsForMonth(defaultWorkingHours) {
  const events = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // Current month (0-indexed)

  const formatDateTime = (date, time) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${time}`;

  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break; // Exit the loop if the month is over

    const dayOfWeek = getDayOfWeekString(date.getDay());
    const workingHours = defaultWorkingHours[dayOfWeek];

    workingHours.forEach((hours, index) => {
      events.push({
        id: `${day}-${index}`,
        title: `${hours.start.split(":")[0]}-${hours.end.split(":")[0]}`,
        start: formatDateTime(date, hours.start),
        end: formatDateTime(date, hours.end),
        className: "work-event",
      });
    });
  }

  return events;
}

export default function ManageSchedule() {
  const [defaultWorkingHours, setDefaultWorkingHours] = useState({
    monday: [
      { start: "09:00:00", end: "12:00:00" },
      { start: "13:00:00", end: "17:00:00" },
    ],
    tuesday: [
      { start: "09:00:00", end: "12:00:00" },
      { start: "13:00:00", end: "17:00:00" },
    ],
    wednesday: [
      { start: "09:00:00", end: "12:00:00" },
      { start: "13:00:00", end: "17:00:00" },
    ],
    thursday: [
      { start: "09:00:00", end: "12:00:00" },
      { start: "13:00:00", end: "17:00:00" },
    ],
    friday: [
      { start: "09:00:00", end: "12:00:00" },
      { start: "13:00:00", end: "19:00:00" },
    ],
    saturday: [],
    sunday: [],
  });
  const [events, setEvents] = useState(
    generateEventsForMonth(defaultWorkingHours),
  );
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
    console.log("S-a selectat");
    console.log(event);
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  const handleSaveEvent = (date, startTime, endTime) => {
    setEditModalOpen(false);
    eventsServicePlugin.update({
      ...selectedEvent,
      start: `${date} ${startTime}`,
      end: `${date} ${endTime}`,
      title: `${startTime.split(":")[0]}-${endTime.split(":")[0]}`,
    });
  };

  const handleDeleteEvent = (calendarEvent) => {
    setEditModalOpen(false);
    eventsServicePlugin.remove(selectedEvent.id);
  };

  const handleAddEvent = (date, startTime, endTime) => {
    setAddModalOpen(false);
    eventsServicePlugin.add({
      start: `${date} ${startTime}`,
      end: `${date} ${endTime}`,
      title: `${startTime.split(":")[0]}-${endTime.split(":")[0]}`,
      id: `${date}-${startTime}`,
    });
  };

  const handleBatchAddEvents = (startDate, endDate) => {
    const newEvents = [];
    const daysOfWeek = [1, 2, 3, 5]; // Monday, Tuesday, Wednesday, Friday
    setBatchModalOpen(false);
    for (
      let date = new Date(startDate);
      date <= new Date(endDate);
      date.setDate(date.getDate() + 1)
    ) {
      const dateString = date.toISOString().split("T")[0];

      if (!events.some((e) => e.start.startsWith(dateString))) {
        defaultWorkingHours[getDayOfWeekString(date.getDay())].forEach(
          (hours) => {
            eventsServicePlugin.add({
              id: `batch-${dateString}-${hours.start}`,
              title: `${hours.start.split(":")[0]}-${hours.end.split(":")[0]}`,
              start: `${dateString} ${hours.start}`,
              end: `${dateString} ${hours.end}`,
              className: "work-event",
            });
          },
        );
      }
    }
  };

  return (
    <>
      <div className="space-y-8">
        <div className="mt-10 space-y-12 rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Medic Schedule
          </h3>
          <div className="mx-10 flex min-w-[90%] flex-col text-sm md:flex-row lg:mx-24">
            <div className="flex-grow">
              <ScheduleCalendar
                events={events}
                handleEventClick={handleEventClick}
                eventsServicePlugin={eventsServicePlugin}
              />
              {/* {ScheduleCalendar(events, handleEventClick, eventsServicePlugin)} */}
              <style jsx global>{`
                .work-event {
                  background-color: #f0f8ff !important;
                }
                .free-day-event {
                  background-color: #ffe4e1 !important;
                }
              `}</style>
            </div>
            <div className="flex flex-row justify-around px-5 md:flex-col">
              <Button onClick={() => setAddModalOpen(true)}>
                Create Interval
              </Button>
              <Button onClick={() => setBatchModalOpen(true)}>
                Create Batch Intervals
              </Button>
            </div>
          </div>
        </div>
      </div>

      <EditModal
        isEditModalOpen={isEditModalOpen}
        setEditModalOpen={setEditModalOpen}
        selectedEvent={selectedEvent}
        setNewEventData={setNewEventData}
        handleDeleteEvent={handleDeleteEvent}
        handleSaveEvent={handleSaveEvent}
      />

      <EditModal
        isEditModalOpen={isAddModalOpen}
        setEditModalOpen={setAddModalOpen}
        selectedEvent={null}
        setNewEventData={setNewEventData}
        handleDeleteEvent={handleDeleteEvent}
        handleSaveEvent={handleAddEvent}
      />

      {BathModal(
        isBatchModalOpen,
        setBatchModalOpen,
        setNewEventData,
        newEventData,
        handleBatchAddEvents,
      )}
      <WorkingHoursCard
        workingHours={defaultWorkingHours}
        setWorkingHours={setDefaultWorkingHours}
      />
    </>
  );
}
