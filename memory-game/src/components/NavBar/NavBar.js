import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <span className="navbar-text">The Memory Game</span>
                </li>
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
