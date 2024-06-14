import React from "react";

const DoctorCard = ({ doctor }) => {
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    return `${hour}:${minute}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-start">
      <div className="flex items-center mb-4">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-16 h-16 rounded-full mr-10"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {doctor.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {doctor.title}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {doctor.department}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Rating {doctor.rating} • {doctor.reviewsNb} reviews
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Clinica
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {doctor.clinic}
        </p>
      </div>
      <div className="flex space-x-2">
        {doctor.intervals.map((interval, index) => (
          <div
            key={index}
            className={`px-2 py-1 rounded-md ${
              interval.isAvailable
                ? "bg-green-200 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {formatTime(interval.start)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
