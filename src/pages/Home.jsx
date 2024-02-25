import React from "react";
import Comments from "../components/Comments";
import { Avatar } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <div className="post">
        <div className="profile">
          <div className="profile-img">
            <Avatar
              alt=""
              src="https://s3-alpha-sig.figma.com/img/7f1a/98cf/85ac79cd86721b410bc2113c22c79476?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fyww9ZDMv3vBoGbGTiTUmYeek6LuSpJjIRsbrdN8n5VH0RCtTMuEL8DZthbg835YQ219DUh-MrGqG590LriCoIRLak3p~QNsqEwlGLmEj0zkh7wzaHgyQv-DV9pgdh7f0GtcMEQNmwqViQt5MjHgb4TqgCkVVUYoTGhCQjQ6Y5PuYYNLtpc2e3~NQMmV~DCh-BnzEU3FIoCZPddtdJrESH~ulOSiGW3bhhC5tDpzsv5ssy7dYqGabBN-1S~WjddHbvQMJJiNGbxEACk0H~FbnM3JwnHU4e8KgXknjK7EAdZmirZ4nXgNnaudeWr23Pb~~PrkfVII9iZXMmlkbjwr7w__"
            />
          </div>
          <div className="profile-detail">
            <span style={{ fontWeight: 500 }}>Adam Smith</span>
            <span style={{ color: "#8F8F8F" }}>2d</span>
          </div>
        </div>
        <div className="post-detail">
          <span className="post-title">Celebrating New Year</span>
          <span>
            One more year loaded with sweet recollections and cheerful times has
            passed. All my friends made my year exceptionally uncommon, and I
            wish this continues forever. With you around, each minute is a
            unique event for me. I wish you to Happy new year to all of you.
          </span>
        </div>
        <div className="comments-header">Comments</div>
        <div className="comments">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Home;
