import PlayersPageAgeSorted from "./components/PlayersPage/sorted-age/PlayersPage";
import PlayersPageRatingSorted from "./components/PlayersPage/sorted-rating/PlayersPage";
import PlayersPageMarketValueSorted from "./components/PlayersPage/sorted-marketValue/PlayersPage";
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
import PlayerRate from "./components/PlayerRate/PlayerRate";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import MatchesPage from "./components/MatchesPage/MatchPage";
import PlayerProfile from "./components/PlayerProfilePage/PlayerProfileComponent";
import AdminLogin from "./components/Login/AdminLogin";
import AdminPage from "./components/AdminPage/AdminPage";
import LandingWithoutLogin from "./components/LandingWithoutLogin/LandingWithoutLogin";
import Verification from "./components/UserPage/Verification";
import VerificationRequests from "./components/AdminPage/VerificationRequests";
import RefereesPage from "./components/RefereesPage/RefereesPage";
import RefereeProfile from "./components/RefereeProfilePage/RefereeProfileComponent";
import MatchProfile from "./components/MatchDetailPage/MatchProfileComponent";
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
      <Route path="/admin" exact element={<AdminLogin />} />
      <Route path="/admin-page" exact element={<AdminPage />} />
      <Route path="/requests" exact element={<VerificationRequests />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/aboutUs" exact element={<AboutUs />} />
      <Route path="/player" exact element={<PlayersPage />} />
      <Route path="/player/:id" exact element={<PlayerProfile />} />
      <Route path="/player/rate/:id" exact element={<PlayerRate />} />
      <Route path="/referee/:id" exact element={<RefereeProfile />} />

      <Route path="/match/:id" exact element={<MatchProfile />} />
      <Route
        path="/player/age-sorted"
        exact
        element={<PlayersPageAgeSorted />}
      />
      <Route
        path="/player/rating-sorted"
        exact
        element={<PlayersPageRatingSorted />}
      />
      <Route
        path="/player/market-value-sorted"
        exact
        element={<PlayersPageMarketValueSorted />}
      />

      <Route path="/referee" exact element={<RefereesPage />} />

      <Route path="/profile" exact element={<UserPage />} />
      <Route path="/profile/update" exact element={<EditableUserProfile />} />
      <Route path="/profile/delete" exact element={<DeleteProfile />} />

      <Route path="/profile/verify" exact element={<Verification />} />
      <Route path="/matches" exact element={<MatchesPage />} />

      <Route path="/match" exact element={<MatchesPage />} />
    </Routes>
  );
}

export default App;
