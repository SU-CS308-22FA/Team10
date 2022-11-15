import React from "react";
import styles from "./card-style.css"
import { Component } from 'react';
import { Link } from "react-router-dom";
import img1 from "../assets/58088-1572949088.webp"
import img2 from "../assets/318077-1660050345.webp"
import img3 from "../assets/68863-1591599151.webp"

const Cards = () => {
    const cardInfo = [
        
          {
            id:1,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/AUT_vs._TUR_2016-03-29_%28303%29.jpg/1200px-AUT_vs._TUR_2016-03-29_%28303%29.jpg",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Harun Tekin",
            club: "Fenerbahçe",
            age: 29,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 2.25,
            nationality: "Turkey",
            new_foreign: 0,
            club_id: 1,
            new_signing: 1,
            link:"/1"
          },
          {
            image: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1590000/fenerbahce-berke-ozer-1591043_2.jpg",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Berke Özer",
            club: "Fenerbahçe",
            age: 18,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 1
          },
          {
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS4D95DoIkXV0X2IlVupNhOhkhsLz8n5BHaOuEpWJzwxRLRHqUuFVqK1T4e14rbc5aK",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Volkan Demirel",
            club: "Fenerbahçe",
            age: 37,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 0.2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            image: "https://pbs.twimg.com/media/DVdXlfaW4AAt-E3.jpg",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Carlos Kameni",
            club: "Fenerbahçe",
            age: 35,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 0.15,
            nationality: "Cameroon",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            image: "https://media.fenerbahce.org/FB/media/FB/pic_lib/erten_57239_4307848.jpg",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Erten Ersu",
            club: "Fenerbahçe",
            age: 24,
            position: "GK",
            position_cat: "Defender",
            market_value: 0.08,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            image: "https://s.hs-data.com/bilder/spieler/gross/123385.jpg?fallback=png",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Serdar Aziz",
            club: "Fenerbahçe",
            age: 28,
            position: "DM",
            position_cat: "Defender",
            market_value: 3.5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            image: "https://i.hbrcdn.com/haber/2020/05/03/eski-fenerbahceli-roman-neustadter-sari-13185402_2451_amp.jpg",
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Roman Neustädter",
            club: "Fenerbahçe",
            age: 31,
            position: "DM",
            position_cat: "Defender",
            market_value: 2.5,
            nationality: "Russia",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Martin Skrtel",
            club: "Fenerbahçe",
            age: 34,
            position: "DM",
            position_cat: "Defender",
            market_value: 2,
            nationality: "Slovakia",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Sadik Ciftpinar",
            club: "Fenerbahçe",
            age: 26,
            position: "DM",
            position_cat: "Defender",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Hasan Ali Kaldirim",
            club: "Fenerbahçe",
            age: 29,
            position: "LB",
            position_cat: "Defender",
            market_value: 3,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Ismail Köybasi",
            club: "Fenerbahçe",
            age: 29,
            position: "LB",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Mauricio Isla",
            club: "Fenerbahçe",
            age: 30,
            position: "RB",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Chile",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Sener Özbayrakli",
            club: "Fenerbahçe",
            age: 29,
            position: "RB",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Jailson",
            club: "Fenerbahçe",
            age: 23,
            position: "CM",
            position_cat: "Midfielder",
            market_value: 4,
            nationality: "Brazil",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Mehmet Topal",
            club: "Fenerbahçe",
            age: 33,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Oguz Kagan Güctekin",
            club: "Fenerbahçe",
            age: 20,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Eljif Elmas",
            club: "Fenerbahçe",
            age: 19,
            position: "CM",
            position_cat: "Midfielder",
            market_value: 8,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Tolgay Arslan",
            club: "Fenerbahçe",
            age: 28,
            position: "CM",
            position_cat: "Midfielder",
            market_value: 4,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Tolga Cigerci",
            club: "Fenerbahçe",
            age: 27,
            position: "CM",
            position_cat: "Midfielder",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Nabil Dirar",
            club: "Fenerbahçe",
            age: 33,
            position: "RB",
            position_cat: "Midfielder",
            market_value: 1,
            nationality: "Morocco",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Miha Zajc",
            club: "Fenerbahçe",
            age: 24,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 6,
            nationality: "Slovenia",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Yassine Benzia",
            club: "Fenerbahçe",
            age: 24,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 3,
            nationality: "Algeria",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Alper Potuk",
            club: "Fenerbahçe",
            age: 28,
            position: "MC",
            position_cat: "Goal Keeper",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Mehmet Ekici",
            club: "Fenerbahçe",
            age: 29,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Ferdi Kadioglu",
            club: "Fenerbahçe",
            age: 19,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "André Ayew",
            club: "Fenerbahçe",
            age: 29,
            position: "RW",
            position_cat: "Attacker",
            market_value: 9,
            nationality: "Ghana",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Mathieu Valbuena",
            club: "Fenerbahçe",
            age: 34,
            position: "LW",
            position_cat: "Attacker",
            market_value: 2,
            nationality: "France",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Victor Moses",
            club: "Fenerbahçe",
            age: 28,
            position: "LW",
            position_cat: "Attacker",
            market_value: 14,
            nationality: "Nigeria",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Islam Slimani",
            club: "Fenerbahçe",
            age: 30,
            position: "CF",
            position_cat: "Attacker",
            market_value: 10,
            nationality: "Algeria",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Michael Frey",
            club: "Fenerbahçe",
            age: 24,
            position: "CF",
            position_cat: "Attacker",
            market_value: 3,
            nationality: "Switzerland",
            "new_foreign": 1,
            club_id: 1,
            new_signing: 1
          },
          {
            icon: <img src="https://seeklogo.com/images/F/fenerbahce-sk-logo-8321034CE1-seeklogo.com.png" width={23} alt="..."></img>,
            name: "Roberto Soldado",
            club: "Fenerbahçe",
            age: 33,
            position: "CF",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Spain",
            "new_foreign": 0,
            club_id: 1,
            new_signing: 0
          },
          {
            icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Fernando Muslera",
            club: "Galatasaray",
            age: 32,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 5,
            nationality: "Uruguay",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Ismail Cipe",
            club: "Galatasaray",
            age: 24,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 0.5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Batuhan Sen",
            club: "Galatasaray",
            age: 20,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Christian Luyindama",
            club: "Galatasaray",
            age: 25,
            position: "DM",
            position_cat: "Defender",
            market_value: 6,
            nationality: "Kongo DC",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Marcão",
            club: "Galatasaray",
            age: 22,
            position: "DM",
            position_cat: "Defender",
            market_value: 3,
            nationality: "Brazil",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Mariano",
            club: "Galatasaray",
            age: 32,
            position: "RB",
            position_cat: "Defender",
            market_value: 2,
            nationality: "Brazil",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Yuto Nagatomo",
            club: "Galatasaray",
            age: 32,
            position: "LB",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Japan",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Martin Linnes",
            club: "Galatasaray",
            age: 27,
            position: "RB",
            position_cat: "Defender",
            market_value: 2,
            nationality: "Norway",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Semih Kaya",
            club: "Galatasaray",
            age: 28,
            position: "DM",
            position_cat: "Defender",
            market_value: 3,
            nationality: "Turkey",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Ömer Bayram",
            club: "Galatasaray",
            age: 27,
            position: "LB",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Ahmet Calik",
            club: "Galatasaray",
            age: 25,
            position: "DM",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Emre Tasdemir",
            club: "Galatasaray",
            age: 23,
            position: "LB",
            position_cat: "Defender",
            market_value: 3,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Badou Ndiaye",
            club: "Galatasaray",
            age: 28,
            position: "MC",
            position_cat: "Midfielder",
            market_value: 2,
            nationality: "Senegal",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
            
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Emre Akbaba",
            club: "Galatasaray",
            age: 26,
            position: "MC",
            position_cat: "Midfielder",
            market_value: 5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Fernando",
            club: "Galatasaray",
            age: 31,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 7,
            nationality: "Brazil",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Younès Belhanda",
            club: "Galatasaray",
            age: 29,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 12,
            nationality: "Morocco",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Ryan Donk",
            club: "Galatasaray",
            age: 33,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 5,
            nationality: "Holland",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Selcuk Inan",
            club: "Galatasaray",
            age: 34,
            position: "MC",
            position_cat: "Midfielder",
            market_value: 6,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Celil Yüksel",
            club: "Galatasaray",
            age: 21,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Atalay Babacan",
            club: "Galatasaray",
            age: 18,
            position: "AMC",
            position_cat: "Midfielder",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Konstantinos Mitroglou",
            club: "Galatasaray",
            age: 31,
            position: "CF",
            position_cat: "Attacker",
            market_value: 10,
            nationality: "Greece",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Henry Onyekuru",
            club: "Galatasaray",
            age: 21,
            position: "LW",
            position_cat: "Attacker",
            market_value: 10,
            nationality: "Nigeria",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Mbaye Diagne",
            club: "Galatasaray",
            age: 27,
            position: "CF",
            position_cat: "Attacker",
            market_value: 8,
            nationality: "Senegal",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Sofiane Feghouli",
            club: "Galatasaray",
            age: 29,
            position: "RW",
            position_cat: "Attacker",
            market_value: 5,
            nationality: "Algeria",
            "new_foreign": 1,
            club_id: 2,
            new_signing: 1
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Sinan Gümüs",
            club: "Galatasaray",
            age: 25,
            position: "CF",
            position_cat: "Attacker",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Yunus Akgün",
            club: "Galatasaray",
            age: 18,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Eren Derdiyok",
            club: "Galatasaray",
            age: 30,
            position: "CF",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 0
          },
          {
             icon: <img src="https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/Y023-U60348_209_1_medium.jpg"  width={23} alt="..."></img>,
            name: "Mugdat Celik",
            club: "Galatasaray",
            age: 29,
            position: "CF",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 2,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Loris Karius",
            club: "Beşiktaş",
            age: 25,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 7,
            nationality: "German",
            "new_foreign": 1,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Utku Yuvakuran",
            club: "Beşiktaş",
            age: 21,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 0.3,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Tolga Zengin",
            club: "Beşiktaş",
            age: 35,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 0.2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Ersin Destanoglu",
            club: "Beşiktaş",
            age: 18,
            position: "GK",
            position_cat: "Goal Keeper",
            market_value: 0.05,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Domagoj Vida",
            club: "Beşiktaş",
            age: 29,
            position: "DM",
            position_cat: "Defender",
            market_value: 10,
            nationality: "Croatian",
            "new_foreign": 1,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Nicolas Isimat-Mirin",
            club: "Beşiktaş",
            age: 27,
            position: "DM",
            position_cat: "Defender",
            market_value: 1.75,
            nationality: "France",
            "new_foreign": 1,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Enzo Roco",
            club: "Beşiktaş",
            age: 26,
            position: "DM",
            position_cat: "Defender",
            market_value: 1.7,
            nationality: "Chile",
            "new_foreign": 1,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Necip Uysal",
            club: "Beşiktaş",
            age: 28,
            position: "DM",
            position_cat: "Defender",
            market_value: 1.5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Caner Erkin",
            club: "Beşiktaş",
            age: 30,
            position: "LB",
            position_cat: "Defender",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Adriano",
            club: "Beşiktaş",
            age: 34,
            position: "LB",
            position_cat: "Defender",
            market_value: 1,
            nationality: "Brazil",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Gökhan Gönül",
            club: "Beşiktaş",
            age: 34,
            position: "RB",
            position_cat: "Defender",
            market_value: 4.5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Gary Medel",
            club: "Beşiktaş",
            age: 31,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 3.5,
            nationality: "Chile",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Dorukhan Toköz",
            club: "Beşiktaş",
            age: 22,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 0.5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Atiba Hutchinson",
            club: "Beşiktaş",
            age: 36,
            position: "DMC",
            position_cat: "Midfielder",
            market_value: 5,
            nationality: "Canada",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Oguzhan Özyakup",
            club: "Beşiktaş",
            age: 26,
            position: "MC",
            position_cat: "Midfielder",
            market_value: 13,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Adem Ljajic",
            club: "Beşiktaş",
            age: 27,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 8,
            nationality: "Serbia",
            "new_foreign": 1,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Shinji Kagawa",
            club: "Beşiktaş",
            age: 30,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 1,
            nationality: "Japan",
            "new_foreign": 1,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Güven Yalcin",
            club: "Beşiktaş",
            age: 20,
            position: "AMC",
            position_cat: "Attacker",
            market_value: 3.5,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Jeremain Lens",
            club: "Beşiktaş",
            age: 31,
            position: "LW",
            position_cat: "Attacker",
            market_value: 1.5,
            nationality: "Holland",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Ricardo Quaresma",
            club: "Beşiktaş",
            age: 35,
            position: "RW",
            position_cat: "Attacker",
            market_value: 2,
            nationality: "Portugal",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Burak Yilmaz",
            club: "Beşiktaş",
            age: 33,
            position: "CF",
            position_cat: "Attacker",
            market_value: 2,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 1
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Cyle Larin",
            club: "Beşiktaş",
            age: 23,
            position: "CF",
            position_cat: "Attacker",
            market_value: 2,
            nationality: "Canada",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          },
          {
            icon: <img src = "https://guneybayrak.net/wp-content/uploads/2021/05/besiktas-takim-bayragi-duz-2-scaled.jpg"  width={23} alt="..."></img>,
            name: "Mustafa Pektemek",
            club: "Beşiktaş",
            age: 30,
            position: "CF",
            position_cat: "Attacker",
            market_value: 0.8,
            nationality: "Turkey",
            "new_foreign": 0,
            club_id: 3,
            new_signing: 0
          }
        
       
      ];
      const renderCard = (card, index) => {
        return(
              
                <div className="col" key={index} >
                  
                    <div className="card h-100 w-100 text-center" >
                    <div className="overflow">
                      <img src={card.image} className="card-img-top" alt="..." object-fit = "fill"/>
                    </div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{card.name}</h5>
                        <p className="card-text">
                          Team: {card.club} {card.icon} <br/>
                          Age: {card.age}<br/>
                          Position: {card.position}<br/>
                          Position Category: {card.position_cat}<br/>
                          Merket Vaue: {card.market_value}M <br/>
                          Nationality: {card.nationality}
                          </p>
                        <Link to={card.link}>
                            <button type="button" className="_btn">
                               Go to profile
                            </button>
                         </Link>
                    </div>
                    </div>
                </div>
           

        );
        
    };
    return <div className="row row-cols-4 row-cols-md-6 g-4">{cardInfo.map(renderCard)}</div>;
}

export default Cards;


/*
{
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"/"
        },
        {
          image:img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"#"
        },
        {
          image:img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"#"
        },
        {
          image:img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"#"
        },
        {
          image:
            img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
        {
          image: img1,
          title: "Project 1",
          text: "Static Website",
          link:"/"
        },
        {
          image:
            img2,
          title: "Project 2",
          text: "Newsletter Sign Up",
          link:"/"
        },
        {
          image:
            img3,
          title: "Project 3",
          text: "Reactdskglkjklgjlkdfjgldkfgkldjfklgjdfklgjfklsdfnklsjgkjsdflkgjskdljfgklsjflkdsjkfjslkfjslkjflkdjsklfjdslk App",
          link:"#"
        },
*/