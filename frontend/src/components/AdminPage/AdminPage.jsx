import styles from "../Main/styles.modules.css";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import UserPage from '../UserPage/UserPage'
import image from "../img/weekly_soccer.png"

import ImageSlider from "../Main/ImageSlider"
import MainCards from "../Main/MainCards/MainCards";
import Signup from "../SignUp";
import Header from "../Header/Header";
import HeaderForAdmin from "./HeaderForAdmin";

const AdminPage = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		
		navigate("/");
	};

	const [value, setValue] = useState();
	
	return (
		<div className={styles.main_container}>
			<HeaderForAdmin/>
			<ImageSlider/>
			<MainCards/>	
		</div>
	);
};

export default AdminPage;