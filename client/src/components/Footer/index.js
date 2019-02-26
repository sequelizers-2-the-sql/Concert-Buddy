import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-bottom footer">
                <h5 className="navbar-brand text-center" href="/">
                    copyright 2019 - air, inc.
          </h5>
            </nav>
        </div>
        );
    }
}

export default Footer;