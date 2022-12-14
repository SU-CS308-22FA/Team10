import React from "react";
import styles from "./card-style.css"
import { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";

import cardInfo from "../../cardInfo"
import axios from "axios";
import { useState, useEffect } from "react";


const CardsMatch = () => {
  
    const [matches, setMatches] = React.useState(cardInfo);
  
    React.useEffect(() => {
      async function fetchData() {
          console.log("Ebrar");
          const matchListUrl =
            "http://localhost:8080/api/match/allmatches";
            
          const fetchedMatchList = await axios.get(matchListUrl);
          console.log(fetchedMatchList);
          setMatches(fetchedMatchList.data);
      } 
      fetchData();

    },[]);
    
    
      const renderCard = (card, index) => {
      
        return(
          
          <div className="col" >
          <div className="card h-100 w-100 text-center" key={index}>
            <div className="overflow">
            {<img src= {card.image1} width={70} alt="..."></img>} <br/> 
            <p> </p>
            <p> VS </p>
            {<img src= {card.image2} width={60} alt="..."></img>} <br/> 
            </div>
            <div class="card-body text-dark">
              <h5 class="card-title">{card.title}</h5>
              <p className="card-text">
                    Team 1: {card.team1} <br/> 
                    Team 2: {card.team2}<br/>
                    Place: {card.place}<br/>
                    Date: {card.date}<br/>
                    Time: {card.time}M <br/>
                    </p>
              <Link to={card._id}>
                <button type="button" className="_btn">
                  Go to match details
                </button>
              </Link>
            </div>
          </div>
        </div>
           

        );
        
    };
    return <div className="row row-cols-4 row-cols-md-6 g-4">{matches.map(renderCard)}</div>; //players.map yazıcaz
}

export default CardsMatch;


/*
{
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"/"
        },
        {
          image:img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"#"
        },
        {
          image:img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"#"
        },
        {
          image:img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"#"
        },
        {
          image:
            img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"/"
        },
        {
          image:
            img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"/"
        },
        {
          image:
            img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
*/