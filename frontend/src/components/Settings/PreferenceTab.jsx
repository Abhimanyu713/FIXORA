import React from "react";

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    border: "1px solid #e5e7eb",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#374151",
    marginBottom: "0.5rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    outline: "none",
    fontSize: "0.875rem",
    lineHeight: 1.25,
  },
  select: {
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    outline: "none",
    fontSize: "0.875rem",
    lineHeight: 1.25,
    backgroundColor: "#ffffff",
  },
};

const PreferencesTab = ({ preferences, setPreferences }) => {
  const handleChange = (field, value) => {
    setPreferences((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={styles.card}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>
          App Preferences
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Theme */}
          <div>
            <label style={styles.label}>Theme</label>
            <select
              value={preferences.theme}
              onChange={(e) => handleChange("theme", e.target.value)}
              style={styles.select}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label style={styles.label}>Language</label>
            <select
              value={preferences.language}
              onChange={(e) => handleChange("language", e.target.value)}
              style={styles.select}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
            </select>
          </div>

          {/* Timezone */}
          <div>
            <label style={styles.label}>Timezone</label>
            <select
              value={preferences.timezone}
              onChange={(e) => handleChange("timezone", e.target.value)}
              style={styles.select}
            >
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
              <option value="UTC">UTC</option>
            </select>
          </div>

          {/* Date Format */}
          <div>
            <label style={styles.label}>Date Format</label>
            <select
              value={preferences.dateFormat}
              onChange={(e) => handleChange("dateFormat", e.target.value)}
              style={styles.select}
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          {/* Working Hours */}
          <div>
            <label style={styles.label}>Working Hours</label>
            <input
              type="text"
              value={preferences.workingHours}
              onChange={(e) => handleChange("workingHours", e.target.value)}
              placeholder="e.g., 9:00 AM - 5:00 PM"
              style={styles.input}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferencesTab;
