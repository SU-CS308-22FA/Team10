import React from "react";
import styles from "./maincard.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import match_image from "./football.png"
import player_image from "./player.png"
import referee_image from "./referee.png"
const MainCards = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    function handlePlayersClicked() {
        console.log("Welcome to players page");
        navigate("/player");
    }
    
    function handleRefereesClicked() {
        console.log("Welcome to referees page");
        navigate("/referee");
    }
    function handleMatchesClicked() {
        console.log("Welcome to matches page");
        navigate("/match");
    }
    return(
      <div>
        <div className={"signup_container"}>
         <div className={"signup_form_container"}>
         <div className={"right"}>
             <form className={"form_container"} onSubmit={handlePlayersClicked}>
             <h1>Players</h1>
                <div className="text">
                    <p>You can follow all players who perform in a match from the players tab.</p>
                    <p>The details of each player can be reachable. You can easily check the team, number of goals, assists, dribbles and passes of that player.  
                    </p>
                    <p>Click to see this week's players:</p>
                </div>
             
             {error && <div className={styles.error_msg}>{error}</div>}
             <button type="submit" className={"green_btn"}>
                 Players
             </button>
             </form>
             
         </div>
         <img src={player_image}/>
         </div>
     </div>
         <div className={"signup_container"}>
         <div className={"signup_form_container"}>
         <div className={"right"}>
             <form className={"form_container"} onSubmit={handleRefereesClicked}>
             <h1>Referees</h1>
             <div className="text">
                    <p>You can follow the from referees who is assigned to a match from the referees tab.</p>
                    <p>The details of each referees can be reachable. You can easily check the number of matches, fairness, and consistency grade of that player.  
                    </p>
                    <p>Click to see this week's referees:</p>
                </div>
             {error && <div className={styles.error_msg}>{error}</div>}
             <button type="submit" className={"green_btn"}>
                 Referees
             </button>
             </form>
         </div>
         <img src={referee_image}/>
         </div>

     </div>
     <div className={"signup_container"}>
         <div className={"signup_form_container"}>
         <div className={"right"}>
             <form className={"form_container"} onSubmit={handleMatchesClicked}>
             <h1>Matches</h1>
                <div className="text">
                    <p>You can follow weekly matches from matches tab.</p>
                    <p>The details of each match can be reachable. You can easily check the date, place and roster of each team of that match.  
                    </p>
                    <p>Click to see this week's matches:</p>
                </div>
             
             {error && <div className={styles.error_msg}>{error}</div>}
             <button type="submit" className={"green_btn"}>
                 Matches
             </button>
             </form>
             
         </div>
         <img src={match_image}/>
         </div>
     </div>
     </div>
    )
};

export default MainCards;





  
  

  

