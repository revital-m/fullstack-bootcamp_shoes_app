import React from "react";
import "./Inputs.css";

export default function Inputs(props) {
  return (
    <div className="InputSearch">
      <label className="inputSearch--label">{props.labelName}</label>
      <input
        className="inputSearch--info"
        onChange={props.handleInputChange}
        type="text"
        value={props.value}
      ></input>
    </div>
  );
}
