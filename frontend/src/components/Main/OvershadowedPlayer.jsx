import React from "react";
import styles from "./card-style.css";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

const OverShadowedPlayer = () => {
  const [card, setCard] = React.useState({});

  const [inputs, setInputs] = useState({});
  const id = "637d4c95f1ebee2cd4e7fcad";
  console.log();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://weeklysoccer.onrender.com/api/player/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.player));
    };
    fetchHandler();
  }, [id]);

  const [card2, setCard2] = React.useState({});

  React.useEffect(() => {
    async function fetchData() {
      console.log("Ebrar");
      const matchUrl =
        "https://weeklysoccer.onrender.com/api/match/637e05299953a84747abc2bb";

      const fetchedmatch = await axios.get(matchUrl);
      console.log(fetchedmatch.data);
      setCard2(fetchedmatch.data);
    }
    fetchData();
  }, []);

  return (
    <div className="row row-cols-15 row-cols-md-4 g-6">
      <div className="card-center cardalign w-50 h-50">
        <h3 className="title">Highlighted Player of This Week</h3>
        <div className="card h-100 w-100 text-center">
          <div className="overflow">
            <img
              src={inputs.image}
              className="card-img-center"
              alt="..."
              object-fit="fill"
            />
          </div>
          <div className="card-body text-dark">
            <h5 className="card-title">{inputs.name}</h5>
            <p className="card-text">
              Team: {inputs.club}{" "}
              {<img src={inputs.icon} width={23} height={23} alt="..."></img>}{" "}
              <br />
              Age: {inputs.age}
              <br />
              Position: {inputs.position}
              <br />
              Merket Vaue: {inputs.market_value}M <br />
              Nationality: {inputs.nationality}
            </p>
            <Link to={inputs.link}>
              <button type="button" className="_btn">
                Go to profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

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
*/
