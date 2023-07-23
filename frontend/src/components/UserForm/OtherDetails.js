import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
  faFacebook,
  
} from '@fortawesome/free-brands-svg-icons';


const OtherDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-[50%] p-5">
          <div className="text-3xl text-white">Other Details</div>

          <form>
            <div className="flex justify-between my-5">


          <div className="flex flex-col">
            <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              <input className="mx-3 my-2 rounded w-[250px]" type="url" placeholder="URL"/>
            </div>
            <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              <input className="mx-3 my-2 rounded w-[250px]" type="url" placeholder="URL"/>
            </div>
            <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
              <input className="mx-3 my-2 rounded w-[250px]" type="url" placeholder="URL"/>
            </div>
            <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
              <input className="mx-3 my-2 rounded w-[250px]" type="url" placeholder="URL"/>
            </div>
            <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
              <input className="mx-3 my-2 rounded w-[250px]" type="url" placeholder="URL"/>
            </div>
            <div className="flex items-center justify-between">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
              <input className="mx-3 my-2 rounded w-[250px]" type="url" placeholder="URL"/>
            </div>
          </div>


          <div className="flex flex-col gap-2">

            <div>

            <div className="text-2xl text-white mb-2">Skills</div>
            <input type="text" name="skills" id="" className="p-2 rounded"/>
            </div>

            <div>
              <div className="text-2xl text-white mb-2">Languages</div>
              <input type="text" name="lanugages" id="" className="p-2 rounded"/>
            </div>

          </div>


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

export default OtherDetails;
