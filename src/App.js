import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import data from './data';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className='App'>
          {data.projects.map((project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
