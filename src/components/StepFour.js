import React, { useContext } from "react";

import { CountContext } from "./Form";

const StepFour = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">This is Step Four</h2>
      <p className="my-4">
        Why not try adding a 'step five' component as the 'form complete' page?
      </p>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn-primary-outline btn-lg mr-1"
      >
        Previous Step
      </button>
    </>
  );
};

export default StepFour;
