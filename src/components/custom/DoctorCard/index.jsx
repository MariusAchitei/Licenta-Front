import React from "react";
import { FaUserMd } from "react-icons/fa";

const DoctorCard = ({ doctor, selectedInterval, setSelectedInterval }) => {
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    return `${hour}:${minute}`;
  };

  const handleIntervalClick = (interval) => {
    // if (interval.isAvailable) {
    setSelectedInterval(interval);
    // }
  };

  return (
    <div className="flex flex-col items-start rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
      <div className="mb-4 flex items-center">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="mr-10 h-16 w-16 rounded-full"
          />
        ) : (
          <FaUserMd className="mr-10 h-16 w-16 text-gray-500" />
        )}
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
          Clinic
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {doctor.clinic}
        </p>
      </div>
      <div className="flex space-x-2">
        {doctor.intervals.map((interval, index) => (
          <div
            key={index}
            onClick={() => handleIntervalClick(interval)}
            className={`transform cursor-pointer rounded-md px-2 py-1 transition-transform duration-200 ${
              selectedInterval === interval
                ? "scale-105 bg-blue-200 text-blue-800"
                : "bg-green-200 text-green-800 hover:bg-green-300"
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
