import React from "react";
import { ScheduleXCalendar } from "@schedule-x/react";
import { useCalendarApp, useNextCalendarApp } from "@schedule-x/react";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";

export function ScheduleCalendar({
  events,
  handleEventClick,
  eventsServicePlugin,
}) {
  //   const eventClone = [...events];
  const calendarConfig = {
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events: events, // Assuming this function is defined elsewhere
    callbacks: {
      onEventClick: handleEventClick,
    },
    plugins: [eventsServicePlugin],
  };
  const calendar = useNextCalendarApp(calendarConfig);
  return (
    <ScheduleXCalendar calendarApp={calendar} onEventClick={handleEventClick} />
  );
}
