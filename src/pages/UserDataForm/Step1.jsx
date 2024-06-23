import React, { useState } from "react";
import { TextInput, Card } from "flowbite-react";
import {
  AiOutlineIdcard,
  AiOutlinePhone,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FaUser, FaCity } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Select } from "@windmill/react-ui";
import counties from "db/counties"; // Replace with the actual path to your counties data
import image from "assets/images/user-data-step-1.jpg";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [county, setCounty] = useState(formData.county);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountyChange = (e) => {
    const selectedCounty = counties.find((c) => c.id === e.target.value);
    setCounty(selectedCounty);
    setFormData({ ...formData, county: e.target.value, city: "" });
  };

  const handleCityChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <Card className="flex-1 p-4 shadow-lg">
        <div className="mb-4 grid gap-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <TextInput
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                icon={FaUser}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <TextInput
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                icon={FaUser}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="personalId"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Personal ID
            </label>
            <TextInput
              id="personalId"
              name="personalId"
              value={formData.personalId}
              onChange={handleChange}
              placeholder="Personal ID"
              icon={AiOutlineIdcard}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <TextInput
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              icon={AiOutlinePhone}
            />
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Date of Birth
            </label>
            <TextInput
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              icon={AiOutlineCalendar}
            />
          </div>
          <div>
            <label
              htmlFor="county"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              County
            </label>
            <Select
              id="county"
              name="county"
              value={formData.county}
              onChange={handleCountyChange}
              className="w-full"
            >
              <option value="" disabled>
                Select County
              </option>
              {counties.map((county) => (
                <option key={county.id} value={county.id}>
                  {county.label}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              City
            </label>
            <TextInput
              id="city"
              name="city"
              value={formData.city}
              onChange={handleCityChange}
              placeholder="City"
              icon={FaCity}
            />
          </div>
        </div>
      </Card>
      <div className="hidden h-full max-w-[35%] lg:block">
        <img
          src={image}
          alt="Your Photo"
          className="max h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Step1;
