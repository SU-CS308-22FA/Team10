import { Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import EditableUserProfile from "./components/UserPage/EditableUserProfile";
import DeleteProfile from "./components/UserPage/DeleteProfile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserPage from "./components/UserPage/UserPage";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import MatchesPage from "./components/MatchesPage/MatchPage";
import PlayerProfile from "./components/PlayerProfilePage/PlayerProfileComponent";

import LandingWithoutLogin from "./components/LandingWithoutLogin/LandingWithoutLogin";

import RefereesPage from "./components/RefereesPage/RefereesPage";
import RefereeProfile from "./components/RefereeProfilePage/RefereeProfileComponent";
import axios from "axios";


function randomName() {
  return "Anonymous ";
}
function App() {
  const user = sessionStorage.getItem("user");
  const [editMode, setEditMode] = useState(false);

  const [firstName, setName] = useState(randomName());
  const [email, setEmail] = useState(randomName());
  const [team, setTeam] = useState(randomName());
  const stored = { firstName, email, team };

  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
      setName(result.name);
    }
    setEditMode(false);
  }


  return (
    <Routes>
      {user && <Route path="/main" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element = {<LandingWithoutLogin/>}/>
      <Route path="/aboutUs" exact element={<AboutUs />} />
      <Route path="/player" exact element={<PlayersPage />} />
      <Route path="/player/:id" exact element={<PlayerProfile  />} />
      <Route path="/referee/:id" exact element={<RefereeProfile  />} />

      

      <Route path="/referee" exact element={<RefereesPage />} />
      

      <Route path="/profile" exact element={<UserPage />} />
      <Route path="/profile/update" exact element={<EditableUserProfile />} />
      <Route path="/profile/delete" exact element={<DeleteProfile />}/>
      <Route path="/matches" exact element={<MatchesPage/>}/>
    </Routes>
  );
}

export default App;
