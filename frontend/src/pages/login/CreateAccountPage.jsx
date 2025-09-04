import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import OAuthButton from "../components/OAuthButton";
import GoogleIcon from "../../assets/icons/google.png";
import AppleIcon from "../../assets/icons/apple-logo.png";

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #eff6ff, #e0e7ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  wrapper: {
    width: "100%",
    maxWidth: "40rem",
  },
  card: {
    background: "white",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.75rem",
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  iconWrapper: {
    width: "4rem",
    height: "4rem",
    background: "#dbeafe",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1rem",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#111827",
  },
  subtitle: {
    color: "#4b5563",
    marginTop: "0.5rem",
  },
  form: {
    display: "grid",
    gap: "1.5rem",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "0.5rem",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    padding: "0.5rem 0.75rem",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "1rem",
  },
  hint: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginTop: "0.25rem",
  },
  error: {
    color: "#ef4444",
    fontSize: "0.875rem",
    textAlign: "center",
  },
  button: (isFormValid) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
    border: "none",
    cursor: isFormValid ? "pointer" : "not-allowed",
    backgroundColor: isFormValid ? "#2563eb" : "#d1d5db",
    color: isFormValid ? "white" : "#6b7280",
  }),
  oauthBtn: {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    border: "1px solid #d1d5db",
    backgroundColor: "white",
    cursor: "pointer",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#6b7280",
    fontSize: "0.875rem",
    margin: "1rem 0",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#d1d5db",
  },
  dividerText: {
    margin: "0 0.75rem",
  },
};

const CreateAccountForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibleOrNot = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    onSubmit(formData);
  };

  const isFormValid =
    formData.email && formData.password && validateEmail(formData.email);

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.iconWrapper}>
              <Lock
                style={{ width: "2rem", height: "2rem", color: "#2563eb" }}
              />
            </div>
            <h2 style={styles.title}>Create Account</h2>
            <p style={styles.subtitle}>Sign up with your email and password</p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Email */}
            <div>
              <label htmlFor="email" style={styles.label}>
                Email Address *
              </label>
              <div style={styles.inputGroup}>
                <Mail
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#9ca3af",
                    marginRight: "0.5rem",
                  }}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" style={styles.label}>
                Password *
              </label>
              <div style={styles.inputGroup}>
                <Lock
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#9ca3af",
                    marginRight: "0.5rem",
                  }}
                />
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your password"
                  required
                />
                {isPasswordVisible ? (
                  <Eye
                    onClick={handlePasswordVisibleOrNot}
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#9ca3af",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <EyeOff
                    onClick={handlePasswordVisibleOrNot}
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#9ca3af",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
              <p style={styles.hint}>Password must be at least 6 characters</p>
            </div>

            {/* Error Message */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              style={styles.button(isFormValid)}
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>or</span>
            <div style={styles.dividerLine}></div>
          </div>

          {/* Google Button */}
          <OAuthButton icon={GoogleIcon} label={"Sign up with google"} />

          {/* Apple Button */}
          <OAuthButton icon={AppleIcon} label={"Sign up with apple"} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
