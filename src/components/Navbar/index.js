import React from "react";
import "./style.css";

function NavBar(props) {

    return (
      <nav className="navbar navbar-light bg-light">
        <div>{props.comment}</div>
        <div> Your Score: {props.currentScore} | Highest Score: {props.highScore}</div>
      </nav>
    );
  }

export default NavBar;