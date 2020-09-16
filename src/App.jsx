import React from "react";
import "./App.scss";
// import Header from './components/Header/Header';
import Card from "./components/Card/Card";
import data from "./data";
import AboutMe from "./components/AboutMe/AboutMe";
import Landing from "./components/Landing/Landing";
import Fade from "react-reveal/Fade";
import { DiWindows } from "react-icons/di";

class App extends React.Component {
  state = {
    showAboutMe: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", (event) => {
      this.setState({ showAboutMe: true });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <>
        <Landing />

        {/* <Header /> */}
        <div className="App">
          <Fade bottom when={this.state.showAboutMe}>
            <AboutMe />
            <div className="section-title">
              <h5>My Projects</h5>
              <hr />
            </div>
            <div className="card-area">
              {data.projects.map((project) => (
                <Card data={project} key={project.name} />
              ))}
            </div>
          </Fade>
        </div>
      </>
    );
  }
}

export default App;
