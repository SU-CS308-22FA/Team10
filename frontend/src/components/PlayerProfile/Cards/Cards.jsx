import React from "react";
import Card from "./CardUI";
import { Component } from "react";
import img1 from "../assets/58088-1572949088.webp";

class Cards extends Component {
  render() {
    return (
      <div class="row row-cols-1 row-cols-md-6 g-4">
        <div class="col">
          <div class="card h-100 text-center">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" className="btn btn-outline-success">
                Go to profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
