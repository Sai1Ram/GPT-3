import React from "react";
import { Article } from "../../components";
import "./blog.css";
import image1 from "../../assets/blog01.png";
import image2 from "../../assets/blog02.png";
import image3 from "../../assets/blog03.png";
import image4 from "../../assets/blog04.png";
import image5 from "../../assets/blog05.png";
function Blog() {
  return (
    <>
      <div className="sai_blogs section_padding" id="blogs">
        <div className="sai_blogs_title gradient_text">
          <h1 className="sai_blogs_text">
            A lot is happening, We are blogging about it.
          </h1>
        </div>
        <div className="sai_blogs_articles">
          <div className="sai_blogs_articles_1">
            <div className="sai_blogs_article_1_img_container">
              <img src={image1} alt="" className="sai_blogs_article_1_img" />
            </div>
            <div className="sai_article_text">
              <p>Sep 26, 2021</p>
              <h3>
                GPT-3 and Open AI is the future. Let us exlore how it is? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Optio
                excepturi, perferendis dicta officia incidunt consequatur
                debitis aperiam amet quia, neque provident aut atque
                voluptatibus tenetur iste vel nulla esse. Corporis.
                voluptatibus tenetur iste  
              </h3>
              <p>Read full article</p>
            </div>
          </div>
          <Article
            first_line={"Sep 26, 2021"}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={image2}
          />
          <Article
            first_line={"Sep 26, 2021"}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={image3}
          />
          <Article
            first_line={"Sep 26, 2021"}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={image4}
          />
          <Article
            first_line={"Sep 26, 2021"}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            img={image5}
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
