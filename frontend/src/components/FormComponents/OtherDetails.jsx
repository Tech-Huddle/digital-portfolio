import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./styles.css";
import IndexedInput from "./Inputs/IndexedInput";

export default function OtherDetails() {
  const navigate = useNavigate();

  const initialFormData = {

    user_id: uuidv4(),
    git_hub_url: "",
  };

  const [formDataArr, setFormDataArr] = useState([initialFormData]);
  const [repeatCount, setRepeatCount] = useState(1);

  const handleRepeatClick = () => {
    setRepeatCount(repeatCount + 1);
    setFormDataArr([...formDataArr, initialFormData]); 
  };

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
    navigate("/experience");
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
      navigate("/");
    }
  };

  return (
    <>
      <div className="text-center mb-16 my-10">
        <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
          Other <span className="text-indigo-600">Details</span>
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
                  title="Add any link that you want to show (eg: github, linkedin etc)"
                  formDataArr={formDataArr} 
                  index={index}
                  variable="git_hub_url"
                  handleChange={handleChange}
                />
              </div>
                
              <div className="flex flex-wrap -mx-3 mb-6">
                <IndexedInput
                  small={true}
                  title="Languages"
                  formDataArr={formDataArr} 
                  index={index}
                  variable="lang"
                  handleChange={handleChange}
                />
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
              Add
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
