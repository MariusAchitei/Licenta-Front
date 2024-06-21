import React, { useState, useEffect } from "react";
import medicIntervalsData from "db/medicIntervals";
import { Card } from "flowbite-react";
import DoctorCard from "components/custom/DoctorCard";
import { Button } from "@windmill/react-ui";

const Step3 = () => {
  const [medicIntervals, setMedicIntervals] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(null);

  useEffect(() => {
    setMedicIntervals(medicIntervalsData);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">
        Step 3: Choose an appointment interval
      </h2>
      <div className="min-h-screen">
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
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              This week
            </p>
            <div className="-mx-2 flex flex-wrap">
              {day.medics.map((medic) => (
                <div
                  key={medic.id}
                  className="mb-4 w-full px-2 md:w-1/2 lg:w-1/3"
                >
                  <Card>
                    <DoctorCard
                      doctor={medic}
                      selectedInterval={selectedInterval}
                      setSelectedInterval={setSelectedInterval}
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedInterval && (
        <div className="mt-4 flex justify-end">
          <Button onClick={() => alert("Preview Appointment")}>
            Preview Appointment
          </Button>
        </div>
      )}
    </div>
  );
};

export default Step3;
