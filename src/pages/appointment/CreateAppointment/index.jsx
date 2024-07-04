import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Card } from "flowbite-react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Button } from "@windmill/react-ui";

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

const steps = ["Step 1", "Step 2", "Step 3"];

const AppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    reason: "",
    departmentId: "",
    serviceId: "",
    countyId: "",
    cityId: "",
    medicId: "",
  });

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData} />;
      default:
        return <Step1 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-10">
      <Card className="p-4 shadow-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Request an Appointment
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
        <div className="mt-6">
          {renderStep()}
          <div className="mt-4 flex justify-between">
            <Button
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AppointmentForm;
