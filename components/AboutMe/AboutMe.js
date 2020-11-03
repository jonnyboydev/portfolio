import React from "react";
import Image from "next/image";
import "./AboutMe.module.scss";
import { FiGithub, FiAtSign, FiLinkedin, FiTwitter } from "react-icons/fi";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me-area">
        <Image
          className="profile-image"
          src="/images/profile.jpg"
          alt="Profile"
          unsized
        />
        <h4>About Me</h4>
        <div className="about-me-text">
          <p>
            I am a <strong>positive team player</strong> that also has
            experience in <strong>management </strong>
            along with small - medium <strong>business development</strong>. I
            am
            <strong> extremely driven</strong> to get the project done right,
            with an emphasis on
            <strong> performance</strong> and design. Solving problems and
            creating accessible information is my passion. I love learning new
            technologies, but spend much of my time mastering the ones I know.
          </p>
          <p>
            I am looking to join a team of people wanting to create new and
            exciting products. My strengths are in both front end and back end
            technologies like NodeJS, SQL and NoSQL, ReactJS, GatsbyJS, Sass,
            HTML5, CSS3, Javascript, Typescript, and am always striving to learn
            more languages including Java and GoLang.
          </p>
        </div>
        <div className="my-links">
          <a href="https://github.com/jonnyboydev" id="github-link">
            <FiGithub />
          </a>
          <a href="mailto:me@jonnyboy.dev" id="email-link">
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
