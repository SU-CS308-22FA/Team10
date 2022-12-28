import { useState, useEffect } from "react";

const CommentForm = ({handleSubmit, submitLabel,hasCancelButton = false,
    handleCancel,
    initialText = "",})=>{
    const [comment, setComment] = useState("");
    const isTextareaDisabled = comment.length === 0;
    const onSubmit = event => {
        event.preventDefault()
        handleSubmit(comment)
        setComment("");
    }

    return (
        <form onSubmit={onSubmit} className="comment-form-text-area">
            <input
                placeholder="Enter a thought."
                className="input1"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <div>
                <button className="cta" disabled={isTextareaDisabled}>
                
                    <span>Send</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                </button>
            </div>
            {hasCancelButton && (
                <button
                type="button"
                className="comment-form-button comment-form-cancel-button"
                onClick={handleCancel}
                >
                Cancel
                </button>
            )}
    </form>
            
    );
};
export default CommentForm;