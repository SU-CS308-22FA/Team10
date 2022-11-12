import React from "react";


const Card = props => {
    
    return(
        
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="fernando" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <a href="#" className="btn btn-outline-success">Go to profile</a>

            </div>
        </div>
    );
}
export default Card;