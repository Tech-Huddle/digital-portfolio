import "./App.css";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lang from "./components/Lang";

import data from './sample-data/bio-data.json';

class UserData{
  Constructor(){}
  get_data(){}


}


function App() {
  return (
    <div className="App">
      <div className="paper">
        <div className="top">
          <div className="profile-img">
          <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt=""  style={{'width':'22vw'}} />
          </div>
          <div className="about-section">
          <About name={data.name}
            headline={data['head-line']}
            address={data['address']}
            email={data['email']}
            phone={data['phone']}
            obj={data['objective']}
          
          />
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <Achievements></Achievements>
            <Skills data={data['technical-skill']}></Skills>
            <Lang data={data['languages']}></Lang>
          </div>
          <hr />
          <div className="right">
            <Experience exp={data['employment-history']}/>
            <Projects></Projects>
            <Education details={data['academics']}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
