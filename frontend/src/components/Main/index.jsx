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
			<button className={styles.white_btn} onClick={handleLogout}>
				Logout
			</button>
				
		</div>
	);
};
		/*
		<div>
		<AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
			<Toolbar>
			<NavLink to="/" style={{ color: "white" }}>
				<Typography>
				<LibraryBooksOutlinedIcon />
				</Typography>
			</NavLink>
			<Tabs
				sx={{ ml: "auto" }}
				textColor="inherit"
				indicatorColor="primary"
				value={value}
				onChange={(e, val) => setValue(val)}
			>
				<Tab LinkComponent={NavLink} to="/add" label="Add product" />
				<Tab LinkComponent={NavLink} to="/books" label="Books" />
				<Tab LinkComponent={NavLink} to="/about" label="About Us" />
			</Tabs>
			</Toolbar>
		</AppBar>
		</div>
		
	);
*/
	/*
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome to Weekly Soccer!</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				
				
			</nav>
		</div>
	);
	
};
*/
export default Main;