import CommentForm from "./CommentForm";
import Avatar from "@mui/material/Avatar";

const Comment = ({
  comment,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  // currentUserId,
}) => {
  let currentUserId = 1;

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  const stringAvatar = (name) => {
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("");

    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 29,
        height: 29,
      },
      children: initials,
    };
  };

  return (
    <div key={comment.id} className="comment">
      <Avatar {...stringAvatar(comment.username)} />
      <div className="comment-right-part">
        <div
          className={`comment-content ${
            comment.parentId ? "comment-content-child" : "comment-content-top"
          }`}
        >
          <div className="comment-author">{comment.username}</div>
           <div className="comment-text">{comment.body}</div>
         
        </div>
        <div className="comment-actions">
          reply
          </div>
        {comment?.replies?.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
