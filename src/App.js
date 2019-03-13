import React, { Component } from 'react';
import './App.css';
import ApiCallComponent from './components/ApiCallComponent';
// import NavCurrentPositionWeather from './components/NavCurrentPositionWeather'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'This should not be overwritten unless intended',
    }
  }

  render() {


    return (
      <div className={"App"}>
        <nav className={"navbar navbar-light swatch-teal"}>
          <a className={"navbar-brand"} href="#app">Can I Ride?</a>
        </nav>
        <ApiCallComponent />
        <a href="https://darksky.net/poweredby/">
          <button className="btn btn-dark">
            Powered By DarkSky
          </button>
        </a>
      </div>
    );
  }
}

export default App;
