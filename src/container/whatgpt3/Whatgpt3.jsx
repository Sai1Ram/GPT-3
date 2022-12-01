import React from "react";
import Feature from "../feature/Feature";
import "./whatgpt3.css";

function Whatgpt3() {
  return (
    <div className="  sai_whatgpt3" id="whatgpt3">
      <div className="sai_whatgpt3_first">
        <Feature
          heading="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
        <div className=""></div>
      </div>
      <div className="sai_whatgpt3_second">
        <h1 className="gradient_text">
          The possibilities are beyond <br />
          your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="sai_whatgpt3_third">
        <div>
          <Feature
            heading="Chatbots"
            text=" We so opinion friends me message as delight. Whole front do of plate
            heard oh ought."
          />
        </div>
        <div>
          <Feature
            heading="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b"
          />
        </div>
        <div>
          <Feature
            heading="Education"
            text="  At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
}

export default Whatgpt3;
