import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

const Comments = () => {
  const fakeComments = [
    {
      id: "1",
      body: "Wish you a happer new year",
      username: "Jorge Parker",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Hellooo",
      username: "John Parker",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Yess",
      username: "Sara",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Happy new year",
      username: "Jane",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
  const [comments, setComments] = useState(fakeComments);
  const [activeComment, setActiveComment] = useState(null);


  return (
    <div>
      <CommentForm handleSubmit={null} />
      <div className="comments_container">
        {comments &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={null}
              deleteComment={null}
              updateComment={null}
            />
          ))}
      </div>
    </div>
  );
};

export default Comments;
