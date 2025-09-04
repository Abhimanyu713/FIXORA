import React, { useState } from "react";
import Navbar from "../CommonComponent/Navbar";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    type: "mentor", // or 'mentee'
    email: "john@example.com",
    phone: "+91 9876543210",
    college: "MIT",
    stream: "Computer Science",
    education: "Graduation",
    yearsOfExperience: 2, // Industry experience
    totalExperience: 4, // Total (Industry + Other)
    skills: ["JavaScript", "React", "Node.js"],
    coins: 120,
    bio: "Passionate learner, focused on improving frontend development skills.",
    profilePhoto: "https://i.pravatar.cc/150?img=32",
  });

  // ✅ Inline CSS styles
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#f9fafb",
      padding: "40px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      padding: "32px",
      width: "100%",
      maxWidth: "800px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      borderBottom: "1px solid #e5e7eb",
      paddingBottom: "20px",
    },
    profileImg: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #e5e7eb",
    },
    name: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#111827",
    },
    role: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#2563eb",
      backgroundColor: "#eff6ff",
      padding: "4px 10px",
      borderRadius: "12px",
      display: "inline-block",
      marginTop: "4px",
    },
    section: {
      marginTop: "24px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "12px",
    },
    subText: {
      fontSize: "14px",
      color: "#6b7280",
      marginBottom: "4px",
    },
    skillsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },
    skillBadge: {
      backgroundColor: "#f3f4f6",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
    },
    coinBadge: {
      backgroundColor: "#fef3c7",
      color: "#92400e",
      fontSize: "14px",
      fontWeight: "600",
      padding: "6px 12px",
      borderRadius: "12px",
      display: "inline-block",
      marginTop: "8px",
    },
    bio: {
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#374151",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginTop: "20px",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.card}>
          {/* Profile Header */}
          <div style={styles.header}>
            <img
              src={userData.profilePhoto}
              alt="Profile"
              style={styles.profileImg}
            />
            <div>
              <h2 style={styles.name}>{userData.name}</h2>
              <span style={styles.role}>
                {userData.type === "mentor" ? "Mentor" : "Mentee"}
              </span>
              <div style={styles.coinBadge}>Coins: {userData.coins}</div>
            </div>
          </div>

          {/* About / Bio */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>About</h3>
            <p style={styles.bio}>{userData.bio}</p>
          </div>

          {/* Details */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Details</h3>
            <div style={styles.grid}>
              <div>
                <h4 style={styles.subText}>College</h4>
                <p style={{ fontWeight: "500", color: "#111827" }}>
                  {userData.college}
                </p>
              </div>
              <div>
                <h4 style={styles.subText}>Stream</h4>
                <p style={{ fontWeight: "500", color: "#111827" }}>
                  {userData.stream}
                </p>
              </div>
              <div>
                <h4 style={styles.subText}>Education</h4>
                <p style={{ fontWeight: "500", color: "#111827" }}>
                  {userData.education}
                </p>
              </div>

              {/* ✅ Show experience only if user is a Mentor */}
              {userData.type === "mentor" && (
                <>
                  <div>
                    <h4 style={styles.subText}>Industry Experience</h4>
                    <p style={{ fontWeight: "500", color: "#111827" }}>
                      {userData.yearsOfExperience} years
                    </p>
                  </div>
                  <div>
                    <h4 style={styles.subText}>Total Experience</h4>
                    <p style={{ fontWeight: "500", color: "#111827" }}>
                      {userData.totalExperience} years
                    </p>
                  </div>
                </>
              )}

              <div>
                <h4 style={styles.subText}>Email</h4>
                <p style={{ fontWeight: "500", color: "#111827" }}>
                  {userData.email}
                </p>
              </div>
              <div>
                <h4 style={styles.subText}>Phone</h4>
                <p style={{ fontWeight: "500", color: "#111827" }}>
                  {userData.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Skills</h3>
            <div style={styles.skillsWrapper}>
              {userData.skills.map((skill, idx) => (
                <span key={idx} style={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
