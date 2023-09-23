import "./Resume.css";
import Education from "../../ResumeComponents/Education";
import About from "../../ResumeComponents/About";
import Experience from "../../ResumeComponents/Experience";
import Achievements from "../../ResumeComponents/Achievements";
import Skills from "../../ResumeComponents/Skills";
import Projects from "../../ResumeComponents/Projects";
import Lang from "../../ResumeComponents/Lang";
import UserDataService from "../../../service/UserDataService";
import html2pdf from 'html2pdf.js';

import { Link } from 'react-router-dom'



function Resume() {
  const user_data = new UserDataService();
  const data = user_data.getData();

  let convert2PDF =() =>{
    const resume = document.querySelector('.paper')
    
    html2pdf().from(resume).save()
}
  return (
    <div className="resume">
    





      <div className="App bg-white" id="resume">
        <div className="paper ">
          <div className="top">
            <div className="profile-img">
              <img
                src={data["image-url"]}
                alt=""
                // style={{'width':'15vw'}}
              />
            </div>
            <div className="about-section ">
              <About
                name={data.name}
                headline={data["head-line"]}
                address={data["address"]}
                email={data["email"]}
                phone={data["phone"]}
                obj={data["objective"]}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <Achievements></Achievements>
              <Skills data={data["technical-skill"]}></Skills>
              <Lang data={data["languages"]}></Lang>
            </div>
            <div className="right">
              <Experience exp={data["employment-history"]} />
              <Projects></Projects>
              <Education details={data["academics"]} />
            </div>
          </div>
        </div>
      </div>


      <Link to="/basic">
      <button  className="sticky bottom-20 left-2 bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-5" > UPDATE CV </button>
      </Link>
        <div/>
      <button  className="sticky bottom-5 left-2 inline-block bg-gray-200 rounded hover:border-black text-gray-700 font-bold py-2 px-4" onClick={convert2PDF}>DOWNLOAD</button>

    </div>
  );
}

export default Resume;