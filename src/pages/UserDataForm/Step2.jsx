import React, { useState } from "react";
import { TextInput, Card } from "flowbite-react";
import { Select, Button } from "@windmill/react-ui";
import { AiOutlineMedicineBox, AiOutlineProfile } from "react-icons/ai";
import { FaHeartbeat, FaRunning, FaUserFriends } from "react-icons/fa";
import image from "assets/images/user-data-step-2.jpg";

const healthProblemsList = [
  "Diabetes",
  "Hypertension",
  "Heart Disease",
  "Asthma",
  "Allergies",
  "Back Pain",
];

const professionsList = [
  "Doctor",
  "Engineer",
  "Teacher",
  "Nurse",
  "Police Officer",
  "Software Developer",
  "Accountant",
  "Construction Worker",
  "Salesperson",
  "Manager",
  "Other",
];

const sportFrequencyOptions = ["Daily", "Weekly", "Monthly", "Rarely", "Never"];

const familyStatusOptions = ["Single", "Married", "Divorced", "Widowed"];

const Step2 = ({ formData, setFormData }) => {
  const [selectedHealthProblem, setSelectedHealthProblem] = useState("");
  const [healthProblems, setHealthProblems] = useState(formData.healthProblems);
  const [customProfession, setCustomProfession] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHealthProblemChange = (e) => {
    setSelectedHealthProblem(e.target.value);
  };

  const handleProfessionChange = (e) => {
    const selectedProfession = e.target.value;
    setFormData({ ...formData, profession: selectedProfession });
    if (selectedProfession === "Other") {
      setCustomProfession("");
    }
  };

  const handleCustomProfessionChange = (e) => {
    setCustomProfession(e.target.value);
    setFormData({ ...formData, customProfession: e.target.value });
  };

  const addHealthProblem = () => {
    if (
      selectedHealthProblem &&
      !healthProblems.includes(selectedHealthProblem)
    ) {
      const updatedHealthProblems = [...healthProblems, selectedHealthProblem];
      setHealthProblems(updatedHealthProblems);
      setFormData({ ...formData, healthProblems: updatedHealthProblems });
      setSelectedHealthProblem("");
    }
  };

  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <Card className="flex-1 p-4 shadow-lg">
        <div className="mb-4">
          <p className="mb-4 text-sm text-gray-500">
            Disclaimer: The following information is optional.
          </p>
          <div className="mb-4">
            <label
              htmlFor="bloodType"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Blood Type
            </label>
            <Select
              id="bloodType"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full"
            >
              <option value="" disabled>
                Select Blood Type
              </option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ),
              )}
            </Select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="profession"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Profession
            </label>
            <Select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleProfessionChange}
              className="w-full"
            >
              <option value="" disabled>
                Select Profession
              </option>
              {professionsList.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
                </option>
              ))}
            </Select>
            {formData.profession === "Other" && (
              <TextInput
                id="customProfession"
                name="customProfession"
                value={customProfession}
                onChange={handleCustomProfessionChange}
                placeholder="Enter your profession"
                icon={AiOutlineProfile}
                className="mt-2"
              />
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="healthProblems"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Current Health Problems
            </label>
            <div className="flex space-x-2">
              <Select
                id="healthProblems"
                value={selectedHealthProblem}
                onChange={handleHealthProblemChange}
                className="w-full"
              >
                <option value="" disabled>
                  Select Health Problem
                </option>
                {healthProblemsList.map((problem, index) => (
                  <option key={index} value={problem}>
                    {problem}
                  </option>
                ))}
              </Select>
              <Button onClick={addHealthProblem}>Add</Button>
            </div>
            <div className="mt-2">
              {healthProblems.length > 0 && (
                <ul className="list-inside list-disc">
                  {healthProblems.map((problem, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {problem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="sportFrequency"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              How often do you make sport?
            </label>
            <Select
              id="sportFrequency"
              name="sportFrequency"
              value={formData.sportFrequency}
              onChange={handleChange}
              className="w-full"
            >
              <option value="" disabled>
                Select Frequency
              </option>
              {sportFrequencyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="familyStatus"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Family Status
            </label>
            <Select
              id="familyStatus"
              name="familyStatus"
              value={formData.familyStatus}
              onChange={handleChange}
              className="w-full"
            >
              <option value="" disabled>
                Select Family Status
              </option>
              {familyStatusOptions.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </Card>
      <div className="hidden max-w-[35%] flex-1 lg:block">
        <img src={image} alt="Your Photo" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Step2;
