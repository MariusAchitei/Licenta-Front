"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { PinInput } from "./PinInput";
import axiosInstance from "../../utils/axiosInstance";

export function PinModal({ show, onClose, handleSubmit }) {
  const length = 4;

  const [values, setValues] = useState(Array(length).fill(""));
  const [error, setError] = useState("");
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      // Only allow numeric input
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (value && index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (/^\d*$/.test(paste)) {
      // Only allow numeric input
      const pasteValues = paste.split("").slice(0, length);
      const newValues = [...values];
      pasteValues.forEach((value, i) => {
        newValues[i] = value;
      });
      setValues(newValues);

      // Focus the appropriate input
      const nextIndex =
        pasteValues.length < length ? pasteValues.length : length - 1;
      inputs.current[nextIndex].focus();
    }
    e.preventDefault(); // Prevent default paste behavior
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     inputs.current[0].focus();
  //   }
  // }, [error]);

  return (
    <div className="container z-20">
      <Modal show={show} onClose={() => onClose()}>
        <Modal.Header>Pin modal</Modal.Header>
        <Modal.Body className="items-center justify-center">
          <form className="mx-auto max-w-sm items-center justify-center">
            <div className="mb-2 flex items-center justify-center space-x-2 rtl:space-x-reverse">
              {values.map((value, index) => (
                <div>
                  <label for={"code-" + index} className="sr-only">
                    First code
                  </label>
                  <TextInput
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onPaste={index === 0 ? handlePaste : null}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    autoFocus={index === 0}
                    maxlength="1"
                    data-focus-input-init
                    data-focus-input-next={"code-" + index + 1}
                    id="code-1"
                    color="failure"
                    class={`${
                      error
                        ? "border-red-500 dark:border-red-500"
                        : "focus:border-primary-500"
                    } focus:ring-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block h-9 w-9 rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400`}
                    required
                  />
                </div>
              ))}
            </div>
            <p
              id="helper-text-explanation"
              class="mt-2	 text-center text-sm text-red-500"
            >
              {error}
            </p>
            <p
              id="helper-text-explanation"
              class="mt-2	 text-center text-sm text-gray-500 dark:text-gray-400"
            >
              Please introduce the 4 digit code we sent via email.
            </p>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setError(handleSubmit(values, setError));
              console.log("uite ce erroare am");
              console.log(error);
              if (!error) {
                onClose();
              }
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
