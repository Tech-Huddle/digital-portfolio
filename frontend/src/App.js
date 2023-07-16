import React, { useState } from "react";
// import Preview from './components/Preview';

const App = () => {
  const [checked, setChecked] = useState(true);
  const btn = () => {};

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <div className="flex items-center card-inner justify-center">
      <div className="w-[50%] p-5">
        <form>
          
          <div class="mb-6 my-5">
            <input
              type="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your FULL NAME"
              required
            />
          </div>

          <div class="mb-6">
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your EMAIL, ex: chompa@something.com"
              required
            />
          </div>



          <div class="flex items-start mb-6 gap-1 ">
            <div class="flex items-center h-5 ">
              <input
                id="gender"
                type="radio"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="gender"
              class="ml-2 text-sm font-medium text-black"
            >
              Female
            </label>
            <div class="flex items-center h-5">
              <input
                id="gender"
                type="radio"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="gender"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Male
            </label>
            <div class="flex items-center h-5">
              <input
                id="gender"
                type="radio"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="gender"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              American
            </label>
          </div>




          <div class="mb-6">
            <input
              type="headline"
              id="headline"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Headline"
            />
          </div>


          <div class="mb-6">
            <input
              type="objective"
              id="objective"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your objective here"
            />
          </div>


          <div class="mb-6">
            <input
              type="objective"
              id="objective"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone Number"
            />
          </div>



          {/* button goes here */}
          <button
            type="save"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
          <button
            type="next"
            class="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </form>

        {/* <Preview/> */}
      </div>
    </div>
  );
};

export default App;
