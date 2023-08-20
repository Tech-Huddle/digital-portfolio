import React, { useState } from "react";

const Form = () => {
  const [page, setPage] = useState(0);
  const formtitles = [
    "Basic Details",
    "Educational Details",
    "Experience Details",
    "Other Details",
  ];
  // these are the titles or header of the respective step form
  return (
    <div className="text-white">
      <div className="pregressbar"></div>
      <div className="form-container">
        <div className="header text-3xl">{formtitles[page]}</div>
        <div className="body"></div>
         {
          
            page!==0 &&(<button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1)
            }}
          >
          Prev
        </button>
          )
        } 
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
          {page === formtitles.length-1? 'Submit':'Next'}
        </button>
      </div>
    </div>
  );
};

export default Form;
