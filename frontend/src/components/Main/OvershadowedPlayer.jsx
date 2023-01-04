import React from "react";
import styles from "./card-style.css"
import { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";


import axios from "axios";
import { useState, useEffect } from "react";
import cardInfo from "../cardInfo";


const OverShadowedPlayer = () => {

  const [player, setPlayer] = React.useState();
  React.useEffect(() => {
    async function fetchData() {
      const player =
        "https://weeklysoccer.onrender.com/api/player/maxplayer";

      const fetchedPlayer = await axios.get(player);
      console.log(fetchedPlayer.data[0]._id);
      setPlayer(fetchedPlayer.data[0]._id);
     
    }
    fetchData();
  }, []);

  const [match, setMatch] = React.useState();
  React.useEffect(() => {
    async function fetchData() {
      const match =
        "https://weeklysoccer.onrender.com/api/match/maxmatch";

      const fetchedMatch = await axios.get(match);
      console.log(fetchedMatch.data[0]._id);
      setMatch(fetchedMatch.data[0]._id);
     
    }
    fetchData();
  }, []);

    const id2 =match;
    const id1 = player;
    console.log(id2)
    
    //const id1 = "63b4e6c27c20961432543b92";

    const[inputs,setInputs] = useState({});
    
    
    useEffect(()=>{
      const fetchHandler=async()=>{
        await axios
        .get(`https://weeklysoccer.onrender.com/api/player/${id1}`)
        .then((res) => (res.data)).then(data=>setInputs(data.player))
        
      };
      fetchHandler();
    },[id1]);



    //const id2 = "637dfd469953a84747abc2ba"
    const[inputs2,setInputs2] = useState({});
    useEffect(()=>{
      const fetchHandler=async()=>{
        await axios
        .get(`https://weeklysoccer.onrender.com/api/match/${id2}`)
        .then((res) => (res.data)).then(data=>setInputs2(data.match))
        
      };
      fetchHandler();
    },[id2]);
/*
    const[inputs2,setInputs2] = useState({});
    useEffect(()=>{
      const fetchHandler=async()=>{
        await axios
        .get(`https://weeklysoccer.onrender.com/api/match/${id2}`)
        .then((res) => (res.data)).then(data=>setInputs2(data.match))
        
      };
      fetchHandler();
    },[id2]);
    
    React.useEffect(() => {
      async function fetchData() {
          console.log("Ebrar");
          const matchUrl =
            "https://weeklysoccer.onrender.com/api/match/637e05299953a84747abc2bb";
          const playerUrl =
            "https://weeklysoccer.onrender.com/api/player/637a8d667757477ec0e70859";
            
          const fetchedmatch= await axios.get(matchUrl);
          console.log(fetchedmatch.data);
          setCard2(fetchedmatch.data);
      } 
      fetchData();
    },[]);
*/
  

    
      
        return(
          <div>
          <div className="row row-cols-15 row-cols-md-4 g-6">
              <div className="card-center cardalign w-50 h-50"  >
                <h3 className="title">Highlighted Player of This Week</h3>
                  <div className="card h-100 w-100 text-center" >
                    <div className="overflow">
                      <img src={inputs.image} width={200} height={200} className="card-img-center" alt="..." object-fit = "fill"></img>
                    </div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{inputs.name}</h5>
                        <p className="card-text">
                          Team: {inputs.club} {<img src= {inputs.icon} width={23} height={23} alt="..."></img>} <br/> 
                          Age: {inputs.age}<br/>
                          Position: {inputs.position}<br/>

                          Nationality: {inputs.nationality}<br/>
                          Rating: {inputs.totalrating}
                          </p>
                        <Link to={"player/"+inputs._id}>
                            <button type="button" className="_btn">
                               Go to profile
                            </button>
                         </Link>
                    </div>
                 </div>
                  
                </div>
                <div className="card-center cardalign w-50 h-50"  >
                <h3 className="title">Upcoming Match Very Soon!</h3>
                <div className="card h-100 w-100 text-center">
                <div className="overflow">
                {<img src={inputs2.logo1} width={182} alt="..."></img>}
                 &nbsp;&nbsp;VS&nbsp;&nbsp;
                {<img src= {inputs2.logo2} width={182} alt="..."></img>}
                </div>
                <div class="card-body text-dark">
                  <h5 class="card-title">{inputs2.title}</h5>
                  <p className="card-text">
                        Team 1: {inputs2.team1} <br/> 
                        Team 2: {inputs2.team2}<br/>
                        Place: {inputs2.place}<br/>
                        Date: {inputs2.date}<br/>
                        Time: {inputs2.time}<br/>
                        Rating: {inputs2.totalrating}<br/>
                        </p>
                  <Link to={"match/"+inputs2._id}>
                    <button type="button" className="_btn">
                      Go to match statistics
                    </button>
                  </Link>
                </div>
                  </div>
                  
            </div>
            
          </div>
          </div>
        );
        
   
}

export default OverShadowedPlayer;


/*
{
  <div className="card h-100 w-100 text-center" >
                    <div className="overflow">
                      <img src={card.image} className="card-img-center" alt="..." object-fit = "fill"/>
                    </div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">
                          Team: {card.club} {<img src= {card.icon} width={23} height={23} alt="..."></img>} <br/>
                          Age: {card.age}<br/>
                          Position: {card.position}<br/>
                          Position Category: {card.position_category}<br/>
                          Merket Value: {card.market_value} <br/>
                          Nationality: {card.nationality}
                          </p>
                        <Link to={card.link}>
                            <button type="button" className="_btn">
                               Go to profile
                            </button>
                         </Link>
                    </div>
                    </div>
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
        },,<div className="card-center cardalign w-50 h-50"  >
                <h3 className="title">Upcoming Match: Very Soon!</h3>
                <div className="card h w-100 text-center">
                <div className="overflow">
                {<img src= {card2.image1} width={70} alt="..."></img>} <br/>
                <p> </p>
                <p> VS </p>
                {<img src= {card2.image2} width={60} alt="..."></img>} <br/>
                </div>
                <div class="card-body text-dark">

                  <p className="card-text">
                        Team 1: {card2.team1} <br/>
                        Team 2: {card2.team2}<br/>
                        Place: {card2.place}<br/>
                        Date: {card2.date}<br/>
                        Time: {card2.time} <br/>
                        </p>
                  <Link to={card2.link}>
                    <button type="button" className="_btn">
                      Go to match details
                    </button>
                  </Link>
                </div>
              </div>


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
*/
