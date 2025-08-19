import React from "react";

const ConversationItem = ({ conversation }) => {
  const styles = {
    conversation: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      borderBottom: "1px solid #e5e7eb",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    left: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    profileImg: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    name: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#111827",
    },
    message: {
      fontSize: "14px",
      color: "#6b7280",
      marginTop: "2px",
      maxWidth: "260px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    right: {
      textAlign: "right",
    },
    time: {
      fontSize: "12px",
      color: "#9ca3af",
    },
    unreadBadge: {
      backgroundColor: "#ef4444",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "600",
      padding: "4px 8px",
      borderRadius: "12px",
      marginTop: "6px",
      display: "inline-block",
    },
  };

  return (
    <div
      style={styles.conversation}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#f3f4f6")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <div style={styles.left}>
        <img src={conversation.profilePhoto} alt="Profile" style={styles.profileImg} />
        <div>
          <p style={styles.name}>{conversation.name}</p>
          <p style={styles.message}>{conversation.lastMessage}</p>
        </div>
      </div>
      <div style={styles.right}>
        <p style={styles.time}>{conversation.time}</p>
        {conversation.unread > 0 && (
          <span style={styles.unreadBadge}>{conversation.unread}</span>
        )}
      </div>
    </div>
  );
};

export default ConversationItem;
