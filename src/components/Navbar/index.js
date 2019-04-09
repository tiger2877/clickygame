import React from "react";
import "./style.css";

function NavBar(props) {

    return (
      <nav className="navbar navbar-light bg-light">
        <div>{props.comment}</div>
        <div> Score: {props.currentScore} | Total Score: {props.highScore}</div>
      </nav>
    );
  }

export default NavBar;