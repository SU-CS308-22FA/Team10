import React from "react";
import styles from "./card-style.css"
import { Component } from 'react';
import img1 from "../assets/58088-1572949088.webp"
import img2 from "../assets/318077-1660050345.webp"
import img3 from "../assets/68863-1591599151.webp"

const Cards = () => {
    const cardInfo = [
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"#"
        },
        {
          image:
            img2,
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
          link:"#"
        },
        {
          image:
            img2,
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
          link:"#"
        },
        {
          image:
            img2,
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
       
      ];
      const renderCard = (card, index) => {
        return(
            
                <div className="col" >
                    <div className="card h-100 w-100 text-center" key={index}>
                    <div className="overflow">
                      <img src={card.image} class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-body text-dark">
                        <h5 class="card-title">{card.title}</h5>
                        <p class="card-text">{card.text}</p>
                        <a href={card.link} className="btn btn-outline-success">Go to profile</a>
                    </div>
                    </div>
                </div>
           

        );
        
    };
    return <div className="row row-cols-4 row-cols-md-6 g-4">{cardInfo.map(renderCard)}</div>;
}

export default Cards;