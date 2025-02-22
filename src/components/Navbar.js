import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@carbon/react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <h1>Gulshan Sharma</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Button kind="tertiary" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </Button>
    </nav>
  );
};

export default Navbar;
