import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Wrap Routes with BrowserRouter */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
