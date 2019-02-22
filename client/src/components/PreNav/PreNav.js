import React, { Component } from "react";
import "./PreNav.css";

export default function PreNav(props) {
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        ConcertBuddy
      </a>
      <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/signup">sign up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href={`/login`}>login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/about">about</a>
                    </li>
                </ul>
    </nav>
    </div> );
}