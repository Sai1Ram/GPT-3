import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
function Brand() {
  return (
    <div className="section_padding sai_brand ">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
    </div>
  );
}

export default Brand;
