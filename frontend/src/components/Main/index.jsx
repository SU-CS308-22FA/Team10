import styles from "../styles/styles.modules.css";
import React from "react";
import { useState } from "react";
import UserPage from '../UserPage/UserPage'
import image from "../img/weekly_soccer.png"
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import ImageSlider from "./ImageSlider"
import MainCards from "./MainCards/MainCards";
import Signup from "../SignUp";
import axios from "axios";
import OvershadowedPlayer from "./OvershadowedPlayer";
import UpcomingMatch from "./UpcomingMatch";
const Main = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		
		navigate("/");
	};
	const [error, setError] = useState("");
	const [value, setValue] = useState();
	function handlePlayersClicked() {
        console.log("Welcome to players page");
        navigate("/player");
    }
	return (
		<div className={styles.main_container}>
			<Header/>
			
			<ImageSlider/>
			
			<OvershadowedPlayer/> 
			<MainCards/>
			
			
			<button
              stype="button"
              className={styles.gray_btn}
              onClick={handleLogout}
            >
              Logout
            </button>
				
		</div>
	);
};

export default Main;