import React from "react";

const ExperienceDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-[50%] p-5">
          <div className="text-3xl text-white">Experience Details</div>

          <form>
            <div class="flex justify-between items-center flex-wrap">
              <input
              className="px-3 py-2 my-5 rounded"
                type="text"
                id="OrganizationName"
                placeholder="Name of the organization"
                required
              />
              <input
              className="px-3 py-2 my-5 rounded"
                type="text"
                id="designation"
                placeholder="Designation"
                required
              />
              <input
              className="px-3 py-2 my-5 rounded"
                type="text"
                id="location"
                placeholder="Location"
                required
              />
              <div>
                <div className="flex items-center gap-5">

                <label htmlFor="startDate" className="text-white">
                  Start Date
                </label>
                <input
                className="px-3 py-2 my-5 rounded" type="month" id="startDate" required />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5">

                <label htmlFor="endDate" className="text-white">
                  End Date
                </label>
                <input
                className="px-3 py-2 my-5 rounded" type="month" id="endDate" required />
              </div>
                </div>
            </div>

            <div className="flex flex-col justify-evenly">
              <textarea
              className="px-3 py-2 my-5 rounded" type="text" id="address" placeholder="Description" />

              <textarea
              className="px-3 py-2 my-5 rounded" type="" id="phone" placeholder="Responsibilities" />
            </div>

            {/* button goes here */}
            <button
              type="submit"
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Save
              </span>
            </button>

            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-black focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
