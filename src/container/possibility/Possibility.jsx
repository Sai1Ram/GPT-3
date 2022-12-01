import React from "react";
import "./possibility.css";
import PossibilityImg from "../../assets/possibility.png";
function Possibility() {
  return (
    <div className="sai_possibility section_padding" id="possibility">
      <div className="sai_possibility_img">
        <img src={PossibilityImg} alt="" />
      </div>
      <div className="sai_possibility_content">
        <h5 style={{ color: "#71E5FF" }}>
          Request Early Access to Get Started
        </h5>
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p style={{ color: "#81AFDD" }}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h5 style={{ color: "#FF8A71" }}>
          Request Early Access to Get Started
        </h5>
      </div>
    </div>
  );
}

export default Possibility;
