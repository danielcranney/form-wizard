import React, { useContext } from "react";

import { CountContext } from "../App";

const StepThree = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">This is Step Three</h2>
      <p className="my-4">
        Don't forget to add more elements here, your users are nearly at the
        end!
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

export default StepThree;
