// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode }) => {
  const navStyle = {
    backgroundColor: darkMode ? "#1e1e2f" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: darkMode ? "1px solid #333" : "1px solid #ccc",
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: darkMode ? "#00bfff" : "#007acc",
    fontWeight: "bold",
  };

  return (
    <div style={navStyle}>
      <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
        <Link to="/" style={linkStyle}>
          Nextract
        </Link>
      </h2>
      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
