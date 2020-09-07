import React from 'react';
import './App.scss';
// import Header from './components/Header/Header';
import Card from './components/Card/Card';
import data from './data';
import AboutMe from './components/AboutMe/AboutMe';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <div className='App'>
          <AboutMe />
          <div className='card-area'>
            {data.projects.map((project) => (
              <Card data={project} key={project.name} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
