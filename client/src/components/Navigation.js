import React from "react";


export default function Navigation(props) {
    return (<>
    <header>
        <div class="first-header-container">
            <nav class="navbar navbar-light navbar-fixed">
                    <h1 class="logo-nav">ConcertBuddy</h1>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/home">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/myevents">my events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link logo-nav" href="/login">logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
    );
}