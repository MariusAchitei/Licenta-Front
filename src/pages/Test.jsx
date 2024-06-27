import React, { useState, useEffect } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  viewWeek,
  viewDay,
  viewMonthGrid,
  viewMonthAgenda,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/event-recurrence";
import "@schedule-x/theme-default/dist/index.css";

function Test() {
  // Initial events
  const initialEvents = [
    {
      id: "1",
      title: "Event 1",
      start: "2023-12-16",
      end: "2023-12-16",
    },
  ];

  // State to manage events
  const [events, setEvents] = useState(initialEvents);

  // Initialize the events service plugin
  const eventsService = createEventsServicePlugin();

  // Initialize the calendar
  const calendar = useCalendarApp({
    defaultView: viewMonthGrid.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    plugins: [eventsService],
    events: events,
  });

  //   useEffect(() => {
  //     calendar.render(document.getElementById("calendar"));
  //   }, [calendar]);

  // Function to update events
  const updateEvents = (newEvents) => {
    setEvents(newEvents);
    // calendar.updateEvents(newEvents); // Assuming updateEvents is a method provided by the calendar instance
  };

  // Function to delete an event
  const handleDeleteEvent = (eventId) => {
    eventsService.remove(eventId);
    const updatedEvents = events.filter((e) => e.id !== eventId);
    updateEvents(updatedEvents);
  };

  return (
    <div>
      <button onClick={() => handleDeleteEvent("1")}>Delete Event 1</button>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default Test;
