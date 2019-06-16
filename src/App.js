import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AutoCompleteText from "./AutoCompleteText";
import ListOfCountries from "./ListOfCountries";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="appComponent">
            <AutoCompleteText items={ListOfCountries} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
