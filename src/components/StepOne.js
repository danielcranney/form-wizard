import React, { useContext } from "react";

import { CountContext } from "./Form";

const StepOne = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <h2 className="text-2xl font-bold my-4">This is Step One</h2>
      <p className="my-4">
        Here you can add input fields, or whatever else you would like the user
        to do at this stage of the form.
      </p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn-primary btn-lg"
      >
        Next Step
      </button>
    </>
  );
};

export default StepOne;
