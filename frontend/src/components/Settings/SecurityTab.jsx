import React from "react";

const SecurityTab = () => {
  const styles = {
    card: {
      borderRadius: "0.5rem",
      padding: "1.5rem",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      border: "1px solid #e5e7eb",
      backgroundColor: "#fff",
      marginBottom: "1.5rem",
    },
    title: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#111827",
    },
    subTitle: (color) => ({
      fontWeight: "500",
      marginBottom: "0.5rem",
      color,
    }),
    text: (color) => ({
      fontSize: "0.875rem",
      marginBottom: "0.75rem",
      color,
    }),
    button: (bg, hover) => ({
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      backgroundColor: bg,
      color: "#fff",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.2s",
    }),
  };

  return (
    <div>
      <div style={styles.card}>
        <h3 style={styles.title}>Security Settings</h3>

        {/* Password */}
        <div style={{ ...styles.card, backgroundColor: "#FEF9C3", border: "1px solid #FDE68A" }}>
          <h4 style={styles.subTitle("#92400E")}>Password</h4>
          <p style={styles.text("#92400E")}>Last changed 3 months ago</p>
          <button style={styles.button("#D97706", "#B45309")}>Change Password</button>
        </div>

        {/* 2FA */}
        <div style={{ ...styles.card, backgroundColor: "#ECFDF5", border: "1px solid #A7F3D0" }}>
          <h4 style={styles.subTitle("#065F46")}>Two-Factor Authentication</h4>
          <p style={styles.text("#047857")}>Enabled via SMS</p>
          <button style={styles.button("#059669", "#047857")}>Manage 2FA</button>
        </div>

        {/* Active Sessions */}
        <div style={{ ...styles.card, backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB" }}>
          <h4 style={styles.subTitle("#1F2937")}>Active Sessions</h4>
          <p style={styles.text("#4B5563")}>Manage your active login sessions</p>
          <button style={styles.button("#374151", "#1F2937")}>View Sessions</button>
        </div>

        {/* Deactivation */}
        <div style={{ ...styles.card, backgroundColor: "#FEF2F2", border: "1px solid #FCA5A5" }}>
          <h4 style={styles.subTitle("#991B1B")}>Account Deactivation</h4>
          <p style={styles.text("#B91C1C")}>Temporarily disable your account</p>
          <button style={styles.button("#DC2626", "#991B1B")}>Deactivate Account</button>
        </div>
      </div>
    </div>
  );
};

export default SecurityTab;
