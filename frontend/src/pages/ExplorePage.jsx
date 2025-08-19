import React, { useState } from "react";
import { Search } from "lucide-react";
import MentorGrid from "../components/ExplorePage/MentorGrid";

const mentorsData = [
  {
    id: 1,
    name: "Alice Johnson",
    tech: "React",
    rating: 4.9,
    field: "Web Development",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Raj Mehta",
    tech: "Flutter",
    rating: 4.8,
    field: "Mobile Development",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sophia Lee",
    tech: "Machine Learning",
    rating: 5.0,
    field: "AI & ML",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    tech: "Python",
    rating: 4.7,
    field: "Data Science",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Emma Brown",
    tech: "UI/UX",
    rating: 4.9,
    field: "Design",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "David Kim",
    tech: "Angular",
    rating: 4.6,
    field: "Web Development",
    img: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Fatima Ali",
    tech: "Django",
    rating: 4.8,
    field: "Backend Development",
    img: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Liam Martinez",
    tech: "Node.js",
    rating: 4.7,
    field: "Backend Development",
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Olivia Chen",
    tech: "Swift",
    rating: 4.9,
    field: "Mobile Development",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Ethan Wright",
    tech: "Kotlin",
    rating: 4.6,
    field: "Mobile Development",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Mia Patel",
    tech: "TensorFlow",
    rating: 5.0,
    field: "AI & ML",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Noah Anderson",
    tech: "C++",
    rating: 4.5,
    field: "Systems Programming",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 13,
    name: "Ava Gupta",
    tech: "R",
    rating: 4.7,
    field: "Data Science",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 14,
    name: "James Wilson",
    tech: "Go",
    rating: 4.6,
    field: "Cloud & DevOps",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 15,
    name: "Zara Hassan",
    tech: "Figma",
    rating: 4.8,
    field: "Design",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Lucas Green",
    tech: "Rust",
    rating: 4.7,
    field: "Systems Programming",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Chloe Scott",
    tech: "PHP",
    rating: 4.5,
    field: "Web Development",
    img: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 18,
    name: "Arjun Nair",
    tech: "AWS",
    rating: 4.9,
    field: "Cloud & DevOps",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 19,
    name: "Grace Thompson",
    tech: "Cybersecurity",
    rating: 4.8,
    field: "Security",
    img: "https://i.pravatar.cc/150?img=19",
  },
  {
    id: 20,
    name: "Hiro Tanaka",
    tech: "Blockchain",
    rating: 4.7,
    field: "Web3 & Blockchain",
    img: "https://i.pravatar.cc/150?img=20",
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const filteredMentors = mentorsData.filter((mentor) =>
    mentor.tech.toLowerCase().includes(search.toLowerCase())
  );
  const categories = [...new Set(mentorsData.map((m) => m.field))];

  // ✅ Inline CSS styles
  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#f9fafb",
      minHeight: "100vh",
      width: "100%",
    },
    container: {
      width: "100%",
      maxWidth: "800px",
      padding: "2rem",
    },
    title: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#1f2937",
      textAlign: "center",
    },
    searchBox: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      padding: "0.75rem",
      marginBottom: "2.5rem",
      width: "100%",
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    input: {
      width: "100%",
      outline: "none",
      border: "none",
      color: "#374151",
      fontSize: "1rem",
    },
    sectionTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "1rem",
      color: "#374151",
      textAlign: "center",
    },
    fieldTitle: {
      fontSize: "1.125rem",
      fontWeight: "bold",
      color: "#2563eb",
      marginBottom: "1rem",
      textAlign: "center",
    },
    noResult: {
      color: "#6b7280",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Explore Mentors</h1>

        {/* Search Bar */}
        <div style={styles.searchBox}>
          <Search color="#6b7280" size={20} style={{ marginRight: "0.5rem" }} />
          <input
            type="text"
            placeholder="Search mentors by technology..."
            style={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Search Results */}
        {search && (
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={styles.sectionTitle}>Results</h2>
            {filteredMentors.length > 0 ? (
              <MentorGrid mentors={filteredMentors} small />
            ) : (
              <p style={styles.noResult}>No mentors found for "{search}"</p>
            )}
          </div>
        )}

        {/* Top Mentors by Field */}
        <div>
          <h2 style={styles.sectionTitle}>Top Mentors by Field</h2>
          {categories.map((field, idx) => {
            const topMentors = mentorsData
              .filter((m) => m.field === field)
              .slice(0, 2);
            return (
              <div key={idx} style={{ marginBottom: "2.5rem" }}>
                <h3 style={styles.fieldTitle}>{field}</h3>
                <MentorGrid mentors={topMentors} small />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
