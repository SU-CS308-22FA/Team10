import React from "react";

import './card-style.css'
const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="fernando" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    <ul>
                        <li>Team: GS</li>
                        <li>Age: 36</li>
                    </ul>
                </p>
                <a href="#" className="btn btn-outline-success">Go to profile</a>

            </div>
        </div>
    );
}
export default Card;