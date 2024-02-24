import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CommentForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        placeholder="Add your comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Comment
      </Button>
    </form>
  );
};

export default CommentForm;
