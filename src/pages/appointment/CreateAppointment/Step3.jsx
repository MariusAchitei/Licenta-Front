import React, { useState } from "react";

import medicIntervalsData from "db/medicIntervals";
import { useEffect } from "react";
import DoctorCard from "components/custom/DoctorCard";

const Step3 = () => {
  const [medicIntervals, setMedicIntervals] = useState([]);
  useEffect(() => {
    setMedicIntervals(medicIntervalsData);
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold">Step 3: Choose an medicInterval</h2>
      <div className="min-h-screen ">
        {medicIntervals.map((day, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold">
              {new Date(day.date).toLocaleDateString("ro-RO", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              This week
            </p>
            <div className="flex flex-wrap -mx-2">
              {day.medics.map((medic, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <DoctorCard doctor={medic} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
