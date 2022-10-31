import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";


import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
	const user = localStorage.getItem("token");

	return (
		

			<Routes>
				{user && <Route path="/" exact element={<Main />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/" element={<Navigate replace to="/login" />} />
				

			</Routes>

		

			
	);
}

export default App;