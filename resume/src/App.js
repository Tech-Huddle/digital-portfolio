import "./App.css";
import Education from "./components/Education";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <div className="paper">
        <div className="top">
          <div className="profile-img">
          <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" srcset="" style={{'width':'150px'}} />
          </div>
          <div className="about-section">
          <About></About>
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <Achievements></Achievements>
            <Skills></Skills>
          </div>
          <hr />
          <div className="right">
            <Experience />
            <Projects></Projects>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
