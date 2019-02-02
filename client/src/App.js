import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    "testValue":"getting...."
  }

  componentDidMount() {
    console.log("MountingAPP");
    axios.get("/api/test").then(result => {
      console.log(result.data.test);
      this.setState({"testValue": result.data.test})
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the FINAL PROJECT</h2>
        </div>
        <p className="App-intro">
          New project, y'all. {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
