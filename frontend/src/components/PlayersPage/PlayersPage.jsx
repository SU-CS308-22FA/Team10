import styles from "./styles.modules.css";
import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const PlayersPage = () => {
    return (
		<div className={styles.main_container}>
			<AppBar sx={{ backgroundColor: "#3b3db1" }} position="sticky">
				<Toolbar>
					<Tabs
					sx={{ ml: "auto" }}
					textColor="inherit"
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
			
				
		</div>
    );
}
export default PlayersPage;