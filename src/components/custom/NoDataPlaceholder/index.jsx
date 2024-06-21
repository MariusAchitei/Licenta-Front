import React from "react";
import { Card } from "flowbite-react";
import Lottie from "react-lottie";
import * as animationData from "./no-data-animation.json"; // Replace with your own animation file

const NoDataPlaceholder = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="flex flex-col items-center p-10">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h2 className="mt-4 text-2xl font-bold text-gray-700">
          No Data Available
        </h2>
        <p className="mt-2 text-gray-500">
          It looks like there's no data to display here.
        </p>
      </Card>
    </div>
  );
};

export default NoDataPlaceholder;
