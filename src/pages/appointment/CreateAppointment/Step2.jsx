import React, { useState, useEffect } from "react";
import { Select, Card } from "flowbite-react";
import axiosInstance from "utils/axiosInstance";
const axios = axiosInstance;

const Step2 = ({ formData, setFormData }) => {
  const [counties, setCounties] = useState([]);
  const [cities, setCities] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [medics, setMedics] = useState([]);

  useEffect(() => {
    const fetchCounties = async () => {
      try {
        const response = await axios.get("/public/counties");
        setCounties(response.data);
      } catch (error) {
        console.error("Error fetching counties:", error);
      }
    };
    fetchCounties();
  }, []);

  const handleCountyChange = async (event) => {
    const countyId = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      countyId,
      cityId: "",
      clinicId: "",
      medicId: "",
    }));
    setCities([]);
    setClinics([]);
    setMedics([]);

    try {
      const response = await axios.get(`/public/cities/${countyId}`);
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCityChange = async (event) => {
    const cityId = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      cityId,
      clinicId: "",
      medicId: "",
    }));
    setClinics([]);
    setMedics([]);

    try {
      const response = await axios.get(`/public/clinics?cityId=${cityId}`);
      setClinics(response.data);
    } catch (error) {
      console.error("Error fetching clinics:", error);
    }
  };

  const handleClinicChange = async (event) => {
    const clinicId = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      clinicId,
      medicId: "",
    }));
    setMedics([]);

    try {
      const response = await axios.get(
        `/public/form/medics?clinicId=${clinicId}`,
      );
      setMedics(response.data);
    } catch (error) {
      console.error("Error fetching medics:", error);
    }
  };

  const handleMedicChange = (event) => {
    console.log("medics", medics);
    const medicId = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      medicId,
    }));
  };

  return (
    <div>
      <Card>
        <div className="mb-4">
          <Select
            onChange={handleCountyChange}
            value={formData.countyId}
            className="w-full"
          >
            <option value="" disabled>
              Select County
            </option>
            {counties.map((county) => (
              <option key={county.id} value={county.id}>
                {county.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Select
            onChange={handleCityChange}
            value={formData.cityId}
            className="w-full"
            disabled={!formData.countyId}
          >
            <option value="" disabled>
              Select City
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Select
            onChange={handleClinicChange}
            value={formData.clinicId}
            className="w-full"
            disabled={!formData.cityId}
          >
            <option value="" disabled>
              Select Clinic
            </option>
            {clinics.map((clinic) => (
              <option key={clinic.id} value={clinic.id}>
                {clinic.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="mb-4">
          <Select
            onChange={handleMedicChange}
            value={formData.medicId}
            className="w-full"
            disabled={!formData.clinicId}
          >
            <option value="" disabled>
              Select Medic
            </option>
            {medics.map((medic) => (
              <option key={medic.id} value={medic.id}>
                {medic.professionalTitle} {medic.firstName} {medic.lastName}
              </option>
            ))}
          </Select>
        </div>
      </Card>
    </div>
  );
};

export default Step2;
