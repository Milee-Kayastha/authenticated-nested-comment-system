import React from "react";
import Comments from "../components/Comments";

const Home = () => {
  return (
    <div className="home">
      <div className="post">
        <div className="profile">
          <div className="profile_img">img</div>
          <div className="profile_detail">
            <span style={{ fontWeight: 500 }}>Adam Smith</span>
            <span style={{ color: "#8F8F8F" }}>2d</span>
          </div>
        </div>
        <div className="post_detail">
          <span className="post_title">Celebrating New Year</span>
          <span>
            One more year loaded with sweet recollections and cheerful times has
            passed. All my friends made my year exceptionally uncommon, and I
            wish this continues forever. With you around, each minute is a
            unique event for me. I wish you to Happy new year to all of you. 
          </span>
        </div>
        <div className="comments_header">Comments</div>
        <div className="comments">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Home;
