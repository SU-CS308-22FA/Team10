import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import cardInfo from "../cardInfo";

import "./ratingbox.css";
import "./comments.css"
import MatchComment from "./MatchComment";
import MatchCommentForm from "./MatchCommentForm";
import { set } from "mongoose";
const MatchComments = ({currentUserId}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
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
    
    axios.post(`https://weeklysoccer.onrender.com/api/match/comment/${id}`, {comment, postedby: user._id, username:user.firstName+ " "+user.lastName,parentId},config)
    
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
    useEffect(()=>{
        const fetchHandler=async()=>{
        const fetchedComments =
        await axios
        .get(`https://weeklysoccer.onrender.com/api/match/${id}`);
    
        setComments(fetchedComments.data.match.comments);
        console.log(comments)

        
        };
        fetchHandler();
    },[id]);
    console.log(comments)
    return(
        <div className="comments1">
            
            
            <MatchCommentForm submitLabel="Write" handleSubmit={addComment}/>
            <div className="comments-card">
              
                {rootComments.map((rootComment)=>(
                    
                    <MatchComment 
                        key={rootComment._id} 
                        comment={rootComment} 
                        replies={getReplies(rootComment._id)} 
                        currentUserId={user._id}
                        
                        activeComment={activeComment}
                    
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                    />
                ))}
            </div>

        </div>
    )


}
export default MatchComments;