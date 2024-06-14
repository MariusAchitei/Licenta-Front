import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Layout from "../Layout";

const Register = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
    <h3 className="mb-3 p-3 text-3xl font-bold text-pink-400">
            Register
          </h3>
          <div className="mb-3 inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <h3 className="mb-3 text-xl font-semibold text-blue-400 pt-2">
            Create a New Account!
          </h3>
          <div className="mb-3 flex space-x-2 m-4 items-center justify-center">
            <div className="socialIcon">
              <FaFacebook />
            </div>
            <div className="socialIcon">
              <FaGithub />
            </div>
            <div className="socialIcon">
              <FcGoogle />
            </div>
          </div>
          {/* Register Inputs */}
          <div className="mb-3 flex flex-col items-center justify-center w-9/12">
            <div className="my-3 w-full">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="my-3 w-full">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={registerPhone}
                onChange={(e) => setRegisterPhone(e.target.value)}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="my-3 w-full relative">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="*****"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="my-auto absolute top-6 inset-y-1 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="my-3 w-full relative">
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="*****"
                required
              />
            </div>
            <button className="mb-3 rounded-2xl m-2 text-white bg-blue-400 w-3/4 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
              Register
            </button>
          </div>
          <div className="mb-3 inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className="mb-3 text-blue-400 mt-4 text-sm">
            Already have an account?
          </p>
          <p
            className=" text-blue-400 mb-4 text-sm font-medium cursor-pointer"
            // onClick={() => setIsLogin(true)}
          >
            Sign In
          </p>
          </Layout>

  );
};

export default Register;
