import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { Card } from "flowbite-react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Button } from "@windmill/react-ui";
import image from "assets/images/user-data-step-2.jpg";
import axios from "axios";
import LoadingScreen from "pages/Loading";
import { useError } from "contexts/ErrorConntext";
import PostRegister from "components/PostRegister";
import { useLocation, useNavigate } from "react-router-dom";

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

const UserForm = ({}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email || "";
  const { addError } = useError();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalId: "",
    firstName: "",
    lastName: "",
    county: "",
    city: "",
    phone: "",
    birthDate: "",
    bloodType: "",
    profession: "",
    healthProblems: [],
    sportFrequency: "",
    familyStatus: "",
    email,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [pageIsLoading, setPageIsLoading] = useState(true);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const submitForm = () => {
    setIsLoading(true);
    console.log("Submitting form", formData);
    axios
      .post("http://localhost:8080/api/public/patients", formData)
      .then((res) => {
        setIsLoading(false);
        console.log("Form submitted successfully", res.data);
        setPageIsLoading(true);
        //after 2 seconds, navigate to login page
        setTimeout(() => navigate("/login"), 2000);
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        addError("Error submitting form");
        console.error("Error submitting form: ", error);
        setPageIsLoading(true);
        //after 2 seconds, navigate to login page
        setTimeout(() => navigate("/login"), 2000);
        navigate("/login");
      });
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

  const handlePostRegisterClick = () => {
    setPageIsLoading(false);
  };

  if (pageIsLoading) {
    return <PostRegister handleClick={handlePostRegisterClick} />;
  }

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
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="mt-6">{renderStep()}</div>
            <div className="mt-4 flex justify-between">
              <Button onClick={prevStep} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button
                onClick={
                  currentStep === steps.length - 1 ? submitForm : nextStep
                }
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default UserForm;
