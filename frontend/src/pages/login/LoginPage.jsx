import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MentorForm from "./component/MentorForm";
import MenteeForm from "./component/MenteeForm";
import { GraduationCap, BookOpen } from "lucide-react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #eff6ff, #e0e7ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  },
  container: {
    width: "100%",
    maxWidth: "1000px",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "16px",
  },
  titleHighlight: {
    color: "#4f46e5",
  },
  subtitle: {
    fontSize: "18px",
    color: "#4b5563",
    maxWidth: "600px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
    padding: "24px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  },
  iconWrapperMentor: {
    width: "80px",
    height: "80px",
    backgroundColor: "#e0e7ff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  iconWrapperMentee: {
    width: "80px",
    height: "80px",
    backgroundColor: "#d1fae5",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#111827",
  },
  cardText: {
    color: "#4b5563",
    marginBottom: "16px",
  },
  cardList: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5",
  },
  footer: {
    textAlign: "center",
    marginTop: "48px",
    color: "#6b7280",
  },
  backBtn: {
    marginBottom: "24px",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  formWrapper: {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    padding: "32px",
  },
};

const LoginPage = () => {
  const [userType, setUserType] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setShowForm(true);
  };

  const handleFormSubmit = (userData) => {
    console.log("this is the login form");
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...userData, type: userType })
    );
    navigate("/home");
  };

  const handleBackToSelection = () => {
    setUserType("");
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div style={styles.page}>
        <div style={styles.formWrapper}>
          <button onClick={handleBackToSelection} style={styles.backBtn}>
            ← Back to selection
          </button>
          {userType === "mentor" ? (
            <MentorForm onSubmit={handleFormSubmit} />
          ) : (
            <MenteeForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            Welcome to <span style={styles.titleHighlight}>Fixora</span>
          </h1>
          <p style={styles.subtitle}>
            Connect with mentors and mentees to accelerate your learning journey
          </p>
        </div>

        {/* User Type Selection */}
        <div style={styles.grid}>
          {/* Mentor Card */}
          <div
            style={styles.card}
            onClick={() => handleUserTypeSelect("mentor")}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0,0,0,0.1)";
            }}
          >
            <div style={styles.iconWrapperMentor}>
              <GraduationCap
                style={{ width: "40px", height: "40px", color: "#4f46e5" }}
              />
            </div>
            <h3 style={styles.cardTitle}>I'm a Mentor</h3>
            <p style={styles.cardText}>
              Share your expertise and help others grow in their learning
              journey
            </p>
            <ul style={styles.cardList}>
              <li>• Share your knowledge</li>
              <li>• Connect with mentees</li>
              <li>• Build your network</li>
            </ul>
          </div>

          {/* Mentee Card */}
          <div
            style={styles.card}
            onClick={() => handleUserTypeSelect("mentee")}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0px 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0,0,0,0.1)";
            }}
          >
            <div style={styles.iconWrapperMentee}>
              <BookOpen
                style={{ width: "40px", height: "40px", color: "#059669" }}
              />
            </div>
            <h3 style={styles.cardTitle}>I'm a Mentee</h3>
            <p style={styles.cardText}>
              Find mentors and accelerate your learning with expert guidance
            </p>
            <ul style={styles.cardList}>
              <li>• Learn from experts</li>
              <li>• Get personalized guidance</li>
              <li>• Accelerate your growth</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>Choose your role to get started with Fixora</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../features/auth/authSlice";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const { status, error } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(formData));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//       />
//       <button type="submit" disabled={status === "loading"}>
//         {status === "loading" ? "Logging in..." : "Login"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// };

// export default LoginForm;
