import React from "react";

function WorkingHoursCard({ workingHours }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Default Working Hours
      </h3>
      <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
        {workingHours.map((hours, index) => (
          <li key={index}>
            {hours.start} - {hours.end}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkingHoursCard;
