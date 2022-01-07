import React, { useState, createContext } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

export const CountContext = createContext({ count: 1, setCount: () => {} });

const Form = () => {
  const [count, setCount] = useState(1);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <div className="container px-4 py-12 mx-auto text-center bg-gray-100n">
        <h1 className="text-3xl font-bold">Multi-Step Form with Wizard</h1>

        <div className="w-full h-32 transition-all duration-150">
          <div className="container flex items-center h-full mx-auto">
            <div className="flex w-full">
              <div className="w-1/4">
                <div className="relative w-10 h-10 mx-auto mt-2 mb-2">
                  {/* Current Step Icon */}
                  <div
                    className={`current-step ${
                      count === 1 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count === 1 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        height={20}
                        width={20}
                        className="m-auto text-primary-main"
                      >
                        <circle
                          cx={10}
                          cy={10}
                          r={10}
                          strokeWidth={0}
                          className="fill-current"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Completed Step Icon */}
                  <div
                    className={`completed-step ${
                      count !== 1
                        ? "bg-gradient-to-br from-primary-alt to-primary-main "
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count !== 1 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        className="w-full"
                        fill="transparent"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="block text-center">
                  <button
                    className={`px-2 py-1 text-xs md:text-sm transition-all duration-150 text-gray-800 focus:outline-none ${
                      count === 1 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => setCount(1)}
                  >
                    <span className="block font-semibold tracking-wide uppercase step-span">
                      Step 1
                    </span>
                    <span className="mb-0 text-xs opacity-75 step-span">
                      Step One
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-1/4">
                <div className="absolute w-1/6 h-10">
                  {/* Horizontal Line Container */}
                  <div
                    className="line-container"
                    style={{
                      width: "calc(100% - 2.5rem - 1rem)",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Base Layer */}
                    <div className="line-base">
                      {/* Filled Line Layer */}
                      <div
                        className={`line-filled ${
                          count < 2
                            ? "w-0 opacity-50"
                            : "bg-primary-main w-full opacity-100"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="relative w-10 h-10 mx-auto mt-2 mb-2">
                  {/* Incomplete Step Icon */}
                  <div
                    className={`incomplete-step ${
                      count < 2 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count < 2 ? "block" : "hidden"
                      }`}
                    ></span>
                  </div>

                  {/* Current Step Icon */}
                  <div
                    className={`current-step ${
                      count === 2 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count === 2 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        height={20}
                        width={20}
                        className="m-auto text-primary-main"
                      >
                        <circle
                          cx={10}
                          cy={10}
                          r={10}
                          strokeWidth={0}
                          className="fill-current"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Completed Step Icon */}
                  <div
                    className={`completed-step ${
                      count > 2
                        ? "bg-gradient-to-br from-primary-alt to-primary-main "
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count > 2 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        className="w-full"
                        fill="transparent"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="block text-center">
                  <button
                    className={`px-2 py-1 text-xs md:text-sm transition-all duration-150 text-gray-800 focus:outline-none ${
                      count === 2 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => setCount(2)}
                  >
                    <span className="block font-semibold tracking-wide uppercase step-span">
                      Step 2
                    </span>
                    <span className="mb-0 text-xs opacity-75 step-span">
                      Step Two
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-1/4">
                <div className="absolute w-1/6 h-10">
                  {/* Horizontal Line Container */}
                  <div
                    className="line-container"
                    style={{
                      width: "calc(100% - 2.5rem - 1rem)",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Base Layer */}
                    <div className="line-base">
                      {/* Filled Line Layer */}
                      <div
                        className={`line-filled ${
                          count < 3
                            ? "w-0 opacity-50"
                            : "bg-primary-main w-full opacity-100"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="relative w-10 h-10 mx-auto mt-2 mb-2">
                  {/* Incomplete Step Icon */}
                  <div
                    className={`incomplete-step ${
                      count < 3 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count < 3 ? "block" : "hidden"
                      }`}
                    ></span>
                  </div>

                  {/* Current Step Icon */}
                  <div
                    className={`current-step ${
                      count === 3 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count === 3 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        height={20}
                        width={20}
                        className="m-auto text-primary-main"
                      >
                        <circle
                          cx={10}
                          cy={10}
                          r={10}
                          strokeWidth={0}
                          className="fill-current"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Completed Step Icon */}
                  <div
                    className={`completed-step ${
                      count > 3
                        ? "bg-gradient-to-br from-primary-alt to-primary-main "
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count > 3 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        className="w-full"
                        fill="transparent"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="block text-center">
                  <button
                    className={`px-2 py-1 text-xs md:text-sm transition-all duration-150 text-gray-800 focus:outline-none ${
                      count === 3 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => setCount(3)}
                  >
                    <span className="block font-semibold tracking-wide uppercase step-span">
                      Step 3
                    </span>
                    <span className="mb-0 text-xs opacity-75 step-span">
                      Step Three
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-1/4">
                <div className="absolute w-1/6 h-10">
                  {/* Horizontal Line Container */}
                  <div
                    className="line-container"
                    style={{
                      width: "calc(100% - 2.5rem - 1rem)",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Base Layer */}
                    <div className="line-base">
                      {/* Filled Line Layer */}
                      <div
                        className={`line-filled ${
                          count < 4
                            ? "w-0 opacity-50"
                            : "bg-primary-main w-full opacity-100"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="relative w-10 h-10 mx-auto mt-2 mb-2">
                  {/* Incomplete Step Icon */}
                  <div
                    className={`incomplete-step ${
                      count < 4 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count < 4 ? "block" : "hidden"
                      }`}
                    ></span>
                  </div>

                  {/* Current Step Icon */}
                  <div
                    className={`current-step ${
                      count === 4 ? "scale-100" : "scale-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count === 4 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        height={20}
                        width={20}
                        className="m-auto text-primary-main"
                      >
                        <circle
                          cx={10}
                          cy={10}
                          r={10}
                          strokeWidth={0}
                          className="fill-current"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Completed Step Icon */}
                  <div
                    className={`absolute w-10 h-10 rounded-full text-lg text-white flex items-center transition-all transform duration-150 ease-out opacity-100 ${
                      count > 4
                        ? "bg-gradient-to-br from-primary-alt to-primary-main "
                        : "scale-0 opacity-0"
                    }`}
                  >
                    <span
                      className={`text-center w-full ${
                        count > 4 ? "block" : "hidden"
                      }`}
                    >
                      <svg
                        className="w-full"
                        fill="transparent"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="block text-center">
                  <button
                    className={`px-2 py-1 text-xs md:text-sm transition-all duration-150 text-gray-800 focus:outline-none ${
                      count === 4 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => setCount(4)}
                  >
                    <span className="block font-semibold tracking-wide uppercase step-span">
                      Step 4
                    </span>
                    <span className="mb-0 text-xs opacity-75 step-span">
                      Step Four
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          {count === 1 ? (
            <StepOne />
          ) : count === 2 ? (
            <StepTwo />
          ) : count === 3 ? (
            <StepThree />
          ) : count === 4 ? (
            <StepFour />
          ) : (
            <div className="px-4 py-6 text-left">
              <h2 className="font-bold">The form is now complete</h2>

              <button
                onClick={() => {
                  setCount(1);
                }}
                className="px-4 py-2 bg-gray-400 rounded-lg"
              >
                Start Again
              </button>
            </div>
          )}
        </div>
      </div>
    </CountContext.Provider>
  );
};

export default Form;
