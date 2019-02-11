import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Auth from './utils/Auth';
import Navigation from "./components/Navigation/Navigation";


const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
        <Router> 
          <div>
          <Navigation />
            <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={Signup}/>
            {/* <Route path="/logout" component={Logout}/> */}
          </div>

        </Router>
    );
  }
}

export default App;
