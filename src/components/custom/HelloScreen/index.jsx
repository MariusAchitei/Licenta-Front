import React from "react";
import "./HelloScreen.css"; // Import the CSS file
import { IoIosAddCircleOutline } from "react-icons/io";

import WidgetBody from "../Widget/WidgetBody";

const HelloScreen = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    // <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-10 py-10 text-lg shadow-md lg:flex-row">
      <WidgetBody>
        <div className="flex flex-col items-center justify-between rounded-lg p-6 shadow-lg md:flex-row">
          <div className="mb-4 text-left md:mb-0">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {formattedDate}
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Hello, Marius Dumitru,
              <br />
              we wish you a wonderful day!
            </div>
            <div className="mt-4 flex flex-wrap space-x-2">
              <button className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-100">
                Appointments
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-100">
                Invoices
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-100">
                Virtual Clinic
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-100">
                News
              </button>
              <button className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-100">
                Support
              </button>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="pulsate flex items-center rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg hover:bg-red-600">
              <IoIosAddCircleOutline />
              <span className="ml-2">Request an Appointment</span>
            </button>
          </div>
        </div>
      </WidgetBody>
    </div>
  );
};

export default HelloScreen;
