import React from "react";
import { useNavigate } from "react-router-dom";
import { ForbiddenIcon } from "icons";
import { Button } from "@windmill/react-ui";

function PageUnauthorized() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/app/home");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ForbiddenIcon
        className="mt-8 h-12 w-12 text-purple-200"
        aria-hidden="true"
      />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        Unauthorized
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        You do not have permission to access this page.
      </p>
      <Button className="mt-6" onClick={handleNavigateHome}>
        Go to Home
      </Button>
    </div>
  );
}

export default PageUnauthorized;
