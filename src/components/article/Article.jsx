import React from "react";
import "./article.css";

function Article({first_line, heading, img}) {
  return (<>
  <div>
    <div className="sai_article">
      <div className="sai_article_img_container">
        <img src={img} alt=""  className="sai_article_img"/>
      </div>
      <div className="sai_article_text">
        <p>{first_line}</p>
        <h3>{heading}</h3>
        <p>Read full article</p>
      </div>
    </div>
  </div>
  </>)
}

export default Article;
