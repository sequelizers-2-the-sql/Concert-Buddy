import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";
import "./Navigation.css";


function Navigation({loggedIn, userId, logout, history}) {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
                ConcertBuddy
      </a>
            <ul class="nav nav-pills">

               
                <li class="nav-item">
                    <Link class="nav-link logo-nav" to="/home">home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link logo-nav" to={`/myevents/${userId}`}>
                        my events
                    </Link>
                </li>
                {loggedIn ? (
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="#" onClick={event => {
                            logout(event);
                            history.push("/");
                        }}>
                            logout
                        </a>

                    </li>
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
            </ul>
        </nav>
    </div>);
}

export default withRouter(Navigation);