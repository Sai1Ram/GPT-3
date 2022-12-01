import React from "react";
import Feature from "../../container/feature/Feature";
import "./features.css";
const featureData = [
  {
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    heading: "Improving end distrusts instantly ",
  },
  {
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    heading: "Become the tended active",
  },
  {
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    heading: "Message or am nothing",
  },
  {
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    heading: "Really boy law county",
  },
];
const Features = () => {
  return (
    <div className="sai_features section_padding  ">
      <div className="sai_features_heading ">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="sai_features_content">
        {featureData.map((item, index) => {
          return (
            <Feature
              heading={item.heading}
              text={item.text}
              key={item.heading + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
