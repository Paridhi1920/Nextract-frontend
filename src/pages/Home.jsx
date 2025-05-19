import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: darkMode ? "#0f0f1a" : "#f5f5f5",
      color: darkMode ? "#ffffff" : "#000000",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#00bfff",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    navBtn: {
      background: "none",
      border: "none",
      color: darkMode ? "#ffffff" : "#000000",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    toggle: {
      cursor: "pointer",
    },
    hero: {
      textAlign: "center",
      marginTop: "80px",
    },
    tagline: {
      fontSize: "1.2rem",
      fontStyle: "italic",
      marginBottom: "20px",
      color: "#cccccc",
    },
    cta: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    button: {
      backgroundColor: "#00bfff",
      color: "#fff",
      padding: "12px 24px",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <div style={styles.heading}>Nextract</div>
        <div style={styles.navLinks}>
          <button style={styles.navBtn} onClick={() => navigate("/")}>
            Home
          </button>
          <button style={styles.navBtn} onClick={() => navigate("/about")}>
            About
          </button>
          <button style={styles.navBtn} onClick={() => navigate("/login")}>
            Login
          </button>
          <label style={styles.toggle}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            🌙
          </label>
        </div>
      </div>

      <div style={styles.hero}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Summarize Smarter with <span style={{ color: "#00bfff" }}>Nextract</span>
        </h1>
        <p style={styles.tagline}>
          Extract the Future, Summarize the Now.
        </p>
        <div style={styles.cta}>
          <button style={styles.button} onClick={() => navigate("/login")}>
            Get Started
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#ff5c5c" }}
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
