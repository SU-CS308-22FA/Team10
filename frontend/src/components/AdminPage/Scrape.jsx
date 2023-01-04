
import React from "react";
import HeaderForAdmin from "./HeaderForAdmin";
import { Link, Navigate , useNavigate} from "react-router-dom"; 
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

/*
const puppeteer = require('puppeteer');
async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

}
*/

const Scrape = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [weekNum, setWeekNum] = useState();

    
  /*ß
  const handlePlayersScrape= async(e) =>{
    e.preventDefault();
   
    try {
      
      const url = "https://weeklysoccer.onrender.com/api/scraper" ;
      
      const { data: res } = await axios.get("https://tr.wikipedia.org/wiki/2022-23_S%C3%BCper_Lig");
      console.log("ebol");
      console.log(data);
      
      
      
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    
  }
  function handleRefereesScrape() {
    scrapeProduct("https://tr.wikipedia.org/wiki/2022-23_S%C3%BCper_Lig").then(function() {
      console.log("scrape tamam");
    }
    );
  }
  */
  const handlePlayerScrape =  async() => {
    console.log("Player Data");
    await axios
      .post(`https://weeklysoccer.onrender.com/api/player/updatePlayers`)
      .then((res) => (res.data))
};
  const handleMatchesScrape =  async(e) => {
    
    console.log("The week num is ", e);
    await axios
      .post(`https://weeklysoccer.onrender.com/api/match/updateMatch`, {e})
      .then((res) => (res.data))
  
    
  };
  
    return (
      <div><HeaderForAdmin/>
      
      <div className={styles.login_container}>
      <div className={styles.login_form_container}>
      
        <div className={styles.left}>
       
          <form className={styles.form_container} >
          
          <h3> Delete all comments and rates of the players</h3>
          <button type="submit" className={styles.green_btn} onClick={ ()=> handlePlayerScrape()}> 
             Delete rate & comments
          </button>
          <h3>Choose which week we are currently in</h3>


          <input
              type="number"
              value={weekNum}
              onChange={(e) => setWeekNum(e.target.value)}
              className={styles.input}/>
         
         <button type="button" className={styles.green_btn} onClick={ ()=> handleMatchesScrape(weekNum)}  >
          Get that week's match information
          </button>
          
          
          </form>
          
        </div>
        
      </div>
    </div>
		</div>
    );
}


export default Scrape;