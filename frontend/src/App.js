import "./App.css";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lang from "./components/Lang";
import UserDataService from "./service/UserDataService";
import html2pdf from 'html2pdf.js';


function App() {
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

export default App;
