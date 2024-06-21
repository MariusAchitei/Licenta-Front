import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";

export default function DoctorBio() {
  const calendar = useCalendarApp({
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events: [
      {
        id: "1",
        title: "Event 1",
        start: "2024-06-20 09:00",
        end: "2024-06-20 10:00",
      },
    ],
  });

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Doctor Bio
      </h3>
      <p className="mt-2 text-gray-600">
        Dr. Martin Adrian is an experienced doctor with a passion for providing
        excellent care to patients. Dr. Adrian has a wide variety of medical
        settings, with particular expertise in cardiology...
      </p>
      <div className="text-sm">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </div>
  );
}
