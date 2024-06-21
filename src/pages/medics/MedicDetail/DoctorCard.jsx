import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@windmill/react-ui";

export default function DoctorCard({ doctor }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-10 py-5 text-lg shadow-md lg:flex-row">
      <div className="h-52 w-52 flex-shrink-0 overflow-hidden rounded-2xl">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
        <p className=" text-gray-600">{doctor.specialty}</p>
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-yellow-300" />
              ))}
          </div>
          <span className="ml-2  text-gray-600">
            {doctor.rating.score} ({doctor.reviews.length} reviews)
          </span>
        </div>
        <p className="mt-1  text-gray-600">{doctor.views} views</p>
      </div>
      <div className="flex flex-col space-y-3 text-right">
        <p className=" text-gray-600">{doctor.clinicName}</p>
        <p className=" text-gray-600">{doctor.clinicAddress}</p>
        <Button className="ml-auto" layout="outline">
          (see map)
        </Button>
        <Button className="ml-auto">Book now</Button>
      </div>
    </div>
  );
}
