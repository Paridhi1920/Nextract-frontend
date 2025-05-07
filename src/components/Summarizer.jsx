import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Summarizer = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState("medium");
  const [darkMode, setDarkMode] = useState(true);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSummary("");
    setError("");
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    setLoading(true);
    setSummary("");
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("length", length);

    try {
      const response = await fetch("https://nextract-backend.onrender.com/uploads", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Try again!");
    }

    setLoading(false);
  };

  const downloadTxt = () => {
    const element = document.createElement("a");
    const fileBlob = new Blob([summary], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = "summary.txt";
    document.body.appendChild(element);
    element.click();
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(summary, 180);
    doc.text(lines, 10, 20);
    doc.save("summary.pdf");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      window.location.reload();
    } catch (err) {
      alert("Logout failed");
    }
  };

  const currentStyles = {
    ...styles,
    card: {
      ...styles.card,
      backgroundColor: darkMode ? "#1e1e2f" : "#ffffff",
      color: darkMode ? "#ffffff" : "#000000",
    },
    input: {
      ...styles.input,
      backgroundColor: darkMode ? "#2d2d3a" : "#eaeaea",
      color: darkMode ? "#ffffff" : "#000000",
    },
    select: {
      ...styles.select,
      backgroundColor: darkMode ? "#2d2d3a" : "#eaeaea",
      color: darkMode ? "#ffffff" : "#000000",
    },
    summaryBox: {
      ...styles.summaryBox,
      backgroundColor: darkMode ? "#2d2d3a" : "#eaeaea",
      color: darkMode ? "#ffffff" : "#000000",
    },
  };

  return (
    <div
      style={{
        ...currentStyles.page,
        backgroundColor: darkMode ? "#0f0f1a" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div style={styles.headingWrapper}>
        <div>
          <h1 style={styles.heading}>
            <span style={{ color: "#00bfff" }}>Nextract</span>
          </h1>
          <p style={styles.tagline}>
            "Extract the Future, Summarize the Now."
          </p>
        </div>

        <div>
          <label style={styles.toggleSwitch}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={styles.toggleSwitchInput}
            />
            <span style={styles.slider}></span>
          </label>
          <button onClick={handleLogout} style={{ ...styles.button, marginTop: "10px", backgroundColor: "#ff5c5c" }}>
            Logout
          </button>
        </div>
      </div>

      <div style={currentStyles.card}>
        <input
          type="file"
          accept=".pdf,.docx,.pptx"
          onChange={handleFileChange}
          style={currentStyles.input}
        />
        {file && <p style={{ marginTop: "5px", fontSize: "0.9rem" }}>📄 {file.name}</p>}

        <select
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={currentStyles.select}
        >
          <option value="short">Short Summary</option>
          <option value="medium">Medium Summary</option>
          <option value="detailed">Detailed Summary</option>
        </select>

        <button onClick={handleSubmit} disabled={loading} style={styles.button}>
          {loading ? <span style={styles.spinner}></span> : "Upload & Summarize"}
        </button>

        {error && (
          <p style={{ color: "#ff5c5c", marginTop: "15px", textAlign: "center" }}>{error}</p>
        )}

        {summary && (
          <div style={currentStyles.summaryBox}>
            <h3 style={{ marginBottom: "10px", color: "#00bfff" }}>Summary:</h3>
            <p>{summary}</p>
            <button onClick={downloadTxt} style={{ ...styles.button, marginTop: "20px" }}>
              Download as .TXT
            </button>
            <button
              onClick={downloadPdf}
              style={{
                ...styles.button,
                marginTop: "10px",
                backgroundColor: "#ff5c5c",
              }}
            >
              Download as .PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  headingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "800px",
    margin: "auto",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "10px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "5px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  tagline: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#cccccc",
    marginTop: "-10px",
  },
  card: {
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0 0 15px rgba(0, 191, 255, 0.3)",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    marginBottom: "20px",
    width: "100%",
  },
  select: {
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    width: "100%",
    border: "none",
  },
  button: {
    backgroundColor: "#00bfff",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    width: "100%",
    fontSize: "16px",
    cursor: "pointer",
    position: "relative",
  },
  summaryBox: {
    padding: "20px",
    borderRadius: "10px",
    marginTop: "30px",
    textAlign: "left",
    lineHeight: "1.6",
  },
  spinner: {
    width: "20px",
    height: "20px",
    border: "3px solid #fff",
    borderTop: "3px solid #00bfff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    display: "inline-block",
  },
  toggleSwitch: {
    position: "relative",
    display: "inline-block",
    width: "50px",
    height: "24px",
    marginRight: "10px",
  },
  toggleSwitchInput: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
    transition: ".4s",
    borderRadius: "24px",
  },
};

export default Summarizer;
