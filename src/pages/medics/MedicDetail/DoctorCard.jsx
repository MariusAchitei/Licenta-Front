import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@windmill/react-ui";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";

function generateEventsForMonth() {
  const events = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // Current month (0-indexed)

  // Helper function to format date and time
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

export default function DoctorCard({ doctor }) {
  const calendar = useCalendarApp({
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events: generateEventsForMonth(),
  });
  return (
    <>
      <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md lg:flex-row">
        <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-2xl">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
          <p className=" text-gray-600">{doctor.specialty}</p>
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 text-yellow-300" />
                ))}
            </div>
            <span className="ml-2  text-gray-600">
              {doctor.rating.score} (43 reviews)
            </span>
          </div>
          <p className="mt-1  text-gray-600">{doctor.views} views</p>
        </div>
        <div className="flex flex-col space-y-3 text-right">
          <p className=" text-gray-600">{doctor.clinicName}</p>
          <p className=" text-gray-600">{doctor.clinicAddress}</p>
          <Button className="ml-auto" layout="outline">
            (see map)
          </Button>
          <Button className="ml-auto">Book now</Button>
        </div>
      </div>
      <div className="mt-10 space-y-12 rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Medic Schedule
        </h3>
        <div className="mx-36  text-sm">
          <ScheduleXCalendar calendarApp={calendar} />
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
    </>
  );
}
