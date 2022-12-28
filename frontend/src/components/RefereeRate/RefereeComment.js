import RefereeCommentForm from "./RefereeCommentForm";

const Comment = ({comment,replies, currentUserId,deleteComment,activeComment,setActiveComment,updateComment,addComment,parentId=null})=>{
   
    const canReply = Boolean(currentUserId); //rate için de yap

    const canEdit = currentUserId === comment.postedby
    
    const canDelete = currentUserId === comment.postedby
    const isReplying = activeComment && activeComment.type === "replying" && activeComment.id === comment._id;

    const isEditing = activeComment && activeComment.type === "editing" && activeComment.id === comment._id;
    const replyId = parentId ? parentId :comment._id;
    

    return (
        <div >
        <div key={comment._id} className="comment">
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                </div>
                {!isEditing&&<div className="comment-text">{comment.comment}</div>}
                {isEditing&&(
                    <RefereeCommentForm submitLabel="Update" 
                     hasCancelButton 
                     initialText={comment.comment} 
                     handleSubmit={(comment)=>updateComment(comment,comment._id)}
                     handleCancel={()=>setActiveComment(null)}/>
                )}
                <div className="comment-actions">
                {canReply && (
                    <div
                    className="comment-action"
                    onClick={() =>
                        setActiveComment({ id: comment._id, type: "replying" })
                    }
                    >
                    Reply
                    </div>
                )}
                    

                </div>
                
                {
                    
                isReplying && (
                    <RefereeCommentForm submitLabel="Reply" handleSubmit={(comment)=> addComment(comment,replyId)}/>
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Comment 
                            comment={reply} 
                            key={reply._id} 
                            replies={[]} 
                            currentUserId={currentUserId} 
                            deleteComment={deleteComment}
                            addComment={addComment}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            updateComment={updateComment}
                            parentId={comment._id}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};
export default Comment;