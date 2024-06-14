import React from "react";
import "./HelloScreen.css"; // Import the CSS file
import { IoIosAddCircleOutline } from "react-icons/io";
import Widget from "../Widget";
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
    <Widget>
      <WidgetBody>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-lg">
        <div className="text-left mb-4 md:mb-0">  
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            {formattedDate}
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Hello, Marius Dumitru,
            <br />
            we wish you a wonderful day!
          </div>
          <div className="mt-4 flex flex-wrap space-x-2">
            <button className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 shadow-md">
              Appointments
            </button>
            <button className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 shadow-md">
              Invoices
            </button>
            <button className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 shadow-md">
              Virtual Clinic
            </button>
            <button className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 shadow-md">
              News
            </button>
            <button className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 shadow-md">
              Support
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white rounded-lg px-6 py-3 shadow-lg hover:bg-red-600 flex items-center pulsate">
            <IoIosAddCircleOutline />
            <span className="ml-2">Request an Appointment</span>
          </button>
        </div>
      </div>
      </WidgetBody>
    </Widget>
  );
};

export default HelloScreen;
