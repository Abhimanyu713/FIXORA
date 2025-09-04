import React from "react";
import {
  Calendar,
  Megaphone,
  BookOpen,
  Award,
  Users,
  MessageCircle,
} from "lucide-react";

const CommunityPage = () => {
  // Style schema
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#111827", // gray-900
      color: "white",
      padding: "24px",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    headerTitle: {
      fontSize: "2.25rem", // text-4xl
      fontWeight: "bold",
      marginBottom: "8px",
    },
    headerSubtitle: {
      color: "#9CA3AF", // gray-400
    },
    grid: {
      display: "grid",
      gap: "24px",
      gridTemplateColumns: "1fr",
    },
    gridMd: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    gridLg: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    card: {
      backgroundColor: "#1F2937", // gray-800
      padding: "24px",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
      transition: "0.3s",
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "16px",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
    },
    list: {
      color: "#D1D5DB", // gray-300
      listStyleType: "none",
      paddingLeft: "0",
    },
    listItem: {
      marginBottom: "8px",
    },
    icon: {
      color: "#EF4444", // red-500
    },
    footer: {
      textAlign: "center",
      color: "#6B7280", // gray-500
      marginTop: "48px",
      fontSize: "0.875rem",
    },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Fixora Community</h1>
        <p style={styles.headerSubtitle}>Connect • Share • Learn • Build</p>
      </header>

      {/* Sections */}
      <div
        style={{
          ...styles.grid,
          ...styles.gridLg,
        }}
      >
        {/* Announcements */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <Megaphone style={styles.icon} />
            <h2 style={styles.cardTitle}>Announcements</h2>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>🚀 New mentorship program launching soon!</li>
            <li style={styles.listItem}>💡 Hackathon scheduled for next month</li>
            <li style={styles.listItem}>📢 Platform update v2.1 released</li>
          </ul>
        </div>

        {/* Discussions */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <MessageCircle style={styles.icon} />
            <h2 style={styles.cardTitle}>Discussions</h2>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>💻 React vs Next.js – which to choose?</li>
            <li style={styles.listItem}>🤖 Getting started with Machine Learning</li>
            <li style={styles.listItem}>🎨 Best UI/UX tools in 2025</li>
          </ul>
        </div>

        {/* Knowledge Hub */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <BookOpen style={styles.icon} />
            <h2 style={styles.cardTitle}>Knowledge Hub</h2>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>📘 Web Development Guide</li>
            <li style={styles.listItem}>📙 Machine Learning Basics</li>
            <li style={styles.listItem}>📗 Open Source Contribution Tips</li>
          </ul>
        </div>

        {/* Showcase */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <Award style={styles.icon} />
            <h2 style={styles.cardTitle}>Showcase</h2>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>🌟 Portfolio website by Alice</li>
            <li style={styles.listItem}>🎮 Fitness gamification app by Bob</li>
            <li style={styles.listItem}>📱 Chatbot project by Team Delta</li>
          </ul>
        </div>

        {/* Events */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <Calendar style={styles.icon} />
            <h2 style={styles.cardTitle}>Events</h2>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>📅 Webinar: Intro to Cloud Computing</li>
            <li style={styles.listItem}>📅 Workshop: Advanced React Patterns</li>
            <li style={styles.listItem}>📅 AMA with AI Experts – Friday</li>
          </ul>
        </div>

        {/* Members */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <Users style={styles.icon} />
            <h2 style={styles.cardTitle}>Top Members</h2>
          </div>
          <ul style={styles.list}>
            <li style={styles.listItem}>🏆 Alice – Mentor of the Month</li>
            <li style={styles.listItem}>🔥 Bob – Top Contributor</li>
            <li style={styles.listItem}>🌍 Clara – Community Builder</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Fixora • Building Knowledge Together
      </footer>
    </div>
  );
};

export default CommunityPage;
