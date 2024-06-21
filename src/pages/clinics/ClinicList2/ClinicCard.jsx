import React from "react";
import { Button } from "@windmill/react-ui";
import { FaMapLocationDot } from "react-icons/fa6";

export default function ClinicCard({ clinic }) {
  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full overflow-hidden rounded-lg md:w-1/4">
          <img
            src={clinic.image}
            alt={clinic.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-0 flex-1 md:ml-6">
          <h2 className="text-2xl font-bold text-gray-900">{clinic.name}</h2>
          <p className="text-sm text-gray-600">{clinic.type}</p>
          <p className="text-sm text-gray-600">{clinic.distanceToCenter}</p>
          <div className="mt-1 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < clinic.rating ? "text-yellow-500" : "text-gray-300"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.336 4.098a1 1 0 00.95.691h4.316c.969 0 1.371 1.24.588 1.81l-3.49 2.545a1 1 0 00-.364 1.118l1.337 4.097c.3.921-.755 1.688-1.54 1.118l-3.49-2.545a1 1 0 00-1.175 0l-3.49 2.545c-.784.57-1.839-.197-1.54-1.118l1.337-4.097a1 1 0 00-.364-1.118l-3.49-2.545c-.784-.57-.38-1.81.588-1.81h4.316a1 1 0 00.95-.691l1.336-4.098z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {clinic.rating} ({clinic.reviews} reviews)
            </span>
          </div>
          <div className="mt-2 flex items-center">
            <svg
              className="h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3.5a5.5 5.5 0 00-5.5 5.5 5.5 5.5 0 0010.32 2.385l4.28 4.28a1 1 0 001.415-1.414l-4.28-4.28A5.5 5.5 0 0010 3.5zM8.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            <p className="ml-2 text-sm text-gray-600">{clinic.address}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col space-y-2 text-right md:ml-6 md:mt-0">
          <Button>View Clinic</Button>
          <Button layout="outline">Make an Appointment</Button>
          <a href={clinic.mapLink}>
            <FaMapLocationDot className="m-auto size-14 rounded-full bg-gray-100 p-1 text-purple-500" />
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">
          About {clinic.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{clinic.description}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-gray-600">{clinic.size} m²</span>
          <span className="ml-4 text-sm text-gray-600">
            {clinic.doctorsCount} doctors
          </span>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-medium text-gray-900">Top amenities</h4>
          <div className="mt-2 flex items-center">
            {clinic.amenities.map((amenity, index) => (
              <div key={index} className="mr-4 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a5.5 5.5 0 00-5.5 5.5 5.5 5.5 0 0010.32 2.385l4.28 4.28a1 1 0 001.415-1.414l-4.28-4.28A5.5 5.5 0 0010 3.5zM8.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span className="ml-2 text-sm text-gray-600">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
