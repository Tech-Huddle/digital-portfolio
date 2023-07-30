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
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
