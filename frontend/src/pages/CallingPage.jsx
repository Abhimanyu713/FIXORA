import React, { useState } from "react";
import { Phone, ScreenShare, Mic, Video, VideoOff, MicOff } from "lucide-react";

const CallingPage = ({ caller = "Alice", callee = "Bob" }) => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#111827", // gray-900
      color: "white",
      padding: "24px",
    },
    header: {
      textAlign: "center",
      marginBottom: "24px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "18px",
    },
    videoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginBottom: "24px",
      width: "100%",
      maxWidth: "800px",
    },
    videoBox: {
      backgroundColor: "#1f2937", // gray-800
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "250px",
      fontSize: "16px",
      color: "#9ca3af", // gray-400
      fontStyle: "italic",
    },
    controls: {
      display: "flex",
      gap: "16px",
    },
    button: {
      borderRadius: "50%",
      width: "56px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      border: "none",
    },
    endCall: {
      backgroundColor: "#dc2626", // red-600
      color: "white",
    },
    secondary: {
      backgroundColor: "#374151", // gray-700
      color: "white",
    },
    outline: {
      backgroundColor: "transparent",
      border: "2px solid #9ca3af",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      {/* Caller & Callee Info */}
      <div style={styles.header}>
        <h2 style={styles.title}>Ongoing Call</h2>
        <p style={styles.subtitle}>
          {caller} 📞 {callee}
        </p>
      </div>

      {/* Video placeholders */}
      <div style={styles.videoGrid}>
        <div style={styles.videoBox}>
          {videoOn ? `${caller}'s Video` : "Camera Off"}
        </div>
        <div style={styles.videoBox}>{`${callee}'s Video`}</div>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <button style={{ ...styles.button, ...styles.endCall }}>
          <Phone />
        </button>

        <button
          onClick={() => setMicOn(!micOn)}
          style={{ ...styles.button, ...styles.secondary }}
        >
          {micOn ? <Mic /> : <MicOff />}
        </button>

        <button
          onClick={() => setVideoOn(!videoOn)}
          style={{ ...styles.button, ...styles.secondary }}
        >
          {videoOn ? <Video /> : <VideoOff />}
        </button>

        <button style={{ ...styles.button, ...styles.outline }}>
          <ScreenShare />
        </button>
      </div>
    </div>
  );
};

export default CallingPage;
