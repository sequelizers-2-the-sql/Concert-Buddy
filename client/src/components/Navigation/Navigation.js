import React from "react";
import "./Navigation.css";

export default function Navigation(props) {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        ConcertBuddy
      </a>
      <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/home">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/myevents">my events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/api/users/logout">logout</a>
                    </li>
                </ul>
    </nav>
    </div> );
}