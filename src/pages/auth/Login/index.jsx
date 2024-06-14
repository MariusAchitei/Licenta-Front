import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Layout from "../Layout";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerAvatar, setRegisterAvatar] = useState("");

  return (
    <Layout>
      <h3 className="mb-3 text-xl font-semibold text-blue-400 pt-2">
            Sign In!
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
          {/* Inputs */}
          <div className="mb-3 flex flex-col items-center justify-center w-9/12 ">
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
                // value={email}
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="my-3 w-full">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                // value={email}
                // onChange={(event) => {
                //   setEmail(event.target.value);
                // }}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                placeholder="*****"
                required
              />
            </div>
            <button className="mb-3 rounded-2xl m-2 text-white bg-blue-400 w-3/4 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
              Sign In
            </button>
          </div>
          <div className="mb-3 inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className="mb-3 text-blue-400 mt-4 text-sm">
            Don't have an account?
          </p>
          <p
            className=" text-blue-400 mb-4 text-sm font-medium cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            Create a New Account?
          </p>
    </Layout>
  )
  
};

export default Login;
