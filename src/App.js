import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className='App'>
          <Card />
        </div>
      </>
    );
  }
}

export default App;
