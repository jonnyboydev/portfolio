import Head from "next/head";
//import styles from "../styles/Home.module.css";
import Image from "next/image";
import React from "react";

// import Header from './components/Header/Header';
import Card from "../components/Card/Card";
import data from "../data";
import AboutMe from "../components/AboutMe/AboutMe";
import Landing from "../components/Landing/Landing";
// import Fade from "react-reveal/Fade";

class App extends React.Component {
  // state = {
  //   showAboutMe: false,
  // };
  // componentDidMount() {
  //   window.addEventListener("scroll", (event) => {
  //     this.setState({ showAboutMe: true });
  //   });
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll");
  // }

  render() {
    return (
      <>
        {/* <div className="landing-info"> */}
        {/*   <Fade slide top when={!this.state.showAboutMe}> */}
        {/*     <Landing /> */}
        {/*   </Fade> */}
        {/* </div> */}

        {/* <Fade bottom when={this.state.showAboutMe}> */}
        {/* <Header /> */}
        <div className="App">
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
        </div>
        {/* </Fade> */}
      </>
    );
  }
}

export default App;
