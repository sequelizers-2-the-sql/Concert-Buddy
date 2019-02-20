import React, {  Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents"
import Concerts from "./pages/Concerts"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//import Auth from './utils/Auth';
//import Navbar from './components/navbar'
import Navbar from "./components/Navigation/Navigation";
import Landing from "./pages/Landing"
import "./App.css"


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      userId: null,
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/users/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userId: response.data.user._id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          userId: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar userId = {this.state.userId} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>You are logged in, {this.state.username}, userId: {this.state.userId}!!!!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/home"
          render = {() => 
            <Home userId = {this.state.userId} />
          }
          />
        <Route
          path="/login"
          render={() =>
            <Login
              updateUser={this.updateUser}
            />}
        />
        <Route
         exact path="/"
          render={() =>
            <Signup/>}
        />
        <Route
          exact path="/myevents/:id"
          component={MyEvents}
          />
        <Route
          exact path="/concerts/:id"
          component={Concerts}
          />

      </div>
    );
  }
}

export default App;
