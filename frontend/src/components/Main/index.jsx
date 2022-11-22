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

const Main = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		window.location.reload();
		navigate("/");
	};

	const [value, setValue] = useState();
	
	return (
		<div className={styles.main_container}>
			<Header/>
			<ImageSlider/>
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