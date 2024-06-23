import React from "react";
import { Button } from "@windmill/react-ui";
import { Modal } from "flowbite-react";

export function BathModal(
  isBatchModalOpen,
  setBatchModalOpen,
  setNewEventData,
  newEventData,
  handleBatchAddEvents,
) {
  return (
    <Modal
      dismissible
      show={isBatchModalOpen}
      // className="absolute left-[50%] top-[50%]"
      onClose={() => setBatchModalOpen(false)}
    >
      <Modal.Header>Create Batch Intervals</Modal.Header>
      <Modal.Body>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Start Date
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) =>
              setNewEventData({ ...newEventData, start: e.target.value })
            }
          />
        </label>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          End Date
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) =>
              setNewEventData({ ...newEventData, end: e.target.value })
            }
          />
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() =>
            handleBatchAddEvents(newEventData.start, newEventData.end)
          }
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
