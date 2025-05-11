import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err.message);
      alert("Signup failed. " + err.message);
    }
  };

  const currentStyles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: darkMode ? "#0f0f1a" : "#f5f5f5",
      color: darkMode ? "#ffffff" : "#000000",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: darkMode ? "#1e1e2f" : "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 0 15px rgba(0, 191, 255, 0.3)",
      width: "100%",
      maxWidth: "400px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "none",
      backgroundColor: darkMode ? "#2d2d3a" : "#eaeaea",
      color: darkMode ? "#ffffff" : "#000000",
    },
    button: {
      backgroundColor: "#00bfff",
      color: "#fff",
      border: "none",
      padding: "12px",
      marginTop: "10px",
      width: "100%",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "16px",
    },
    toggle: {
      position: "absolute",
      top: "20px",
      right: "20px",
      cursor: "pointer",
    },
    heading: {
      marginBottom: "10px",
      fontSize: "2rem",
    },
    tagline: {
      fontStyle: "italic",
      fontSize: "1rem",
      color: darkMode ? "#cccccc" : "#666666",
      marginBottom: "30px",
    },
  };

  return (
    <div style={currentStyles.container}>
      <div style={currentStyles.toggle}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span style={{ marginLeft: "8px" }}>
            {darkMode ? "🌙" : "☀️"}
          </span>
        </label>
      </div>
      <h1 style={currentStyles.heading}>
        <span style={{ color: "#00bfff" }}>Nextract</span>
      </h1>
      <p style={currentStyles.tagline}>
        "Extract the Future, Summarize the Now."
      </p>

      <div style={currentStyles.card}>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter Email"
            style={currentStyles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            style={currentStyles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={currentStyles.button}>
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#00bfff", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
