const Comment = ({comment,replies})=>{
    return (
        <div className="comment">
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                </div>
                <div className="comment-text">{comment.comment}</div>
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Comment comment={reply} key={reply._id} replies={[]}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Comment;