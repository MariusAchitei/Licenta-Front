import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@windmill/react-ui";

const PostRegister = ({ handleClick }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <FaCheckCircle className="text-6xl text-green-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            Email Verification Successful
          </h1>
          <p className="text-center text-gray-600">
            Thank you for registering. Your account has been successfully
            created.
          </p>
          <p className="text-center text-gray-600">
            To complete the registration process, please click the button below.
            And fill in your profile details.
          </p>
          <ul className="mt-4 space-y-2 text-left text-gray-600">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" />
              Your profile has been set up.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" />
              Your email has been verified.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" />
              You can now access all features.
            </li>
          </ul>
          <Button className="mt-6 w-full" onClick={handleClick}>
            Complete the registration process
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostRegister;
