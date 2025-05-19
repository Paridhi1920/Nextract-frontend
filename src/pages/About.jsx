import React, { useState } from "react";

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: darkMode ? "#0f0f1a" : "#f5f5f5",
      color: darkMode ? "#ffffff" : "#000000",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
      fontSize: "2rem",
      textAlign: "center",
      color: "#00bfff",
      marginBottom: "30px",
    },
    section: {
      maxWidth: "800px",
      margin: "auto",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    toggle: {
      position: "absolute",
      top: "20px",
      right: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <label style={styles.toggle}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        🌙
      </label>
      <h1 style={styles.heading}>About Nextract</h1>
      <div style={styles.section}>
        <p>
          <strong>Nextract</strong> is an AI-powered summarization platform that allows you to
          upload PDF, DOCX, and PPTX files and receive a clean, context-aware summary in your
          preferred length—Short, Medium, or Detailed.
        </p>
        <p>
          This platform leverages modern NLP techniques including Transformer models (via
          HuggingFace), combined with a sleek React.js frontend and Flask-based backend.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={{ color: "#00bfff" }}>Features</h2>
        <ul>
          <li>✅ File upload support for .pdf, .docx, .pptx</li>
          <li>✅ Abstractive summarization</li>
          <li>✅ Download as PDF or TXT</li>
          <li>✅ Light/Dark theme toggle</li>
          <li>✅ Firebase Authentication</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
