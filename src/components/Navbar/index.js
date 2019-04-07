import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav class="navbar">
    <div class="col-md-4">Clicky Game</div>
    <div class="col-md-4">Click an image to begin!</div>
    <div class="col-md-4 scores">Score: 0 | Top Score: 0</div>
    </nav>
);
}

export default Navbar;
