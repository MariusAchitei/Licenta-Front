import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Label, Input, Button } from "@windmill/react-ui";
import Logo from "components/Logo";
import { UserContext } from "contexts/UserContext";

import ImageLight from "../assets/img/login.jpg";
import ImageDark from "../assets/img/login.jpg";

function Login() {
  const { login } = useContext(UserContext); // Get the login function from UserContext
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const isAuthenticated = login(email, password);
    if (isAuthenticated) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

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
                Login
              </h1>
              {error && <p className="mb-4 text-red-600">{error}</p>}
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>

              <Button className="mt-4" block onClick={handleLogin}>
                Log in
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <FaFacebook className="mr-2 h-4 w-4" aria-hidden="true" />
                Facebook
              </Button>
              <Button className="mt-4" block layout="outline">
                <FaGoogle className="mr-2 h-4 w-4" aria-hidden="true" />
                Google
              </Button>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
                  to="/create-account"
                >
                  Create account
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
