import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { Certifications } from "./pages/Certifications";
import { Contact } from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
