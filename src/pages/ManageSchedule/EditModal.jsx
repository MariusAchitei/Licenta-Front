import React, { useState, useEffect } from "react";
import { Button } from "@windmill/react-ui";
import { Modal } from "flowbite-react";

function getDateFromDateTime(dateString) {
  // if (!dateString) return null;
  return dateString?.split(" ")[0];
  const [datePart, timePart] = dateString.split(" ");

  // Split the individual components of the date and time
  const [year, month, day] = datePart.split("-").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  // Create a new Date object using the components
  const date = new Date(year, month - 1, day, hours, minutes);

  console.log(date);
}

export function EditModal({
  isEditModalOpen,
  setEditModalOpen,
  selectedEvent,
  setNewEventData,
  handleDeleteEvent,
  handleSaveEvent,
}) {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  console.log("S-a selectat");
  console.log(selectedEvent);

  useEffect(() => {
    console.log("Dumnezeii mati de cacat");
    setDate(getDateFromDateTime(selectedEvent?.start));
    setStartTime(selectedEvent?.start.split(" ")[1]);
    setEndTime(selectedEvent?.end.split(" ")[1]);
  }, [isEditModalOpen]);

  return (
    <Modal
      dismissible
      show={isEditModalOpen}
      onClose={() => setEditModalOpen(false)}
    >
      <Modal.Header>Edit Event</Modal.Header>
      <Modal.Body>
        {/* <label className="mb-2 block text-sm font-medium text-gray-700">
          Title
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={selectedEvent?.title}
            onChange={(e) =>
              setNewEventData({ ...selectedEvent, title: e.target.value })
            }
          />
        </label> */}
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Date
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Start time
          <input
            type="time"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Stop time
          <input
            type="time"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button layout="outline" onClick={handleDeleteEvent}>
          Delete
        </Button>
        <Button onClick={() => handleSaveEvent(date, startTime, endTime)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
