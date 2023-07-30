import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const OtherDetails = ({
  github,
  linkedin,
  personalwebsite,
  youtube,
  languages,
  twitter,
  updateFields
}) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-[50%] p-5">
          <div className="text-3xl text-white">Other Details</div>
          <div>
            <div className="flex justify-between my-5">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                  <input
                    value={linkedin}
                    onChange={e=>{updateFields({linkedin:e.target.value})}}
                    className="mx-3 my-2 rounded w-[250px]"
                    type="url"
                    placeholder="URL"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                  <input
                    value={github}
                    onChange={e=>{updateFields({github:e.target.value})}}
                    className="mx-3 my-2 rounded w-[250px]"
                    type="url"
                    placeholder="URL"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                  <input
                    value={youtube}
                    onChange={e=>{updateFields({youtube:e.target.value})}}
                    className="mx-3 my-2 rounded w-[250px]"
                    type="url"
                    placeholder="URL"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                  <input
                    value={twitter}
                    onChange={e=>updateFields({twitter:e.target.value})}
                    className="mx-3 my-2 rounded w-[250px]"
                    type="url"
                    placeholder="https://"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                  <input
                    value={personalwebsite}
                    onChange={e=>updateFields({personalwebsite:e.target.value})}
                    className="mx-3 my-2 rounded w-[250px]"
                    type="url"
                    placeholder="URL for personal website (if any)"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <div className="text-2xl text-white mb-2">Skills</div>
                  <input
                    type="text"
                    name="skills"
                    id=""
                    className="p-2 rounded"
                  />
                </div>

                <div>
                  <div className="text-2xl text-white mb-2">Languages</div>
                  <input
                    value={languages}
                    onChange={e=>updateFields({languages:e.target.value})}
                    type="text"
                    name="lanugages"
                    id=""
                    className="p-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
