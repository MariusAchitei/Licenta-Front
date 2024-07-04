import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const addError = (message, type = "error") => {
    const id = new Date().getTime();
    setErrors([...errors, { id, message, type }]);
  };

  const removeError = (id) => {
    setErrors(errors.filter((error) => error.id !== id));
  };

  return (
    <ErrorContext.Provider value={{ addError, removeError }}>
      {children}
      <div className="fixed right-4 top-4 z-50 space-y-4">
        {errors.map((error) => (
          <div
            key={error.id}
            className={`flex items-center justify-between rounded ${error.type == "error" ? "bg-red-500" : "bg-purple-600"} p-4 text-white shadow-lg`}
          >
            <span>{error.message}</span>
            <button onClick={() => removeError(error.id)} className="ml-4">
              &times;
            </button>
          </div>
        ))}
      </div>
    </ErrorContext.Provider>
  );
};
