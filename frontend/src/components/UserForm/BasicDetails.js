import React, { useState } from "react";

export default function BasicDetails() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container-fluid mx-10">
      <div className="max-w-screen-md mx-auto p-5">
        <form className="Content w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            {/**
             * ------------------First Name Input field-------------------------------------------------------
             */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="Input block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>

              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  inputValue === ""
                    ? "border-red-500 border-2"
                    : "border-gray-200"
                }`}
                id="grid-first-name"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />

              {inputValue === "" && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            {/**
             * -----------------Last Name Input field---------------------------------------------------------
             */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
              />
            </div>

            {/**
             * ----------------Email address------------------------------------------------------
             */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="Input block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Email Address
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="*******@domain.name"
              />
            </div>

            {/**
             * --------------Contact Number-------------------------------------------------------
             */}
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Contact Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
              />
            </div>
            {/**
             * -------------Head Line ---------------------------------------------------------
             */}
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Head Line
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
                <textarea
                  rows={2}
                  className="pl-10 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={"\n"}
                />
              </div>
            </div>
            {/**
             * ------------Objective ---------------------------------------------------------
             */}
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Role Objective
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
                <textarea
                  rows={2}
                  className="pl-10 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultValue={"\n"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
