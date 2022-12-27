import { useState } from "react";
import React from "react";
import image from "./weekly_soccer.png";
import gzm from "./gzm.jpeg";
import Header from "../Header/Header";
import styles from "./styles.modules.css";
const AboutUs = () => {

    return (
    <div>
        <Header />
        <div className={styles.login_container}>
          <div className={styles.login_form_container}>
            <div className={styles.left}>
          
            <div class="cards2">
              <figure class="card2">
              <img src={image}/>
                  <figcaption class="card2_title">This is Weekly Soccer!</figcaption>
              </figure>
              
            </div>
            <div className="whoarewe">
              Who are we?
            </div>
            
            <div class="card3">
              <div class="card3-border-top">
              </div>
              <div class="img">
                <img src={gzm} alt="" width={150} />
              </div>
              <span> Gizem Topsakal</span>
        
              
            </div>
            <div class="card3">
              <div class="card3-border-top">
              </div>
              <div class="img">
                <img src={gzm} alt="" width={150} />
              </div>
              <span> Ebrar Şevval Güler</span>
        
              
            </div>
            <div class="card3">
              <div class="card3-border-top">
              </div>
              <div class="img">
                <img src={gzm} alt="" width={150} />
              </div>
              <span> Beyzagül Demir</span>
        
              
            </div>
            </div> 
          </div>
        </div>
    
    </div>
  );
    
};

export default AboutUs;