import React from "react";
import { Button } from "@windmill/react-ui";
import axiosAppointments from "utils/axiosAppointments";
import { useError } from "contexts/ErrorConntext";

function WorkingHoursCard({ workingHours, setWorkingHours }) {
  const { addError } = useError();
  const handleTimeChange = (day, index, type, value) => {
    setWorkingHours((prev) => {
      const updatedHours = { ...prev };
      updatedHours[day].workingHours[index][type] = value;
      return updatedHours;
    });
  };

  const handleAddTimeSlot = (day) => {
    setWorkingHours((prev) => {
      const updatedHours = { ...prev };
      updatedHours[day].workingHours.push({
        start: "00:00:00",
        end: "00:00:00",
      });
      return updatedHours;
    });
  };

  const handleRemoveTimeSlot = (day, index) => {
    setWorkingHours((prev) => {
      const updatedHours = { ...prev };
      updatedHours[day].workingHours.splice(index, 1);
      return updatedHours;
    });
  };

  const handleSaveConfiguration = () => {
    const newWorkingHours = {
      monday: JSON.stringify(workingHours.monday),
      tuesday: JSON.stringify(workingHours.tuesday),
      wednesday: JSON.stringify(workingHours.wednesday),
      thursday: JSON.stringify(workingHours.thursday),
      friday: JSON.stringify(workingHours.friday),
      saturday: JSON.stringify(workingHours.saturday),
      sunday: JSON.stringify(workingHours.sunday),
    };
    axiosAppointments
      .put("/work-plans/1000", newWorkingHours)
      .then((response) => {
        addError("Working hours saved successfully", "success");
        console.log("Working hours saved:", response.data);
      })
      .catch((error) => {
        addError("Error saving working hours", "error");
        console.error("Error saving working hours:", error);
      });
  };

  const renderTimeSlots = (day, times) => (
    <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
      {times.map((time, index) => (
        <li key={index} className="mb-2">
          <label>
            Start:
            <input
              type="time"
              value={time.start}
              onChange={(e) =>
                handleTimeChange(day, index, "start", e.target.value)
              }
              className="ml-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label className="ml-4">
            End:
            <input
              type="time"
              value={time.end}
              onChange={(e) =>
                handleTimeChange(day, index, "end", e.target.value)
              }
              className="ml-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <Button
            layout="outline"
            className="ml-4 text-red-600"
            onClick={() => handleRemoveTimeSlot(day, index)}
          >
            Remove
          </Button>
        </li>
      ))}
      <Button onClick={() => handleAddTimeSlot(day)}>Add Time Slot</Button>
    </ul>
  );

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Default Working Hours
      </h3>
      <Button className="my-5" onClick={handleSaveConfiguration}>
        Save configuration
      </Button>
      <div className="flex flex-wrap space-x-5">
        {Object.entries(workingHours).map(([day, times]) => (
          <div key={day} className="mt-4 rounded-3xl bg-white p-5 shadow-2xl">
            <h4 className="font-medium capitalize text-gray-800">{day}</h4>
            {times.workingHours?.length > 0 ? (
              renderTimeSlots(day, times.workingHours)
            ) : (
              <Button onClick={() => handleAddTimeSlot(day)}>
                Add Time Slot
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingHoursCard;
