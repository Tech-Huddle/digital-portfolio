import "./App.css";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lang from "./components/Lang";

import info from './sample-data/bio-data.json';


class UserData{
  constructor(info){
    this.data = info
  }
  getData(){
    return this.data
  }
  
  
} 

function App() {
  const user_data = new UserData(info)
  const data = user_data.getData()
  
  return (
    <div className="App bg-white">
      <div className="paper ">
        <div className="top">
          <div className="profile-img">
          <img  src={data['image-url']} alt=""  style={{'width':'15vw'}} />
          </div>
          <div className="about-section ">
          <About name={data.name}
            headline={data['head-line']}
            address={data['address']}
            email={data['email']}
            phone={data['phone']}
            obj={data['objective']}
          
          />
          </div>
          
        </div>
        <div className="bottom">
          <div className="left">
            <Achievements></Achievements>
            <Skills data={data['technical-skill']}></Skills>
            <Lang data={data['languages']}></Lang>
          </div>
          <div className="right">
            <Experience exp={data['employment-history']}/>
            {/* <Projects></Projects> */}
            <Education details={data['academics']}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
