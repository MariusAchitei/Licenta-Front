import React from "react";
import { Button } from "@windmill/react-ui";
import { NavLink } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  return (
    <div className="flex items-center rounded-lg bg-white px-10 py-10 shadow-lg">
      <div className="h-36 w-36 flex-shrink-0 rounded-lg bg-gray-200">
        {/* Placeholder for the doctor's image */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="ml-4 flex-1 space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
        <hr />
        <p className="text-gray-600">{doctor.specialty}</p>
        <p className="text-gray-600">{doctor.location}</p>
        <p className="text-gray-600">{doctor.experience} years of experience</p>
        <div className="mt-2 flex items-center space-x-2">
          {/* <img
            src={doctor.clinic.logo}
            alt={doctor.clinic.name}
            className="size-16 rounded-full"
          /> */}
          {/* <div>
            <p className="text-gray-600">{doctor.clinic.name}</p>
            <p className="text-gray-600">{doctor.clinic.location}</p>
          </div> */}
        </div>
        <hr />
        <div className="mt-2 flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${
                  i < doctor.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.336 4.098a1 1 0 00.95.691h4.316c.969 0 1.371 1.24.588 1.81l-3.49 2.545a1 1 0 00-.364 1.118l1.337 4.097c.3.921-.755 1.688-1.54 1.118l-3.49-2.545a1 1 0 00-1.175 0l-3.49 2.545c-.784.57-1.839-.197-1.54-1.118l1.337-4.097a1 1 0 00-.364-1.118l-3.49-2.545c-.784-.57-.38-1.81.588-1.81h4.316a1 1 0 00.95-.691l1.336-4.098z" />
              </svg>
            ))}
          <span className="ml-2 text-gray-600">({doctor.reviews} reviews)</span>
        </div>
      </div>
      <div className="ml-4 flex flex-col space-y-2">
        <NavLink to={"/app/create-appointment"}>
          <Button>Book Appointment</Button>
        </NavLink>
        <NavLink to="/app/medic-detail">
          <Button layout="outline">See details</Button>
        </NavLink>
      </div>
    </div>
  );
}
