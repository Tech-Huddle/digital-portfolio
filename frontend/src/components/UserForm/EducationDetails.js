import React from "react";

const EducationDetails = ({
  education,
  updateFields
}) => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="w-[50%] p-5">
          <div className="text-3xl text-white">Education Details</div>

          <div>
            <div class="flex justify-between items-center flex-wrap">
              <input
              value={education.institute}
              // onChange={e => updateFields({education.institute:e.target.value})}
                className="px-3 py-2 rounded my-5"
                type="text"
                id="institute"
                placeholder="Name of the Institute"
                required
              />
              <input
              value={education['location']}
              // onChange={e => updateFields({})}
                className="px-3 py-2 rounded my-5"
                type="text"
                id="schoolLocation"
                placeholder="Location"
                required
              />
              <input
              value={education['major']}
              // onChange={e => updateFields({})}
                className="px-3 py-2 rounded my-5"
                type="text"
                id="major"
                placeholder="Major"
                required
              />
              <div className="flex items-center gap-5">
                <label htmlFor="startDate" className="text-white">
                  Start Date
                </label>
                <input
                value={education['startDate']}
                // onChange={e => updateFields({})}
                  className="px-3 py-2 rounded my-5"
                  type="month"
                  id="startDate"
                  required
                />
              </div>
              <div className="flex items-center gap-5">
                <label htmlFor="endDate" className="text-white">
                  End Date
                </label>
                <input
                value={education['endDate']}
                // onChange={e => updateFields({})}
                  className="px-3 py-2 rounded my-5"
                  type="month"
                  id="endDate"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col justify-evenly">
              <textarea
                className="px-3 py-2 rounded my-5"
                type="text"
                id="address"
                placeholder="Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
