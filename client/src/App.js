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
import PreNav from "./components/PreNav/PreNav";
import "./App.css"
import NickName from './components/NickName';
import ChatApp from './components/ChatApp';
import About from "./pages/About";
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
      //ib for chat 2.17.19
      currentUsername: '',
      currentId: '',
      currentView: 'signup'  //s/b signup
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    //ib for chat 2.17.19
    this.changeView = this.changeView.bind(this);
    //this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
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

  changeView(view) {
    this.setState({
      currentView: view
    })
  }
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
      <Router>
        <div className="App">
          {window.location.pathname === '/signup' || window.location.pathname === '/login' || window.location.pathname === '/' ? <PreNav /> : <Navbar userId={this.state.userId} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />}
            {/* greet user if logged in: */}
            {this.state.loggedIn &&
              <p>You are logged in, {this.state.username}, userId: {this.state.userId}!!!!</p>
            }
            {/* Routes to different components */}

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
              component={MyEvents}
            />
            <Route
              exact path="/concerts/:id"
              component={Concerts}
            />

            <Route
              exact path="/"
              component={Landing}
            />

            <Route
              exact path="/chat"
              component={NickName}
            />

            <Route
              exact path="/chatApp"
              component={ChatApp}
            />

            <Route
              exact path="/about"
              component={About}
            />
            <Footer/>
        </div>
      </Router>
        );
      }
    }
    
    export default App;
