import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

const UpcomingMatch = () => {
  const [card, setCard] = React.useState({});

  const id2 = "637dfd469953a84747abc2ba"
    const[inputs2,setInputs2] = useState({});
    useEffect(()=>{
      const fetchHandler=async()=>{
        await axios
        .get(`https://weeklysoccer.onrender.com/api/match/${id2}`)
        .then((res) => (res.data)).then(data=>setInputs2(data.match))

      };
      fetchHandler();
    },[id2]);




        return(

          <div className="card h-100 w-100 text-center">
          <div className="overflow">
          {<img src= {inputs2.image1} width={70} alt="..."></img>} <br/>
          <p> </p>
          <p> VS </p>
          {<img src= {inputs2.image2} width={60} alt="..."></img>} <br/>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">{inputs2.title}</h5>
            <p className="card-text">
                  Team 1: {inputs2.team1} <br/>
                  Team 2: {inputs2.team2}<br/>
                  Place: {inputs2.place}<br/>
                  Date: {inputs2.date}<br/>
                  Time: {inputs2.time}<br/>
                  </p>
            <Link to={inputs2.link}>
              <button type="button" className="_btn">
                Go to match details
              </button>
            </Link>
          </div>
        </div>

        );


}

export default UpcomingMatch;

/*
{
  div className="col" >
          <
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
