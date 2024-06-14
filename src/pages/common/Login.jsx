import { useState, useContext } from "react";
import { PinModal } from "../../components/common/PinModal";
import axiosInstance from "../../utils/axiosInstance";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import { Spinner } from "flowbite-react";

export function Login() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState([]);
  const { user, updateUser } = useContext(UserContext);
  const [enableSpinner, setEnableSpinner] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEnableSpinner(true);
    axiosInstance
      .post(`/v51/sessions`, {
        email: email,
      })
      .then((res) => {
        setEnableSpinner(false);
        console.log(res);
        if (res.status === 201) {
          setOpenModal(true);
        }
      })
      .catch((e) => {
        setEnableSpinner(false);
        console.log(e);
        setErrors([e.response.data.message]);
      });
  };

  const handlePinSubmit = (values, setError) => {
    if (values.filter((element) => !element).length > 0) {
      return "Please fill in all the fields";
    }
    axiosInstance
      .post(`/v51/sessions`, {
        email: email,
        pin: values.join(""),
      })
      .then((res) => {
        if (res.status === 201) {
          setOpenModal(false);
          sessionStorage.setItem("token", res.headers["location"]);
          updateUser({ email: email, role: res.data.role });
          navigate("/environment");
        }
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      });
  };

  return (
    <>
      <div className="sticky top-4 z-50  p-0">
        {errors.map((error, index) => (
          <Alert
            className="mx-4 mb-4"
            color="warning"
            icon={HiInformationCircle}
            onDismiss={() => setErrors(errors.filter((e) => e !== error))}
          >
            <span className="font-medium">Info alert!</span> {error}
          </Alert>
        ))}
      </div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a
            href="#"
            className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="mr-2 h-36" src="../truid-logo.jpg" alt="logo" />
          </a>
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <button
                  class="mb-2 me-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900
                 focus:outline-none focus:ring-4 focus:ring-gray-300
                 dark:border-gray-700
                 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  {enableSpinner ? (
                    <Spinner aria-label="Default status example" />
                  ) : (
                    "Sign in"
                  )}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <PinModal
        email={email}
        show={openModal}
        onClose={() => setOpenModal(false)}
        handleSubmit={handlePinSubmit}
      />
    </>
  );
}
