import styles from "../styles/styles.modules.css";
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserPage from '../UserPage/UserPage'
import image from "../img/weekly_soccer.png"
import Header from "../Header/Header";
import ImageSlider from "./ImageSlider"
import MainCards from "./MainCards/MainCards";
import Signup from "../SignUp";
const Main = () => {
	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		window.location.reload();
	};

	const [value, setValue] = useState();
	
	return (
		<div className={styles.main_container}>
			<Header/>
			<ImageSlider/>
			<MainCards/>
			
				
		</div>
	);
};

export default Main;