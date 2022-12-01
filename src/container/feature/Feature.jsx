import React from "react";
import "./feature.css";
function Feature(props) {
  return (
    <div className="sai_feature  ">
      <div className="sai_feature_bar">
        <div />
        <h2>{props.heading}</h2>
      </div>
      <div className="sai_feature_text">{props.text}</div>
    </div>
  );
}

export default Feature;
