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
<<<<<<< HEAD
          <h2>Welcome to the FINAL PROJECT</h2>
=======
          <h2>Welcome to Project 3 by the sequelizers-2-the-sql</h2>
>>>>>>> 42bd407d8ae056340bc505e4681e8136fddc439c
        </div>
        <p className="App-intro">
          New project, y'all. {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
