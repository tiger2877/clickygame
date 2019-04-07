import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
  <span onClick={() => props.handleClick(props.id)} className="update">
      <img alt={props.image} src={props.image} />
    </span>
  </div>
);

export default CharacterCard;