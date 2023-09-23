import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./styles.css";
import CustomInput from "./Inputs/CustomInput";

export default function BasicDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    // user_id to be stored in localstorage, and fetched from somewhere... to be decided
    user_id: uuidv4(),
    address: "",
    objective: "",
    headline: "",
    language: "",
  });

  // need an useeffect that will fetch data for existing user when the page is loaded.
  // anupam da to create the api to get data of a single user. - sayak 8.9.23
  const goBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("www.api.com", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log(formData);
      navigate("/education");
    }
  };

  return (
    <>
      <div className="text-center mb-16 my-10">
        <h3 className="Page heading text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
          Basic <span className="text-indigo-600">Details</span>
        </h3>
      </div>

      <div className="container-fluid mx-10">
        <div className="max-w-screen-md mx-auto p-5">
          <form className="Content w-full" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <CustomInput
                small={true}
                title="First Name"
                formData={formData}
                variable="first_name"
                setFormData={setFormData}
              />
              <CustomInput
                small={true}
                title="Last Name"
                formData={formData}
                variable="last_name"
                setFormData={setFormData}
              />
              <CustomInput
                small={true}
                title="Email"
                formData={formData}
                variable="email_address"
                setFormData={setFormData}
              />
              <CustomInput
                small={true}
                title="Contact Number"
                formData={formData}
                variable="phone_number"
                setFormData={setFormData}
              />

              <CustomInput
                small={false}
                title="Address"
                formData={formData}
                variable="address"
                setFormData={setFormData}
              />

              <CustomInput
                small={false}
                title="Head Line"
                formData={formData}
                variable="headline"
                setFormData={setFormData}
              />

              <CustomInput
                small={false}
                title="Role Objective"
                formData={formData}
                variable="objective"
                setFormData={setFormData}
              />
              <div className="w-full flex justify-center mt-4">
                <button
                  className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4 mr-8" // Added "mr-2" for right margin
                  type="button"
                  onClick={(e) => goBack(e)}
                >
                  Back
                </button>
                <button
                  className="bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// in textareas, in place of py-3 (padding top and padding bottom), I have given pt-3 (only top padding),
// looks a lot better. -Sayak (7.9.23)

// first name code with mandatory syntax and stuff; sayak 8.9.23
{
  /* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
<label
  className="Input block uppercase tracking-wide text-white-700 text-xs font-bold mb-2"
  htmlFor="grid-first-name"
>
  First Name
</label>

<input
  className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
    formData.first_name === ""
      ? "border-red-500 border-2"
      : "border-gray-200"
  }`}
  id="grid-first-name"
  type="text"
  value={formData.first_name}
  onChange={(e) =>
    setFormData({ ...formData, first_name: e.target.value })
  }
/>

{formData.first_name === "" && (
  <p className="text-red-500 text-xs italic">
    Please fill out this field.
  </p>
)} 
</div>*/
}
