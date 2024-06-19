import React from "react";
import Section from "./Section";
import { RiInformation2Line } from "react-icons/ri";

const PersonalInfo = ({ data }) => {
  return (
    <>
      <h2 className="mb-4 font-semibold">Personal Information</h2>
      <div className="flex">
        <p className="mb-6 text-gray-600">
          <RiInformation2Line className="mr-2 inline" />
          Please keep us updated with any changes to your personal information
          to maintain access to medical information.
        </p>
      </div>

      <div className="mb-6 flex items-center">
        <div className="mr-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
          <svg
            className="h-16 w-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 1-7 7v1h14v-1a7 7 0 0 1-7-7z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <button className="text-blue-500 hover:underline">
            Change Photo
          </button>
          <button className="ml-4 text-red-500 hover:underline">Remove</button>
        </div>
      </div>

      <form>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2"
            value="Achitei"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2"
            value="Marius Dumitru"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Citizenship
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2"
            value="Romanian"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            National Identification Number
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-2"
            value="5021025226727"
            readOnly
          />
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
