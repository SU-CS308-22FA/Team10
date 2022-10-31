import styles from "./styles.modules.css";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

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

export default Main;