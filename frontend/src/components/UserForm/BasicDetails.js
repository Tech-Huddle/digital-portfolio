import React from "react";

const BasicDetails = ({
  name,
  headline,
  address,
  objective,
  email,
  phone,
  updateFields,
}) => {
  return (
    <div className="flex items-center card-inner justify-center">
      <div className="w-[50%] p-5">
        <div className="text-3xl text-white">Basic Details</div>
        <div>
          <div class="flex justify-between items-center">
            <input
              className="px-3 py-2 my-5 rounded"
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={e=> updateFields({name: e.target.value})}
              required
              />
            <input
              className="px-3 py-2 my-5 rounded"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={e=> updateFields({email: e.target.value})}
              required
              />
            <input
              className="px-3 py-2 my-5 rounded"
              type="number"
              value={phone}
              id="phone"
              placeholder="Phone Number"
              onChange={e=> updateFields({phone: e.target.value})}
              required
              />
          </div>

          <div className="flex flex-col justify-evenly">
            <input
              className="px-3 py-2 my-5 rounded"
              type="text"
              value={headline}
              id="headline"
              placeholder="Headline"
              onChange={e=> updateFields({headline: e.target.value})}
              />

            <input
              className="px-3 py-2 my-5 rounded"
              type="text"
              value={objective}
              id="objective"
              placeholder="Objective"
              onChange={e=> updateFields({objective: e.target.value})}
              />

            <input
              className="px-3 py-2 my-5 rounded"
              type="text"
              value={address}
              id="address"
              placeholder="Address"
              onChange={e=> updateFields({address: e.target.value})}
            />
          </div>
        </div>

        {/* <Preview/> */}
      </div>
    </div>
  );
};

export default BasicDetails;
