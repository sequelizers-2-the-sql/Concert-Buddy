import React, { Component } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


class App extends Component {
  render() {
    return (


      <Router>
        <div>
          <nav>links of now</nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Signup" component={Signup} />
        </div>
      </Router>

    );
  }
}

export default App;
