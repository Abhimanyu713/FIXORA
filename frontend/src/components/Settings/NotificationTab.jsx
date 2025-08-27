import React from "react";

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    border: "1px solid #e5e7eb",
  },
  heading: {
    fontSize: "1.125rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  toggleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.75rem 0",
    borderBottom: "1px solid #f3f4f6",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: 500,
    marginBottom: "0.25rem",
  },
  description: {
    fontSize: "0.875rem",
    color: "#4b5563",
  },
  toggleWrapper: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
  },
  toggleTrack: (enabled) => ({
    width: "2.75rem",
    height: "1.5rem",
    borderRadius: "9999px",
    backgroundColor: enabled ? "#2563eb" : "#e5e7eb",
    transition: "background-color 0.2s",
    position: "relative",
  }),
  toggleThumb: (enabled) => ({
    width: "1rem",
    height: "1rem",
    borderRadius: "9999px",
    backgroundColor: "#ffffff",
    transform: enabled ? "translateX(1.5rem)" : "translateX(0.25rem)",
    transition: "transform 0.2s",
    position: "absolute",
    top: "0.125rem",
  }),
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
};

const NotificationsTab = ({ notifications, setNotifications }) => {
  const handleChange = (field, value) => {
    setNotifications((prev) => ({ ...prev, [field]: value }));
  };

  const renderToggle = (label, desc, field) => (
    <div style={styles.toggleRow}>
      <div style={styles.labelContainer}>
        <span style={styles.label}>{label}</span>
        <span style={styles.description}>{desc}</span>
      </div>
      <label style={styles.toggleWrapper}>
        <input
          type="checkbox"
          checked={notifications[field]}
          onChange={(e) => handleChange(field, e.target.checked)}
          style={styles.srOnly}
        />
        <div style={styles.toggleTrack(notifications[field])}>
          <div style={styles.toggleThumb(notifications[field])}></div>
        </div>
      </label>
    </div>
  );

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={styles.card}>
        <h3 style={styles.heading}>Notification Preferences</h3>
        {renderToggle(
          "Email Notifications",
          "Receive notifications via email",
          "emailNotifications"
        )}
        {renderToggle(
          "Push Notifications",
          "Receive push notifications in your browser",
          "pushNotifications"
        )}
        {renderToggle(
          "SMS Notifications",
          "Receive important notifications via SMS",
          "smsNotifications"
        )}
        {renderToggle(
          "Task Reminders",
          "Get reminders for upcoming tasks",
          "taskReminders"
        )}
        {renderToggle(
          "Project Updates",
          "Stay updated on project progress",
          "projectUpdates"
        )}
        {renderToggle(
          "Team Mentions",
          "Get notified when mentioned by team members",
          "teamMentions"
        )}
        {renderToggle(
          "Marketing Emails",
          "Receive product updates and tips",
          "marketingEmails"
        )}
      </div>
    </div>
  );
};

export default NotificationsTab;
