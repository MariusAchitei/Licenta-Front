import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Widget from "components/custom/Widget";
import WidgetBody from "components/custom/Widget/WidgetBody";
import WidgetHeader from "components/custom/Widget/WidgetHeader";

const AppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-10">
      <Widget shadow={true}>
        <div className="mt-5 flex justify-between px-10">
          <div className="mb-4 text-left">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Request an Appointment
            </h1>
          </div>
          <div className="mb-4 flex justify-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } mx-2`}
            >
              1
            </div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } mx-2`}
            >
              2
            </div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep === 3
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } mx-2`}
            >
              3
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <WidgetBody>
          {renderStep()}
          <div className="mt-4 flex justify-between">
            <div>
              {currentStep !== 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  disabled={currentStep === 1}
                  className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  Previous
                </button>
              )}
            </div>
            <div>
              {currentStep !== 3 && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={currentStep === 3}
                  className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </WidgetBody>
      </Widget>
    </div>
  );
};

export default AppointmentForm;
