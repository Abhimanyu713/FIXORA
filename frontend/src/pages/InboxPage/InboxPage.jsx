import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  MessageCircle,
  Send,
  MoreVertical,
  Phone,
  Video,
  Info,
  Smile,
  Paperclip,
  Mic,
} from "lucide-react";

const ConversationItem = ({ conversation, onClick, isActive }) => {
  const itemStyle = {
    padding: "12px 16px",
    cursor: "pointer",
    borderBottom: "1px solid #f3f4f6",
    backgroundColor: isActive ? "#e0e7ff" : "transparent",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    position: "relative",
  };

  const avatarStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #e5e7eb",
  };

  const contentStyle = {
    flex: 1,
    minWidth: 0,
  };

  const nameStyle = {
    fontWeight: "600",
    color: "#111827",
    fontSize: "14px",
    marginBottom: "2px",
  };

  const messageStyle = {
    color: "#6b7280",
    fontSize: "13px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const timeStyle = {
    fontSize: "11px",
    color: "#9ca3af",
    marginBottom: "4px",
  };

  const unreadBadgeStyle = {
    backgroundColor: "#dc2626",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "600",
  };

  return (
    <div
      style={itemStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!isActive) e.target.style.backgroundColor = "#f9fafb";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.target.style.backgroundColor = "transparent";
      }}
    >
      <img
        src={conversation.profilePhoto}
        alt={conversation.name}
        style={avatarStyle}
      />
      <div style={contentStyle}>
        <div style={nameStyle}>{conversation.name}</div>
        <div style={messageStyle}>{conversation.lastMessage}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={timeStyle}>{conversation.time}</div>
        {conversation.unread > 0 && (
          <div style={unreadBadgeStyle}>{conversation.unread}</div>
        )}
      </div>
    </div>
  );
};

const ChatWindow = ({ conversation }) => {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      text: "Hey! How are you doing?",
      sender: "other",
      time: "10:25 AM",
    },
    {
      id: 2,
      text: "I'm good, thanks! What about you?",
      sender: "me",
      time: "10:26 AM",
    },
    {
      id: 3,
      text: conversation.lastMessage,
      sender: "other",
      time: conversation.time,
    },
  ];

  const headerStyle = {
    padding: "16px 20px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  };

  const userInfoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const actionsStyle = {
    display: "flex",
    gap: "8px",
  };

  const actionButtonStyle = {
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    color: "#6b7280",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  };

  const messagesStyle = {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    backgroundColor: "#fafafa",
  };

  const messageItemStyle = (isMe) => ({
    display: "flex",
    justifyContent: isMe ? "flex-end" : "flex-start",
    marginBottom: "8px",
  });

  const messageBubbleStyle = (isMe) => ({
    maxWidth: "70%",
    padding: "12px 16px",
    borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
    backgroundColor: isMe ? "#2563eb" : "#fff",
    color: isMe ? "#fff" : "#111827",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    lineHeight: "1.4",
  });

  const inputAreaStyle = {
    padding: "16px 20px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const inputStyle = {
    flex: 1,
    padding: "12px 16px",
    border: "1px solid #e5e7eb",
    borderRadius: "24px",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "#f9fafb",
  };

  const sendButtonStyle = {
    padding: "12px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%",  width:"100%" }}>
      {/* Chat Header */}
      <div style={headerStyle}>
        <div style={userInfoStyle}>
          <img
            src={conversation.profilePhoto}
            alt={conversation.name}
            style={avatarStyle}
          />
          <div>
            <div style={{ fontWeight: "600", color: "#111827" }}>
              {conversation.name}
            </div>
            <div style={{ fontSize: "12px", color: "#10b981" }}>● Online</div>
          </div>
        </div>
        <div style={actionsStyle}>
          <button
            style={actionButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <Phone size={18} />
          </button>
          <button
            style={actionButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <Video size={18} />
          </button>
          <button
            style={actionButtonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={messagesStyle}>
        {messages.map((msg) => (
          <div key={msg.id} style={messageItemStyle(msg.sender === "me")}>
            <div style={messageBubbleStyle(msg.sender === "me")}>
              <div>{msg.text}</div>
              <div
                style={{
                  fontSize: "11px",
                  marginTop: "4px",
                  opacity: 0.7,
                  textAlign: msg.sender === "me" ? "right" : "left",
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={inputAreaStyle}>
        <button
          style={{ ...actionButtonStyle, padding: "8px" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <Paperclip size={20} />
        </button>
        <input
          style={inputStyle}
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && message.trim()) {
              // Handle send message
              setMessage("");
            }
          }}
        />
        <button
          style={{ ...actionButtonStyle, padding: "8px" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <Smile size={20} />
        </button>
        <button
          style={{ ...actionButtonStyle, padding: "8px" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <Mic size={20} />
        </button>
        <button
          style={sendButtonStyle}
          onClick={() => {
            if (message.trim()) {
              // Handle send message
              setMessage("");
            }
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

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
    {
      id: 4,
      name: "John Wilson",
      lastMessage: "See you in the meeting!",
      time: "3 days ago",
      unread: 0,
      profilePhoto: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 5,
      name: "Sarah Davis",
      lastMessage: "Perfect! That works for me.",
      time: "1 week ago",
      unread: 1,
      profilePhoto: "https://i.pravatar.cc/150?img=45",
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = e.clientX - containerRect.left;

      if (newWidth >= 280 && newWidth <= 500) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#f9fafb",
      color: "#111827",
      fontFamily: "system-ui, -apple-system, sans-serif",
      position: "relative",
    },
    sidebar: {
      width: `${sidebarWidth}px`,
      backgroundColor: "#fff",
      borderRight: "1px solid #e5e7eb",
      display: "flex",
      flexDirection: "column",
      boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
      position: "relative",
    },
    resizer: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "4px",
      height: "100%",
      backgroundColor: isResizing ? "#2563eb" : "transparent",
      cursor: "col-resize",
      zIndex: 10,
      transition: "background-color 0.2s",
    },
    header: {
      padding: "20px 16px",
      borderBottom: "1px solid #f3f4f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      fontWeight: "700",
      fontSize: "20px",
      color: "#111827",
    },
    searchContainer: {
      padding: "16px",
      position: "relative",
    },
    searchBox: {
      width: "100%",
      padding: "12px 16px 12px 40px",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      backgroundColor: "#f9fafb",
      color: "#111827",
      outline: "none",
      fontSize: "14px",
      transition: "all 0.2s",
    },
    searchIcon: {
      position: "absolute",
      left: "28px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
    },
    conversations: {
      flex: 1,
      overflowY: "auto",
    },
    chatArea: {
      flex: 1,
      display: "flex",
      backgroundColor: "#fff",
      position: "relative",
    },
    emptyState: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
width:"100%",
      textAlign: "center",
      padding: "40px",
    },
    emptyStateContent: {
      maxWidth: "300px",
    },
    emptyIcon: {
      fontSize: "64px",
      marginBottom: "20px",
      opacity: 0.5,
    },
    emptyTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "8px",
    },
    emptyDescription: {
      color: "#6b7280",
      marginBottom: "24px",
      lineHeight: "1.5",
    },
    emptyButton: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "12px",
      backgroundColor: "#2563eb",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "14px",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.container} ref={containerRef}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Resizer */}
        <div
          style={styles.resizer}
          onMouseDown={handleMouseDown}
          onMouseEnter={(e) => {
            if (!isResizing) e.target.style.backgroundColor = "#e5e7eb";
          }}
          onMouseLeave={(e) => {
            if (!isResizing) e.target.style.backgroundColor = "transparent";
          }}
        />

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>Messages</div>
          <button
            style={{
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "#6b7280",
            }}
          >
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Search */}
        <div style={styles.searchContainer}>
          <Search style={styles.searchIcon} size={18} />
          <input
            style={styles.searchBox}
            type="text"
            placeholder="Search conversations..."
            onFocus={(e) => {
              e.target.style.borderColor = "#2563eb";
              e.target.style.backgroundColor = "#fff";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.backgroundColor = "#f9fafb";
            }}
          />
        </div>

        {/* Conversations */}
        <div style={styles.conversations}>
          {conversations.map((conv) => (
            <ConversationItem
              key={conv.id}
              conversation={conv}
              onClick={() => setSelectedChat(conv)}
              isActive={selectedChat?.id === conv.id}
            />
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div style={styles.chatArea}>
        {selectedChat ? (
          <ChatWindow conversation={selectedChat} />
        ) : (
          <div style={styles.emptyState}>
            <div style={styles.emptyStateContent}>
              <div style={styles.emptyIcon}>💬</div>
              <h2 style={styles.emptyTitle}>Your Messages</h2>
              <p style={styles.emptyDescription}>
                Select a conversation to start chatting or send a new message to
                connect with someone.
              </p>
              <button
                style={styles.emptyButton}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1d4ed8")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#2563eb")
                }
              >
                <MessageCircle size={18} />
                New Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxPage;
