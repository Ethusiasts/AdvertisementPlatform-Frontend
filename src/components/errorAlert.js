import React from "react";

const ErrorAlert = ({ message }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-5 rounded relative"
      role="alert"
    >
      <span className="block sm:inline font-bold">{message}</span>
    </div>
  );
};

export default ErrorAlert;
