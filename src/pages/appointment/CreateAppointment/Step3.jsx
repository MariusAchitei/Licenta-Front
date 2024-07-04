import React, { useState, useEffect } from "react";
import medicIntervalsData from "db/medicIntervals";
import { Card } from "flowbite-react";
import DoctorCard from "components/custom/DoctorCard";
import { Button } from "@windmill/react-ui";
import axiosInstance from "utils/axiosInstance";
import LoadingScreen from "pages/Loading";
import axiosAppointments from "utils/axiosAppointments";
import axios from "axios";
import { duration } from "@mui/material";

const Step3 = ({ formData, setFormData }) => {
  const [medicIntervals, setMedicIntervals] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState(null);
  const [availableMedics, setAvailableMedics] = useState([]);
  const [loading, setLoading] = useState(true);
  const { countyId, cityId, clinicId, medicId, medicalServiceId } = formData;

  useEffect(() => {
    const fetchMedics = async () => {
      try {
        const params = new URLSearchParams();
        countyId && params.append("countyId", countyId);
        cityId && params.append("cityId", cityId);
        clinicId && params.append("clinicId", clinicId);
        medicId && params.append("medicId", medicId);
        medicalServiceId && params.append("medicalServiceId", medicalServiceId);
        const result = await axiosInstance.get(`/public/form/medics`, {
          params,
        });
        setAvailableMedics(result.data);
        console.log("Medics", result.data);
        const filter = {
          providerIds: result.data.map((medic) => medic.externalId),
          //make them compatible with LocalDate from Java
          start: new Date(),
          //end date should be the end of the year
          stop: new Date(new Date().getFullYear(), 11, 31),
          duration: 30,
        };
        console.log("Filter", filter);
        axiosAppointments
          .post("/free-intervals", filter)
          .then((response) => {
            console.log("Free intervals", response.data);
            const data = [...response.data];
            console.log("Data", data);
            //update the data object, add the corresponding medic available based on externalId and providerId
            data.forEach((interval) => {
              interval.providerTimeSlots.forEach((provider) => {
                provider.medic = result.data.find(
                  (medic) => medic.externalId == provider.providerId,
                );
                console.log("Provider", provider);
              });
            });
            console.log("Data", data);
            data.sort((a, b) => a.date.localeCompare(b.date));
            setMedicIntervals(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching medic intervals:", error);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedics();

    setMedicIntervals(medicIntervalsData);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
              {day.providerTimeSlots.map((medic) => (
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
