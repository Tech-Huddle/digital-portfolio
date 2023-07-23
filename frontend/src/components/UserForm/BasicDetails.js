import React from "react";

const Part1 = () => {
  return (
    <div className="flex items-center card-inner justify-center text-white">
      <div className="w-[50%] p-5">
        <div className="text-3xl">
          Basic Details
        </div>
        <form>
          <div class="flex justify-between items-center">
            <input
            className="px-3 py-2 my-5 rounded"
              type="text"
              id="name"
              placeholder="Full Name"
              required
            />
            <input
            className="px-3 py-2 my-5 rounded"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
            className="px-3 py-2 my-5 rounded"
              type="number"
              id="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          
          <div className="flex flex-col justify-evenly">

          <input
          className="px-3 py-2 my-5 rounded"
              type="text"
              id="address"
              placeholder="Address"
              
            />
            
            <input
            className="px-3 py-2 my-5 rounded"
              type=""
              id="phone"
              placeholder="Objective"
              
            />
            
            <input
            className="px-3 py-2 my-5 rounded"
              type="phone"
              id="phone"
              placeholder="Headline"
              />
              </div>




          {/* button goes here */}
          <button
          type="submit"
           class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Save
            </span>
          </button>

          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-black focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Next
          </button>

        </form>

        {/* <Preview/> */}
      </div>
    </div>
  );
};

export default Part1;
