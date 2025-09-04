import React from "react";
import { Camera, Mail, Phone, MapPin } from "lucide-react";

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
  inputFocus: {
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    backgroundColor: "#ffffff",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#f9fafb",
  },
  textarea: {
    width: "100%",
    padding: "0.5rem 0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: 1.25,
    resize: "none",
  },
};

const ProfileTab = ({ profile, setProfile }) => {
  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={styles.card}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
          Profile Information
        </h3>

        {/* Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={styles.avatar}>
            {profile.firstName[0]}
            {profile.lastName[0]}
          </div>
          <button style={styles.button}>
            <Camera size={16} />
            <span>Change Photo</span>
          </button>
        </div>

        {/* Name */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              style={styles.input}
            />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginTop: "1rem" }}>
          <label style={styles.label}>
            <Mail size={16} style={{ marginRight: "0.25rem" }} />
            Email
          </label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Phone + Location */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
          <div>
            <label style={styles.label}>
              <Phone size={16} style={{ marginRight: "0.25rem" }} />
              Phone
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              style={styles.input}
            />
          </div>
          <div>
            <label style={styles.label}>
              <MapPin size={16} style={{ marginRight: "0.25rem" }} />
              Location
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => handleChange("location", e.target.value)}
              style={styles.input}
            />
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginTop: "1rem" }}>
          <label style={styles.label}>Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            rows={3}
            style={styles.textarea}
            placeholder="Tell us about yourself..."
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
