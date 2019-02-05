import React from "react";
import style from  "./style.css";

function Click(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`pics${props.shake ? " shake" : ""}`}
    />
  );
}

export default Click;

