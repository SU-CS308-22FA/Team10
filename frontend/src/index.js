import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter basename="/">
      
        <Routes>
          <Route path = "/*" element = {<App/>}/>
        </Routes>
      
     </BrowserRouter>
   
  </React.StrictMode>
);
