import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import cardInfo from "../cardInfo";

import "./ratingbox.css";
import "./comments.css"
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { set } from "mongoose";

const Comments = ({currentUserId}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const [errorMessage, setErrorMessage] = useState("");
    const [isInteractive, setIsInteractive] = useState(true);
    const [btnValue, setBtnValue] = useState("Submit");
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const[inputs,setInputs] = useState({});
    const id = useParams().id;
    const [comments, setComments] = React.useState([]);
   const [activeComment, setActiveComment]=useState(null);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const rootComments = comments.filter(
        (comment) => comment.parentId === null
    );
    const getReplies = commentId =>{
        return comments.filter(comment=> comment.parentId === commentId)
    }
        
const createCommentApi = async(comment,parentId=null) => {
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }; 
    
    axios.post(`https://weeklysoccer.onrender.com/api/player/comment/${id}`, {comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId},config)
    
        return{comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId};
        
       
  }
const updateCommentApi = async(comment,parentId) => {
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }; 
    
    axios.put(`https://weeklysoccer.onrender.com/api/player/comment/${id}`, {comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId},config)
    
        return{comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId};
        
       
  }
        
    const addComment = (text, parentId) =>{  //text
        console.log('addComment',text,parentId) //text
        createCommentApi(text,parentId).then(comment =>{  //1. text
            console.log(comment)
            setComments([comment, ...comments])
            setActiveComment(null)
        })
    }

    const updateComment = (comment, commentId) => {
        
        updateCommentApi(comment).then(() => {
          const updatedComments = comments.map((comment) => {
            if (comment._id === commentId) {
              return { ...comment, body: comment };
            }
            return comment;
          });
          setComments(updatedComments);
          setActiveComment(null);
        });
        
      };

    
    const deleteComment = (commentId) => {
        if (window.confirm('Are you sure you want to delete your comment?')){
            /*
            deleteCommentApi(commentId).then(()=>{
                const updatedComments = comments.filter(comment => comment._id !== commentId);
                setComments(updatedComments);
            })
            */
            return {};
        }
    }

    useEffect(()=>{
        const fetchHandler=async()=>{
         const fetchedComments =
        await axios
        .get(`https://weeklysoccer.onrender.com/api/player/${id}`);
      
        setComments(fetchedComments.data.player.comments);
        console.log(comments)

        
        };
        fetchHandler();
    },[id]);
    console.log(comments)

  
    
    
    return(
        <div className="comments">
            
            
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-card">
              
                {rootComments.map((rootComment)=>(
                    
                    <Comment 
                        key={rootComment._id} 
                        comment={rootComment} 
                        replies={getReplies(rootComment._id)} 
                        currentUserId={user._id}
                        deleteComment={deleteComment}
                        activeComment={activeComment}
                        updateComment={updateComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                    />
                ))}
            </div>

        </div>
    )

    
}
export default Comments;
/*
<div key={rootComment._id} >
                        <h5>{rootComment.username}</h5>
                        <h4>{rootComment.comment}</h4>
                        
                    </div>
*/