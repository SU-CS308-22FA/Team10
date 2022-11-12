import styles from "./styles.modules.css";
import React from "react";

import Cards from "./Cards/Cards";
import ImageSlider from "./ImageSlider";
import Header from "../Header/Header"
const PlayersPage = () => {
	
	
	
    return (
		<div className={styles.main_container}>
			<Header/>
			
			
			<ImageSlider/>
			
			<h1>This Week's Players</h1>
			
			<Cards/>
		</div>
    );
}


export default PlayersPage;
