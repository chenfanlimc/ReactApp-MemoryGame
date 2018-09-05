import React from "react";
import "./NavBar.css";

const NavBar = props => (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="app-title"> The Memory Game</li>
                    <li>
                        {props.resultText}
                    </li>
                    <li>
                        "Score: {props.score} | Top Score: {props.topScore}"
                </li>
                </ul>
            </div>
        </nav>
)
export default NavBar;
