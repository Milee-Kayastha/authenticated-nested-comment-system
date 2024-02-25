import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { fakeComments } from "../utils/constants";

const Comments = () => {
  const [comments, setComments] = useState(fakeComments);
  const [activeComment, setActiveComment] = useState(null);

  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Math.random().toString(36).slice(2, 9),
      body: text,
      parentId,
      userId: "3",
      username: "Sara",
      createdAt: new Date().toISOString(),
    };

    const addCommentToReplies = (commentsArr, parentId) => {
      return commentsArr.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies
              ? [...comment.replies, newComment]
              : [newComment],
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addCommentToReplies(comment.replies, parentId),
          };
        }
        return comment;
      });
    };

    if (parentId) {
      setComments(addCommentToReplies(comments, parentId));
    } else {
      setComments([newComment, ...comments]);
    }

    setActiveComment(null);
  };

  const updateComment = (text, commentId, parentId = null) => {
    const updateCommentInReplies = (commentsArr, parentId) => {
      return commentsArr.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies
              ? comment.replies.map((reply) =>
                  reply.id === commentId ? { ...reply, body: text } : reply
                )
              : [],
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: updateCommentInReplies(comment.replies, parentId),
          };
        }
        return comment;
      });
    };

    const updatedComments = parentId
      ? updateCommentInReplies(comments, parentId)
      : comments.map((comment) =>
          comment.id === commentId ? { ...comment, body: text } : comment
        );

    setComments(updatedComments);
    setActiveComment(null);
  };

  const deleteComment = (commentId, parentId = null) => {
    const deleteCommentInReplies = (commentsArr, parentId) => {
      return commentsArr.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies
              ? comment.replies.filter((reply) => reply.id !== commentId)
              : [],
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: deleteCommentInReplies(comment.replies, parentId),
          };
        }
        return comment;
      });
    };

    const updatedComments = parentId
      ? deleteCommentInReplies(comments, parentId)
      : comments.filter((comment) => comment.id !== commentId);

    setComments(updatedComments);
  };

  return (
    <div>
      <CommentForm handleSubmit={addComment} />
      <div className="comments_container">
        {comments &&
          comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
            />
          ))}
      </div>
    </div>
  );
};

export default Comments;