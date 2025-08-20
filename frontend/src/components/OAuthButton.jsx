import React, { useState } from "react";

const OAuthButton = ({ icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    oauthBtn: {
      width: "100%",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem",
      fontWeight: "500",
      border: "1px solid #d1d5db",
      backgroundColor: isHovered ? "#f3f4f6" : "white", // change bg here
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      transition: "background-color 0.3s ease",
        marginTop : "10px",
      marginBottom : "10px"
    },
    icon: {
      width: "20px",
      height: "20px",
    },
  };

  return (
    <button
      style={styles.oauthBtn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={label} style={styles.icon} />
      {label}
    </button>
  );
};

export default OAuthButton;
