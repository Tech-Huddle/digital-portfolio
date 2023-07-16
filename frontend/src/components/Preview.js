import React from 'react'
import "../App.css";
import Education from "./Education";
import About from "./About";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Skills from "./Skills";
import Projects from "./Projects";
import Lang from "./Lang";
import UserDataService from "../service/UserDataService";
import html2pdf from 'html2pdf.js';



function Preview() {
    const user_data = new UserDataService();
    const data = user_data.getData();
  
    let convert2PDF =() =>{
      const resume = document.querySelector('.paper')
      
      html2pdf().from(resume).save()
  }
    return (
      <>
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
        <button className="btn" onClick={convert2PDF}>DOWNLOAD</button>
      </>
    );
  }
  
  export default Preview;
  