import React from "react";
import {Component} from "react";
import "./style.css";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <div>{this.props.comment}</div>
        <div> Score: {this.props.currentScore} | Total Score: {this.props.highScore}</div>
      </nav>
    );
  }
}

export default Navbar;