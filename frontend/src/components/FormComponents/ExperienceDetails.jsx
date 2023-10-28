import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./styles.css";
import IndexedInput from "./Inputs/IndexedInput";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ExperienceDetails() {
  const navigate = useNavigate();

  const initialFormData = {

    user_id: uuidv4(),
    organisation_Name: "",
    location: "",
    responsibility: "",
    description: "",
    start_date: "",
    end_date: "",
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [formDataArr, setFormDataArr] = useState([initialFormData]);
  const [repeatCount, setRepeatCount] = useState(1);

  const handleRepeatClick = () => {
    setRepeatCount(repeatCount + 1);
    setFormDataArr([...formDataArr, initialFormData]); 
  };
  
  const removeInputFields = () =>{
    setRepeatCount(repeatCount -1);
    setFormDataArr([...formDataArr, initialFormData]); 
    
  }

  const handleChange = (index, field, value) => {
    const updatedFormDataArr = [...formDataArr]; 

    updatedFormDataArr[index] = {
      ...updatedFormDataArr[index],
      [field]: value,
    };
    setFormDataArr(updatedFormDataArr);
  };


  // need an useeffect that will fetch data for existing user when the page is loaded.
  // anupam da to create the api to get data of a single user. - sayak 8.9.23
  const goBack = (e) => {
    e.preventDefault();

    // should we submit if we go back, need to discuss. -sayak 8.9.23
    navigate("/education");
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("www.api.com", formDataArr); 
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log(formDataArr); 
      navigate("/other");
    }
  };

  return (
    <>
      <div className="text-center mb-16 my-10">
        <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
          experience <span className="text-indigo-600">Details</span>
        </h3>
      </div>

      <div className="container-fluid mx-10">
        <div className="max-w-screen-md mx-auto p-5">
          {Array.from({ length: repeatCount }, (_, index) => (
            <form
              className="Content w-full"
              key={index}
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <IndexedInput
                  small={false}
                  title="Organisation Name"
                  formDataArr={formDataArr} 
                  index={index}
                  variable="organisation_Name"
                  handleChange={handleChange}
                />
                <IndexedInput
                  small={false}
                  title="Location"
                  formDataArr={formDataArr} 
                  index={index}
                  variable="location"
                  handleChange={handleChange}
                />
                <IndexedInput
                  small={false}
                  title="Role / Responsibility"
                  formDataArr={formDataArr} 
                  index={index}
                  variable="responsibility"
                  handleChange={handleChange}
                />

                <IndexedInput
                  small={false}
                  title="Description"
                  formDataArr={formDataArr} 
                  index={index}
                  variable="description"
                  handleChange={handleChange}
                />
             

             <div className="w-full max-w-xs">
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="select Date"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 7.293a1 1 0 011.414-1.414L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {selectedDate && (
                    <p className="mt-2 text-gray-600">Selected Date: {selectedDate.toDateString()}</p>
                  )}
                </div>
                <div className="w-full max-w-xs">
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="select Date"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 7.293a1 1 0 011.414-1.414L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {selectedDate && (
                    <p className="mt-2 text-gray-600">Selected Date: {selectedDate.toDateString()}</p>
                  )}
                </div>




              </div>
            </form>
          ))}

          <div className="w-full flex justify-center mt-4">
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8" // Added "mr-2" for right margin
              type="button"
              onClick={(e) => goBack(e)}
            >
              Back
            </button>
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8"
              type="button"
              onClick={handleRepeatClick}
            >
              Add Experience
            </button>
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8"
              type="button"
              onClick={removeInputFields}
            >
              remove Experience
            </button>
            <button
              className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4"
              type="submit"
              onClick={handleFormSubmit}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
