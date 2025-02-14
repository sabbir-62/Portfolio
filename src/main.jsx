import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HICDetails from "./components/portfolio/projectDetails/HICDetails.jsx";
import MLLDetails from "./components/portfolio/projectDetails/MLLDetails.jsx";
import PermisgoDetails from "./components/portfolio/projectDetails/PermisgoDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/details/hic" element={<HICDetails />} />
        <Route exact path="/details/mll" element={<MLLDetails />} />
        <Route exact path="/details/permisgo" element={<PermisgoDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
