import React from "react";

import { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";

import cardInfo from "../../cardInfo"
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const RequestCards = () => {

  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/verify/allrequests" ;
      const { data: res } = await axios.get(url, data);
      console.log(data);
      
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

    const [requests, setRequests] = React.useState(cardInfo);
    
    React.useEffect(() => {
      async function fetchData() {
        
          const requestListUrl =
            "http://localhost:8080/api/verify/allrequests";
            
          const fetchedRequestList = await axios.get(requestListUrl);
          console.log(fetchedRequestList);
          setRequests(fetchedRequestList.data);
      } 
      fetchData();

    },[]);
    
    const handleApproveClicked = async (userId,requestId) => {
        
        const user= 
              await axios
              .get(`http://localhost:8080/api/users/${userId}?_id=${userId}`)
              .then((res) => (res.data))
              
        console.log(user)
            
        try {
          console.log(userId);
          const url =
            "http://localhost:8080/api/users/" +userId +"?_id=" +userId;
          const {
            data: { user: updatedUser, message: message },
          } = await axios.put(url, { firstName: user.firstName, lastName: user.lastName, team: user.team, email: user.email, verified: true });
          sessionStorage.setItem("user", JSON.stringify(updatedUser));
         
          
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
          }
        }
       handleRejectClicked(requestId);
    
      };
     
      
      const [deleteID, setID] = React.useState();
      const handleRejectClicked =  async(e) => {
        
        console.log(e);
        try {
        const url =`http://localhost:8080/api/verify/${e}`
        const { data: res } = await axios.delete(url);
        console.log(data);
        
        console.log(res.message);
        } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
        }
        /*
        console.log(deleteID);
        e.preventDefault();
        
        const {
            data: { user: updatedUser, message: message },
          } = await axios.delete(`http://localhost:8080/api/verify/${deleteID}`, { deleteID})
          .then((res) => {
            console.log("off");
              
          }).catch((err) => {
              console.log("Error: ", err);
              
          });
        */
        window.location.reload();
      };
      
      
      const renderCard = (card, index) => {
        
        return(
                
                <div className="col" key={index} >
                  
                    <div className="card h-100 w-100 text-center" >
                    <div className="overflow">
                      <img src={card.file} className="card-img-top" alt="..." object-fit = "fill"/>
                    </div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">
                        
                          User Name: {card.name}<br/>
                          Date of Request: {card.date}<br/>
                        
                          </p>
                        
                       
                        <button type="button" className="_btn" onClick={ ()=> handleApproveClicked(card.user, card._id)} >
                            Approve
                        </button>
                        
                        
                        <button type="button" className="_btn" onClick={ ()=> handleRejectClicked(card._id)}  >
                            Reject
                        </button>
                      
                    </div>
                    </div>
                </div>
           

        );
        
    };
    return <div className="row row-cols-4 row-cols-md-6 g-4">{requests.map(renderCard)}</div>; //players.map yazıcaz
}

export default RequestCards;
