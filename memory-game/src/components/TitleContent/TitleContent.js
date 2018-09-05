import React from "react";
import "./TitleContent.css";

const TitleContent = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">The Memory Game</h1>
            <p className="lead">Click on an image to earn a point, but don't click on any image more than once.</p>
        </div>
    </div>
)

export default TitleContent;
