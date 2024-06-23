import React from "react";
import { Link } from "react-router-dom";

import ImageLight from "../assets/img/create-account-office.jpg";
import ImageDark from "../assets/img/create-account-office.jpg";
import { GithubIcon, TwitterIcon } from "../icons";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Input, Label, Button } from "@windmill/react-ui";
import Logo from "components/Logo";

function Login() {
  return (
    <div className="flex min-h-screen items-center bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="h-full w-full object-contain dark:hidden"
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
                Create account
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  type="password"
                />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  type="password"
                />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button tag={Link} to="/login" block className="mt-4">
                Create account
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <FaFacebook className="mr-2 h-4 w-4" aria-hidden="true" />
                Fcebook
              </Button>
              <Button className="mt-4" block layout="outline">
                <FaGoogle className="mr-2 h-4 w-4" aria-hidden="true" />
                Google
              </Button>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
