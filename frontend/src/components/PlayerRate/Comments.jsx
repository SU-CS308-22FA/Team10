import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import cardInfo from "../cardInfo";

  import "./ratingbox.css";
const Comments = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const[inputs,setInputs] = useState({});
    const id = useParams().id;
    const [comments, setComments] = React.useState(cardInfo);
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    useEffect(()=>{
        const fetchHandler=async()=>{
         const fetchedComments =
        await axios
        .get(`http://localhost:8080/api/player/${id}`);
      
        setComments(fetchedComments.data.player.comments);
        //console.log(comments);

        
        };
        fetchHandler();
    },[id]);
    

    const renderComment = (card, index) => {
        return(
            <div className="card1 w-75 mx-auto" key={index} >
                <div className="item item--1 h-100 w-100 text-center" >
                    <div className="overflow"></div>
                    <div className="card-body text-dark">
                        <h1 className="text--1">{card.username}</h1>
                        <h1 className="text--2">{card.comment}</h1>
                    </div>
                
            </div>
                

            </div>
        );
    };
    return <div className="row row-cols-1  g-3">{[...comments].reverse().map(renderComment)}</div>; 
}
export default Comments;