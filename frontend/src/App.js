import PlayersPageAgeSorted from "./components/PlayersPage/sorted-age/PlayersPage.jsx";
import PlayersPageRatingSorted from "./components/PlayersPage/sorted-rating/PlayersPage";
import PlayersPageMarketValueSorted from "./components/PlayersPage/sorted-marketValue/PlayersPage";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { useState } from "react";
import EditableUserProfile from "./components/UserPage/EditableUserProfile";
import DeleteProfile from "./components/UserPage/DeleteProfile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserPage from "./components/UserPage/UserPage";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import PlayerRate from "./components/PlayerRate/PlayerRate";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import MatchesPage from "./components/MatchesPage/MatchPage";
import MatchRate from "./components/MatchRate/MatchRate";
import PlayerProfile from "./components/PlayerProfilePage/PlayerProfileComponent";
import AdminLogin from "./components/Login/AdminLogin";
import AdminPage from "./components/AdminPage/AdminPage";
import LandingWithoutLogin from "./components/LandingWithoutLogin/LandingWithoutLogin";
import Verification from "./components/UserPage/Verification";
import VerificationRequests from "./components/AdminPage/VerificationRequests";
import RefereesPage from "./components/RefereesPage/RefereesPage";
import RefereeProfile from "./components/RefereeProfilePage/RefereeProfileComponent";
import RefereeRate from "./components/RefereeRate/RefereeRate";
import MatchProfile from "./components/MatchDetailPage/MatchProfileComponent";
import NotAuthError from "./requirements/NotAuthError";
import NotAuthError2 from "./requirements/NotAuthError2";
import Scrape from "./components/AdminPage/Scrape";
import PlayersPageWithoutLogin from "./components/PlayersPage/default/PlayersPageWithoutLogin.jsx";
import RefereesPageWithoutLogin from "./components/RefereesPage/RefereesPageWithoutLogin.jsx";
import MatchesPageWithoutLogin from "./components/MatchesPage/MatchesPageWithoutLogin.jsx";
import PlayerProfileWithoutLogin from "./components/PlayerProfilePage/PlayerProfileWithoutLogin.jsx";
import RefereeProfileWithoutLogin from "./components/RefereeProfilePage/RefereeProfileComponentWithoutLogin.jsx";
import MatchProfileWithoutLogin from "./components/MatchDetailPage/MatchProfileWithoutLogin.jsx";

function App() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Routes>
      { user ?
        <>
          { !user.role ?
            <>
              <Route path="/main" exact element={<Main />} />
              
              <Route path="/match" exact element={<MatchesPage/>}/>
              <Route path="/match/:id" exact element={<MatchProfile/>}/>
              <Route path="/main/match/:id" exact element={<MatchProfile/>}/>
              <Route path="/match/rate/:id" exact element={<MatchRate  />} />

              <Route path="/player" exact element={<PlayersPage/>}/>
              <Route path="/player/:id" exact element={<PlayerProfile/>}/>
              <Route path="/main/player/:id" exact element={<PlayerProfile/>}/>
              <Route path="/player/rate/:id" exact element={<PlayerRate/>}/>

              <Route path="/referee" exact element={<RefereesPage/>}/>
              <Route path="/referee/:id" exact element={<RefereeProfile/>}/>

              <Route path="/profile" exact element={<UserPage/>}/>
              <Route path="/profile/update" exact element={<EditableUserProfile/>}/>
              <Route path="/profile/delete" exact element={<DeleteProfile/>}/>
              <Route path="/profile/verify" exact element={<Verification/>}/>

              {/*<Route path="/" element ={<Navigate replace to="/main" />} />*/}
              <Route path="/aboutUs" exact element={<AboutUs />} />

              { user.verified ?
                <>
                  <Route path="/referee" exact element={<RefereesPage/>}/>
                  <Route path="/referee/:id" exact element={<RefereeProfile/>}/>
                  <Route path="/referee/rate/:id" exact element={<RefereeRate/>}/>
                </>
                :
                <>

                  <Route path="/referee/rate/:id" exact element={<NotAuthError/>}/>
                </>
              }
            </>
            :
            <>
              <Route path="/admin-page" exact element={<AdminPage/>}/>
              <Route path="/requests" exact element={<VerificationRequests/>}/>
              <Route path="/admin/scrape" exact element={<Scrape />} />
              <Route path="/player" exact element={<PlayersPage/>}/>
              <Route path="/player/:id" exact element={<PlayerProfile/>}/>
              <Route path="/player/rate/:id" exact element={<PlayerRate/>}/>
              <Route path="/match" exact element={<MatchesPage/>}/>
              <Route path="/match/:id" exact element={<MatchProfile/>}/>
              <Route path="/match/rate/:id" exact element={<MatchRate  />} />
              <Route path="/main" exact element={<Main />} />
              <Route path="/referee" exact element={<RefereesPage/>}/>
              <Route path="/referee/:id" exact element={<RefereeProfile/>}/>
              <Route path="/referee/rate/:id" exact element={<RefereeRate/>}/>
            </>
          }
        </>
        :
        <>
          <Route path="/admin" exact element={<AdminLogin />} />
          
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/player" exact element={<PlayersPageWithoutLogin/>}/>
          <Route path="/player/:id" exact element={<PlayerProfileWithoutLogin/>}/>
          <Route path="/referee" exact element={<RefereesPageWithoutLogin/>}/>
          <Route path="/referee/:id" exact element={<RefereeProfileWithoutLogin/>}/>

          <Route path="/player/rate/:id" exact element={<NotAuthError2 />} />
          <Route path="/referee/rate/:id" exact element={<NotAuthError2 />} />
          <Route path="/match/rate/:id" exact element={<NotAuthError2 />} />
          <Route path="/" exact element={<LandingWithoutLogin />} />
          
          <Route path="/match" exact element={<MatchesPageWithoutLogin/>}/>
          <Route path="/match/:id" exact element={<MatchProfileWithoutLogin/>}/>
          
        </>
      }
    </Routes>
  );
}

export default App;
 /*
      {user && <Route path="/main" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element = {<LandingWithoutLogin/>}/>
      <Route path="/aboutUs" exact element={<AboutUs />} />
      <Route path="/player" exact element={<PlayersPage />} />
      <Route path="/player/:id" exact element={<PlayerProfile />} />
      <Route path="/referee/:id" exact element={<RefereeProfile  />} />
      <Route path="/match/:id" exact element={<MatchProfile  />} />

      <Route path="/main" exact element={<Main />} />

 */