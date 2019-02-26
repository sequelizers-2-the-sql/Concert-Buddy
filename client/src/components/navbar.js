import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('api/users/logout').then(response => {
            console.log(response.data)
            if (response.status === 200 || response.status === 304) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null,
                    userId: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>
                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        <section className="navbar-section">
                            <Link to="/" className="btn btn-link text-secondary">
                                <span className="text-secondary">home</span>
                            </Link>
                            {loggedIn ? (
                                <a to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span>
                                </a>
                            ) : (
                                    <>
                                        <Link to="/login" className="btn btn-link text-secondary">
                                            <span className="text-secondary">login</span>
                                        </Link>
                                        <Link to="/signup" className="btn btn-link">
                                            <span className="text-secondary">sign up</span>
                                        </Link>
                                    </>
                                )}
                        </section>
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler"></div>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="App-title">MERN Passport</h1>
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar