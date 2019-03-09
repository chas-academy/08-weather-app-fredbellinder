import React, { Component } from 'react';
import './App.css';
import ApiCallComponent from './components/ApiCallComponent';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'This should not be overwritten unless intended',
    }
  }

  componentWillMount() {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="App">
        <h1>Weather AF</h1>
        <ApiCallComponent />
        <a href="https://darksky.net/poweredby/">Powered By DarkSky</a>
      </div>
    );
  }
}

export default App;
