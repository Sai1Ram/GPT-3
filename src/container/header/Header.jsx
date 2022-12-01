import React from "react";
import "./header.css";
import { default as people } from "../../assets/people.png";
import { default as ai } from "../../assets/ai.png";
function Header() {
  return (
    <div className="sai_header section_padding" id="home">
      <div className="sai_header_content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="sai_header_content_form">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="sai_header_content_people">
          <img src={people} alt="People" />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className="sai_header_illustration">
        <img src={ai} alt="" />
      </div>
    </div>
  );
}

export default Header;
