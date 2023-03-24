import { useState } from "react";


const CommentForm = ({ handleSubmit, submitLabel, hasCancelButton = false, 
initialText = '',
handleCancel, sendUpdateComments }) => {
  const [text, setText] = useState(initialText);
  const isTextareaEmpty = text.length === 0;
  const onSubmit = event => {
    event.preventDefault();
    sendUpdateComments(text);
    handleSubmit(text);
    setText("");
  };
  return (

   <form onSubmit={onSubmit}>
      <textarea 
        className="comment-form-textarea" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaEmpty}> {submitLabel}</button>
      {hasCancelButton && (
        <button type="button" className="comment-form-button comment-form-cancel-button"
        onClick={handleCancel}>
          Cancel
          </button>

      )}
    </form>
  
  );
};

export default CommentForm;