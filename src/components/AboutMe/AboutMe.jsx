import React from "react";
import ProfileImage from "../../assets/images/profile.jpg";
import "./AboutMe.scss";
import { FiGithub, FiAtSign, FiLinkedin, FiTwitter } from "react-icons/fi";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me-area">
        <img className="profile-image" src={ProfileImage} alt="Profile" />
        <h4>About Me</h4>
        <p>
          I am a perpetual student of code and an avid web developer. Solving
          problems and creating accessible information is my passion. I love
          learning new technologies, but spend much of my time mastering the
          ones I know. When I'm not coding, you can usually find me with my
          family, gaming, or woodworking.
        </p>
        <p>
          I am looking to join a team of developers with great attitudes and a
          need to create.
        </p>
        <div className="my-links">
          <a href="https://github.com/jonnyboydev" id="github-link">
            <FiGithub />
          </a>
          <a href="" id="email-link">
            <FiAtSign />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-b-clark/"
            id="linkedin-link"
          >
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/jonnyboydev" id="twitter-link">
            <FiTwitter />
          </a>
        </div>
      </div>
    );
  }
}

export default AboutMe;
