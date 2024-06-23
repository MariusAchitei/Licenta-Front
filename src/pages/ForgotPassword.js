import React from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/forgot-password-office.jpg";
import ImageDark from "../assets/img/forgot-password-office.jpg";
import { Label, Input, Button } from "@windmill/react-ui";
import Logo from "components/Logo";

function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="h-full w-full object-cover dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden h-full w-full object-cover dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex h-14 w-full justify-center align-middle">
                <Logo />
              </div>
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input className="mt-1" placeholder="Jane Doe" />
              </Label>

              <Button tag={Link} to="/login" block className="mt-4">
                Recover password
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
