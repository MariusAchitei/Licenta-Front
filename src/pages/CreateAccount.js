import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageLight from "../assets/img/create-account-office.jpg";
import ImageDark from "../assets/img/create-account-office.jpg";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Input, Label, Button } from "@windmill/react-ui";
import Logo from "components/Logo";
import UserPool from "utils/UserPool";
import Modal from "react-modal";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useError } from "contexts/ErrorConntext";

Modal.setAppElement("#root");

const passwordChecks = {
  length: "Minimum 10 characters",
  uppercase: "At least one uppercase letter",
  lowercase: "At least one lowercase letter",
  digit: "At least one digit",
};

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
  });
  const { addError } = useError();

  const handleRegister = () => {
    setIsSubmitting(true);
    if (Object.values(passwordValidations).some((v) => !v)) {
      addError("Password does not meet the requirements");
      setIsSubmitting(false);
      return;
    }
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        addError(err.message || JSON.stringify(err));
        setIsSubmitting(false);
        return;
      }
      setModalIsOpen(true);
      setIsSubmitting(false);
    });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValidations({
      length: value.length >= 10,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      digit: /\d/.test(value),
    });
  };

  const handleConfirmationSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const userData = {
      Username: email,
      Pool: UserPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        addError(err.message || JSON.stringify(err));
        setIsSubmitting(false);
        return;
      }
      console.log("call result: " + result);
      setIsSubmitting(false);
      setModalIsOpen(false);
    });
  };

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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  type="password"
                  onChange={handlePasswordChange}
                  value={password}
                />
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {Object.entries(passwordChecks).map(([key, text]) => (
                    <li
                      key={key}
                      className={
                        passwordValidations[key]
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {text}
                    </li>
                  ))}
                </ul>
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

              <Button
                onClick={handleRegister}
                block
                className="mt-4"
                disabled={isSubmitting}
              >
                Create account
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
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirmation Code Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl">Enter Confirmation Code</h2>
          <form onSubmit={handleConfirmationSubmit}>
            <Label>
              <span>Confirmation Code</span>
              <Input
                className="mt-1"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                placeholder="Confirmation Code"
              />
            </Label>
            <Button
              type="submit"
              block
              className="mt-4"
              disabled={isSubmitting}
            >
              Confirm
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
