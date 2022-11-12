import { useState } from "react";
import React from "react";

import Header from "../Header/Header";
import styles from "./styles.modules.css";
const AboutUs = () => {

    return (
    <div>
        <Header />
        <div className={styles.login_container}>
          <div className={styles.login_form_container}>
            <div className={styles.left}>
        
                <h1>This is Weekly Soccer!</h1>
            </div> 
          </div>
        </div>
    
    </div>
  );
    
};

export default AboutUs;