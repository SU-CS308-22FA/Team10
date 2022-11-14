import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./global";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Landing from "./components/LandingPage/Landing";
import { useState } from "react";
import PlayerProfileComponent from "./pages/PlayerProfile/PlayerProfileComponent.jsx";
import { ToastContainer } from "react-toastify";
import EditableUserProfile from "./components/UserPage/EditableUserProfile";
import DeleteProfile from "./components/UserPage/DeleteProfile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserPage from "./components/UserPage/UserPage";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

function randomName() {
  return "Anonymous ";
}
function App() {
  const user = sessionStorage.getItem("user");
  const [editMode, setEditMode] = useState(false);

  const [firstName, setName] = useState(randomName());
  const [email, setEmail] = useState(randomName());
  const stored = { firstName, email };

  function handleEditComplete(result) {
    console.log("handleEditComplete", result);
    if (result != null) {
      setName(result.name);
    }
    setEditMode(false);
  }

  return (
    <div>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/aboutUs" exact element={<AboutUs />} />
        <Route path="/players" exact element={<PlayersPage />} />
        <Route path="/profile" exact element={<UserPage />} />
        <Route path="/profile/update" exact element={<EditableUserProfile />} />
        <Route path="/profile/delete" exact element={<DeleteProfile />} />
        <Route
          path="/player-profile-page"
          exact
          element={<PlayerProfileComponent />}
        />
        <Route path="/" exact element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
