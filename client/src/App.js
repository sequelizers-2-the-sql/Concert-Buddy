import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  //Redirect,
} from 'react-router-dom'
import Home from "./pages/Home";
import MyEvents from "./pages/MyEvents"
import Concerts from "./pages/Concerts"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//ib for chat 2/17/19
//import ChatMessage from './components/ChatMessage';
//import NickName from './components/NickName';
//import ChatApp from './components/ChatApp';
// import { default as Chatkit } from '@pusher/chatkit-server';

import Navbar from "./components/Navigation/Navigation";
import Landing from "./pages/Landing";
import "./App.css"
import ChatApp from './components/ChatApp';
import Footer from "./components/Footer";


// const chatkit = new Chatkit({
//   instanceLocator: "v1:us1:bba82808-7449-4f24-a517-a97ac38da58a",
//   key: "b45deb0b-fb92-473a-86b6-28b3866ae055:BZhEh5QKDNYunYk7GTKn0DZjXaVzTKDuHWXGbmnzTio="
// })


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      userId: null,
      lat: null,
      lng: null
    }


  }

  componentDidMount() {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }

  logout = (event) => {
    event.preventDefault()
    console.log('logging out')
    axios.post('api/users/logout').then(response => {
      console.log(response.data)
      if (response.status === 200 || response.status === 304) {
        this.updateUser({
          loggedIn: false,
          username: null,
          userId: null
        });

      }
    }).catch(error => {
      console.error('Logout error', error)
    })
  }

  getUser = () => {
    axios.get('/api/users/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        axios.get('/api/users/' + response.data.user._id)
        .then(res => {console.log(res)
         this.setState({
           loggedIn: true,
           username: res.data.username,
           userId: res.data._id,
           lat: res.data.latitude,
           lng: res.data.longitude
        })
      })
     } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          userId: null,
          lat: null,
          lng: null
        })
      }
    })
  }
  //ib for chat 2.17.19 start.  this user is the nickname user in hipchat.
  // createUser(username) {
  //   chatkit.createUser({
  //     id: username,
  //     name: username,
  //   })
  //     .then((currentUser) => {
  //       this.setState({
  //         currentUsername: username,
  //         currentId: username,
  //         currentView: 'chatApp'
  //       })
  //     }).catch((err) => {
  //       if (err.status === 400) {
  //         this.setState({
  //           currentUsername: username,
  //           currentId: username,
  //           currentView: 'chatApp'
  //         })
  //       } else {
  //         console.log(err.status);
  //       }
  //     });
  // }

  //ib for chat 2.17.19 end

  render() {
    //ib for chat start
    // let view = '';

    // if (this.state.currentView === "ChatMessage") {
    //   view = <ChatMessage changeView={this.changeView} />
    // } else if (this.state.currentView === "NickName") {
    //   view = <Signup onSubmit={this.createUser} />
    // } else if (this.state.currentView === "chatApp") {
    //   view = <ChatApp currentId={this.state.currentId} />
    //   // view = <h1>The chatapp will go here</h1>
    // }

    //ib for chat end
    return (
      <Router >
        <div className="App">
          <Navbar
            userId={this.state.userId}
            updateUser={this.updateUser}
            loggedIn={this.state.loggedIn}
            logout={this.logout}
          />

          <Route
            exact path="/home"
            render={() =>
              <Home userId={this.state.userId} />
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
            exact path="/signup"
            render={() =>
              <Signup />}
          />
          <Route
            exact path="/myevents/:id"
            component={(props) => <MyEvents
            {...props}
            lat={this.state.lat}
            lng={this.state.lng}
            />}
          />
          <Route
            exact path="/concerts/:id"
            component={(props) => <Concerts
            {...props}
            userId={this.state.userId}
            lat={this.state.lat}
            lng={this.state.lng}
          />}
          />
          <Route
            exact path="/"
            component={Landing}
          />

          <Route
            exact path="/chatApp"
            component={(props) => <ChatApp
              {...props}
              username={this.state.username}
              userId={this.state.userId}
            />}

          />
          <Footer />
        </div>
      </Router>
        );
      }
    }
    
    export default App;
