import styles from "../Main/styles.modules.css";
import React from "react";

import RequestCards from "./VerifyCards/Cards";
import HeaderForAdmin from "./HeaderForAdmin";

const VerificationRequests = () => {
	
    return (
		<div className={styles.main_container}>
			<HeaderForAdmin/>
			
			<p className="title">Verification Requests From Users</p>
			
			<RequestCards/>
		</div>
    );
}


export default VerificationRequests;