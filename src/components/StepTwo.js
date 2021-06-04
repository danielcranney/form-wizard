import React, { useContext } from "react";

import { CountContext } from "./Form";

const StepTwo = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">This is Step Two</h2>
      <p className="my-4">
        Your user is now on the second step of the form. You can add more
        elements here.
      </p>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn-primary-outline btn-lg mr-1"
      >
        Previous Step
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn-primary btn-lg ml-1"
      >
        Next Step
      </button>
    </>
  );
};

export default StepTwo;
