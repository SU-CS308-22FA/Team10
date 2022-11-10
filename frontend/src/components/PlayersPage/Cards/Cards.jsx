import React from "react";
import Card from "./CardUI";
import { Component } from 'react';
import img1 from "../assets/58088-1572949088.webp"
import img2 from "../assets/318077-1660050345.webp"
import img3 from "../assets/68863-1591599151.webp"

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Fernando"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="bilmemne"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="bilmemne2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;