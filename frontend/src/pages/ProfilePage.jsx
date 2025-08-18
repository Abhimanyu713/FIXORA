import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, GraduationCap, BookOpen, Edit3, Coins } from "lucide-react";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "John Doe",
    type: "mentee", // or 'mentor'
    email: "john@example.com",
    phone: "+91 9876543210",
    college: "MIT",
    stream: "Computer Science",
    education: "Graduation",
    yearsOfExperience: 2,
    skills: ["JavaScript", "React", "Node.js"],
    coins: 120,
    bio: "Passionate learner, focused on improving frontend development skills.",
    profilePhoto: "https://i.pravatar.cc/150?img=32",
  });

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleEdit = () => {
    alert("Edit profile clicked! (you can integrate modal or form here)");
  };

  // 🎨 Inline Styles Object
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb", // gray-50
    },
    header: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb", // gray-200
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      padding: "0 1rem",
    },
    brand: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2563eb", // blue-600
    },
    profileCard: {
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "24px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    },
    profilePhoto: {
      width: "96px",
      height: "96px",
      borderRadius: "50%",
      border: "4px solid #bfdbfe", // blue-100
      objectFit: "cover",
    },
    name: {
      marginTop: "12px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#111827", // gray-900
    },
    subText: {
      color: "#6b7280", // gray-500
    },
    badge: {
      marginTop: "8px",
      padding: "4px 12px",
      backgroundColor: "#eff6ff",
      color: "#2563eb",
      borderRadius: "9999px",
      fontSize: "14px",
      textTransform: "capitalize",
    },
    coins: {
      marginTop: "12px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#ca8a04", // yellow-600
      fontWeight: "600",
    },
    editBtn: {
      marginTop: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "20px",
      color: "#111827",
    },
    skill: {
      padding: "4px 12px",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      borderRadius: "9999px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <aside style={{ width: "60px", background: "#fff", borderRight: "1px solid #e5e7eb", position: "fixed", top: 0, left: 0, height: "100%" }}>
        <Navbar />
      </aside>

      {/* Header */}
      <header style={styles.header}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", maxWidth: "1120px", margin: "0 auto" }}>
          <h1 style={styles.brand}>SolutionSphere</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#374151" }}>
              {userData.type === "mentor" ? (
                <GraduationCap size={20} color="#2563eb" />
              ) : (
                <BookOpen size={20} color="#16a34a" />
              )}
              <span style={{ fontWeight: "500" }}>{userData.name}</span>
              <span style={{ fontSize: "14px", color: "#6b7280" }}>({userData.type})</span>
            </div>
            <button
              onClick={handleLogout}
              style={{ display: "flex", alignItems: "center", gap: "6px", color: "#4b5563", background: "none", border: "none", cursor: "pointer" }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main style={{ maxWidth: "768px", margin: "0 auto", padding: "32px 16px" }}>
        <div style={styles.profileCard}>
          {/* Profile Info */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={userData.profilePhoto} alt="Profile" style={styles.profilePhoto} />
            <h2 style={styles.name}>{userData.name}</h2>
            <p style={styles.subText}>{userData.email}</p>
            <p style={styles.subText}>{userData.phone}</p>
            <span style={styles.badge}>{userData.type}</span>

            {/* Coins */}
            <div style={styles.coins}>
              <Coins size={20} /> {userData.coins} Coins Left
            </div>

            {/* Edit Button */}
            <button onClick={handleEdit} style={styles.editBtn}>
              <Edit3 size={16} /> Edit Profile
            </button>
          </div>

          {/* Bio */}
          <div>
            <h3 style={styles.sectionTitle}>About Me</h3>
            <p style={styles.subText}>{userData.bio}</p>
          </div>

          {/* Details */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
            <div>
              <h4 style={styles.subText}>College</h4>
              <p style={{ fontWeight: "500", color: "#111827" }}>{userData.college}</p>
            </div>
            <div>
              <h4 style={styles.subText}>Stream</h4>
              <p style={{ fontWeight: "500", color: "#111827" }}>{userData.stream}</p>
            </div>
            <div>
              <h4 style={styles.subText}>Education</h4>
              <p style={{ fontWeight: "500", color: "#111827" }}>{userData.education}</p>
            </div>
            {userData.type === "mentor" && (
              <div>
                <h4 style={styles.subText}>Years of Experience</h4>
                <p style={{ fontWeight: "500", color: "#111827" }}>{userData.yearsOfExperience}</p>
              </div>
            )}
          </div>

          {/* Skills */}
          <div>
            <h3 style={styles.sectionTitle}>{userData.type === "mentor" ? "Areas of Proficiency" : "Things to Learn"}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {userData.skills.map((skill, index) => (
                <span key={index} style={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
