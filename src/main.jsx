import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import BlogProjectDetails from "./components/portfolio/projectDetails/BlogProjectDetails.jsx";
import AlumniProjectDetails from "./components/portfolio/projectDetails/AlumniProjectDetails.jsx";
import SocialMediaProjectDetails from "./components/portfolio/projectDetails/SocialMediaProjectDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/details/blog" element={<BlogProjectDetails />} />
        <Route exact path="/details/alumni" element={<AlumniProjectDetails />} />
        <Route exact path="/details/social-media" element={<SocialMediaProjectDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
