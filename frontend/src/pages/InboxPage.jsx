import React, { useState } from "react";
import ConversationItem from "../components/InboxPage/ConversationItem";

const InboxPage = () => {
  const [conversations] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      lastMessage: "Can we schedule the call tomorrow?",
      time: "10:30 AM",
      unread: 2,
      profilePhoto: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "David Smith",
      lastMessage: "Thanks for the help! 🙏",
      time: "Yesterday",
      unread: 0,
      profilePhoto: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      name: "Priya Sharma",
      lastMessage: "I shared the document with you.",
      time: "2 days ago",
      unread: 5,
      profilePhoto: "https://i.pravatar.cc/150?img=32",
    },
  ]);

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#f9fafb",
      padding: "40px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      padding: "20px",
      width: "100%",
      maxWidth: "600px",
    },
    header: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#111827",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Inbox</h2>
        {conversations.map((conv) => (
          <ConversationItem key={conv.id} conversation={conv} />
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
