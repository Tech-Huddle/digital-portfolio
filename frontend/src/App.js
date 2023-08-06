import React, { useState } from "react";
import BasicDetails from "./components/UserForm/BasicDetails";
// import EducationDetails from "./components/UserForm/EducationDetails";
import OtherDetails from "./components/UserForm/OtherDetails";
import { MultistepForm } from "./components/MultistepForm";
// import ExperienceDetails from "./components/UserForm/ExperienceDetails";

const initialData = {
}
const App = () => {
  const [data, setData] = useState(initialData);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    MultistepForm([
      <BasicDetails {...data} updateFields={updateFields} />,
      // <ExperienceDetails {...data} updateFields={updateFields}/> ,
      // <EducationDetails {...data} updateFields={updateFields}/> ,
      <OtherDetails {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data)
    alert("Congrats!!! Your details has been recorded!");
  }

  return (
    <div>
      <form action="" className="" onSubmit={onSubmit}>
        <div>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {/* ------------------ form ---------------------  */}
        <div>{step}</div>
        {/* _______________________ buttons _____________  */}
        <div>
          {!isFirstStep && (
            <button
              onClick={back}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              type="button"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Back
              </span>
            </button>
          )}

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-black focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
