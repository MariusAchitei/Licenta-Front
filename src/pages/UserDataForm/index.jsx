import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { Card } from "flowbite-react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Button } from "@windmill/react-ui";
import image from "assets/images/user-data-step-2.jpg";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, #ff6a00 0%, #ee0979 50%, #ff6a00 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, #ff6a00 0%, #ee0979 50%, #ff6a00 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const steps = ["Personal Information", "Additional Information"];

const UserForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalId: "",
    firstName: "",
    lastName: "",
    county: "",
    city: "",
    phoneNumber: "",
    dateOfBirth: "",
    bloodType: "",
    profession: "",
    healthProblems: [],
    sportFrequency: "",
    familyStatus: "",
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const submitForm = () => {
    // Submit form logic here
    console.log("Form submitted", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      default:
        return <Step1 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-10">
      <Card className="p-4 shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Complete Your Profile
          </h1>
        </div>
        <Stepper
          activeStep={currentStep}
          connector={<ColorlibConnector />}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="mt-6">{renderStep()}</div>
        <div className="mt-4 flex justify-between">
          <Button onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button
            onClick={currentStep === steps.length - 1 ? submitForm : nextStep}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserForm;
