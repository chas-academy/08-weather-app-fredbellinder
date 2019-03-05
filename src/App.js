import React, { Component } from 'react';
import './App.css';
import Position from './components/Position'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather AF</h1>
        <Position />
        <a href="https://darksky.net/poweredby/">Powered By DarkSky</a>
      </div>
    );
  }
}

export default App;
