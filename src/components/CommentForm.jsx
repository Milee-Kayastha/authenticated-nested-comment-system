import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel = "Add",
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) return;
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        fullWidth
        multiline
        autoFocus
        rows={2}
        sx={{ background: "white" }}
        placeholder="Add your comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="comment-form-action">
        {hasCancelButton && (
          <Button type="button" variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isTextareaDisabled}
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
