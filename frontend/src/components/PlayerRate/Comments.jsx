import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import cardInfo from "../cardInfo";

import "./ratingbox.css";
import "./comments.css"
import Comment from "./Comment";
import CommentForm from "./CommentForm";
const Comments = ({setActiveComment}) => {
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
    const [subcomments, setsubComments] = React.useState(cardInfo);
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
    
    axios.put(`http://localhost:8080/api/player/comment/${id}`, {comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId},config)
    
        return{comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId};
        
       
  }
        
    const addComment = (text, parentId) =>{  //text
        console.log('addComment',text,parentId) //text
        createCommentApi(text,parentId).then(comment =>{  //1. text
            console.log(comment)
            setComments([comment, ...comments])
        })
    }

    useEffect(()=>{
        const fetchHandler=async()=>{
         const fetchedComments =
        await axios
        .get(`http://localhost:8080/api/player/${id}`);
      
        setComments(fetchedComments.data.player.comments);
        console.log(comments)

        
        };
        fetchHandler();
    },[id]);
    console.log(rootComments)

  
    
    
    return(
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-container">
                {rootComments.map((rootComment)=>(
                    <Comment key={rootComment._id} comment={rootComment} replies={getReplies(rootComment._id)}/>
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