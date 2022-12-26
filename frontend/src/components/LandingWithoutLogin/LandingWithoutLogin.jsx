import styles from "../Main/styles.modules.css";
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserPage from '../UserPage/UserPage'
import image from "../img/weekly_soccer.png"

import ImageSlider from "../Main/ImageSlider"
import MainCards from "../Main/MainCards/MainCards";
import Signup from "../SignUp";
import HeaderForMain from "./HeaderForMain";
const LandingWithoutLogin = () => {
	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		window.location.reload();
	};

	const [value, setValue] = useState();
	
	return (
		<div className={styles.main_container}>
			<HeaderForMain/>
			<ImageSlider/>
			<MainCards/>
			
				
		</div>
	);
};

export default LandingWithoutLogin;