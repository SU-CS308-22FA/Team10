import styles from "./styles.modules.css";
import React from "react";
import { AppBar, Tab, Tabs, Toolbar} from "@mui/material";
import { NavLink } from "react-router-dom";

import ImageSlider from "./ImageSlider";
const PlayersPage = () => {
	const slides=[
		{url: "player_messi.png", title: "messi" },
		{url: "player_ronaldo.png", title: "ronaldo" },
		
		
	]
	const containerStyles = {
		width: "1792px",
		height: "600px",
		margin: "0 auto",
	  };
    return (
		<div className={styles.main_container}>
			<AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
				<Toolbar>
					<Tabs
					sx={{ ml: "auto" }}
					textColor="inherit	"
					indicatorColor="primary"
					value= "undefined"
					
					>
						<Tab LinkComponent={NavLink} to="/players" label="Players" />
						<Tab LinkComponent={NavLink} to="/" label="Matches" />
						<Tab LinkComponent={NavLink} to="/" label="Referees" />
						<Tab LinkComponent={NavLink} to="/profile" label="My Profile" />
					</Tabs>

				</Toolbar>
			</AppBar>
			<div style={containerStyles}>
			
				<ImageSlider slides={slides}/>
			</div>
		</div>
    );
}
export default PlayersPage;