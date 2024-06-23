import React from "react";
import { Button } from "@windmill/react-ui";
import { Modal } from "flowbite-react";

export function AddModal(
  isAddModalOpen,
  setAddModalOpen,
  newEventData,
  setNewEventData,
  handleAddEvent,
) {
  return (
    <Modal
      dismissible
      show={isAddModalOpen}
      onClose={() => setAddModalOpen(false)}
    >
      <Modal.Header>Create Interval</Modal.Header>
      <Modal.Body>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Title
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={newEventData.title}
            onChange={(e) =>
              setNewEventData({ ...newEventData, title: e.target.value })
            }
          />
        </label>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Start Date
          <input
            type="datetime-local"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={newEventData.start}
            onChange={(e) =>
              setNewEventData({ ...newEventData, start: e.target.value })
            }
          />
        </label>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          End Date
          <input
            type="datetime-local"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={newEventData.end}
            onChange={(e) =>
              setNewEventData({ ...newEventData, end: e.target.value })
            }
          />
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleAddEvent}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}
