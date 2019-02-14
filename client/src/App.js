import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
//import Auth from './utils/Auth';
// import Navbar from './components/navbar'
import Navbar from "./components/Navigation/Navigation";
import "./App.css"


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}>
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p>You are logged in, {this.state.username}!!!!</p>
          }
          {/* Routes to different components */}

          <Route
            path="/login"
            render={() =>
              <Login
                updateUser={this.updateUser}
              />}
          />
          <Route
            path="/signup"
            render={() =>
              <Signup />}
          />
          <Route
            path="/home"
            component={Home}
          />
          <Route
            exact path="/concerts/:id"
            component={MyEvents}
          />
                  <Route
            exact path="/"
            component={Landing}
          />
        </Navbar>


      </div>
    );
  }
}

export default App;
