import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import UserPool from "utils/UserPool";

import Layout from "../Layout";

const Register = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <Layout>
      <h3 className="mb-3 p-3 text-3xl font-bold text-pink-400">Register</h3>
      <div className="mb-3 inline-block w-20 justify-center border-[1px] border-solid border-blue-400"></div>
      <h3 className="mb-3 pt-2 text-xl font-semibold text-blue-400">
        Create a New Account!
      </h3>
      <div className="m-4 mb-3 flex items-center justify-center space-x-2">
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
      <div className="mb-3 flex w-9/12 flex-col items-center justify-center">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="relative my-3 w-full">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
            placeholder="*****"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-1 right-0 top-6 my-auto flex items-center pr-3 text-sm leading-5"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="relative my-3 w-full">
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
        <button
          onClick={handleSubmit}
          className="m-2 mb-3 w-3/4 rounded-2xl bg-blue-400 px-4 py-2 text-white shadow-md transition duration-200 ease-in hover:bg-white hover:text-blue-400"
        >
          Register
        </button>
      </div>
      <div className="mb-3 inline-block w-20 justify-center border-[1px] border-solid border-blue-400"></div>
      <p className="mb-3 mt-4 text-sm text-blue-400">
        Already have an account?
      </p>
      <p
        className=" mb-4 cursor-pointer text-sm font-medium text-blue-400"
        // onClick={() => setIsLogin(true)}
      >
        Sign In
      </p>
    </Layout>
  );
};

export default Register;
