import React, { Component } from "react";
import "./App.css";
import ApiCallComponent from "./components/ApiCallComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: "",
      city: "",
      searched: false
    };
  }
  setSummary = data => {
    this.setState({
      summary: data
    });
  };

  render() {
    return (
      <div className={"App"}>
        <nav className={"navbar navbar-light swatch-teal"}>
          <a className={"navbar-brand"} href="#app">
            Can I Ride?
          </a>
          {this.state.summary ? (
            <p className={"week-summary"}>
              Week in short: {this.state.summary}
            </p>
          ) : null}
          <form className={"form-inline my-2 my-lg-0"}>
            <input
              className={"form-control mr-sm-2 searchQuery"}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={"btn btn-outline-success my-2 my-sm-0"}
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <ApiCallComponent
          searched={this.state.searched}
          resetSearchTerms={this.resetSearchTerms}
          searchCoords={this.state.city}
          setSummary={this.setSummary}
          manualSearch={this.manualsearch}
        />
        <a href="https://darksky.net/poweredby/">
          <button className="btn btn-dark">Powered By DarkSky</button>
        </a>
      </div>
    );
  }
}

export default App;
