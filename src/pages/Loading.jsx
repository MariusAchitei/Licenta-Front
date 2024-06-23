import React from "react";
import { Spinner } from "@windmill/react-ui";
import Logo from "components/Logo";

function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Logo className="mb-8 h-24 w-24" />
      <Spinner size="xl" className="text-purple-600" />
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Loading, please wait...
      </p>
    </div>
  );
}

export default LoadingScreen;
