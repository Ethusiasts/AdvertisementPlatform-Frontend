import React from "react";

const AlertService = ({ message, type }) => {
  return (
    <div>
      {type === "error" ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline font-bold">{message}</span>
        </div>
      ) : (
        <div
          className="bg-red-100 border border-green-600 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline font-bold">{message}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorAlert;
