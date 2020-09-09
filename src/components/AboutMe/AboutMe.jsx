import React from 'react';
import ProfileImage from '../../assets/images/profile.jpg';
import './AboutMe.scss';

function AboutMe() {
  return (
    <div className='about-me-area'>
      <img className='profile-image' src={ProfileImage} alt='Profile' />
          <h1>Jonathan Clark</h1> <h2>Full Stack Engineer</h2>
      <p>
        I am a perpetual student of code and an avid web developer. Solving
        problems and creating accessible information is my passion. I love
        learning new technologies, but spend much of my time mastering the ones
        I know. When I'm not coding, you can usually find me with my family,
        gaming, or woodworking.
      </p>
      <p>
        I am looking to join a team of developers with great attitudes and a
        need to create.
      </p>
    </div>
  );
}

export default AboutMe;
