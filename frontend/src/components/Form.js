import React, { useState } from "react";
import BasicDetails from "./UserForm/BasicDetails";
import EducationalDetails from "./UserForm/EducationalDetails";
import ExperienceDetails from "./UserForm/ExperienceDetails";
import OtherDetails from "./UserForm/OtherDetails";

const Form = () => {
  const [page, setPage] = useState(0);
  const formtitles = [
              //navigates to page: Basic Details------------------------------
              <div className="text-center mb-16 my-10">
                <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white-900">
                  Basic <span className="text-indigo-600">Details</span>
                </h3>
              </div>,

              //navigates to page: Educational Details------------------------
              <div className="text-center mb-16 my-10">
              <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white-900">
                Education <span className="text-indigo-600">Details</span>
              </h3>
              </div>,

              //navigates to page: Experience Details-------------------------
              <div className="text-center mb-16 my-10">
              <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white-900">
                Experience <span className="text-indigo-600">Details</span>
              </h3>
              </div>,

              //navigates to page: Other Details---------------------------------
              <div className="text-center mb-16 my-10">
              <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white-900">
                Other <span className="text-indigo-600">Details</span>
              </h3>
              </div>
  ];
  // these are the titles or header of the respective step form

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicDetails />;
    } else if (page === 1) {
      return <EducationalDetails />;
    } else if (page === 2) {
      return <ExperienceDetails />;
    } else {
      return <OtherDetails />;
    }
  };

  const steps = [<BasicDetails />];
  return (
    <div className="text-white">
      <div className="pregressbar"></div>
      <div className="form-container">
        <div className="header text-3xl">{formtitles[page]}</div>
        <div className="body">{PageDisplay()}</div>
        {page !== 0 && (
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
        )}
        <button
          disabled={page === formtitles.length - 1}
          // this attribute will ensure that if the index exceeds the formtitles
          // then it will disable the button
          onClick={() => {
            // on clicking this button the function will be triggered which will
            // then increment the currentp page index by 1
            setPage((currentPage) => currentPage + 1);
          }}
        >
          {page === formtitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Form;
