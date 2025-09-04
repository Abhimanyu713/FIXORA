// import React from "react";

// import { Search, MessageCircle, Send, MoreVertical, Phone, Video, Info, Smile, Paperclip, Mic } from "lucide-react";
// import { useState } from "react";
// export default function ChatWindow ({ conversation })  {
//   const [message, setMessage] = useState("");
  
//   const messages = [
//     { id: 1, text: "Hey! How are you doing?", sender: "other", time: "10:25 AM" },
//     { id: 2, text: "I'm good, thanks! What about you?", sender: "me", time: "10:26 AM" },
//     { id: 3, text: conversation.lastMessage, sender: "other", time: conversation.time },
//   ];

//   const headerStyle = {
//     padding: "16px 20px",
//     borderBottom: "1px solid #e5e7eb",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#fff"
//   };

//   const userInfoStyle = {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px"
//   };

//   const avatarStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover"
//   };

//   const actionsStyle = {
//     display: "flex",
//     gap: "8px"
//   };

//   const actionButtonStyle = {
//     padding: "8px",
//     borderRadius: "8px",
//     border: "none",
//     backgroundColor: "transparent",
//     cursor: "pointer",
//     color: "#6b7280",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: "all 0.2s"
//   };

//   const messagesStyle = {
//     flex: 1,
//     padding: "20px",
//     overflowY: "auto",
//     display: "flex",
//     flexDirection: "column",
//     gap: "16px",
//     backgroundColor: "#fafafa"
//   };

//   const messageItemStyle = (isMe) => ({
//     display: "flex",
//     justifyContent: isMe ? "flex-end" : "flex-start",
//     marginBottom: "8px"
//   });

//   const messageBubbleStyle = (isMe) => ({
//     maxWidth: "70%",
//     padding: "12px 16px",
//     borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
//     backgroundColor: isMe ? "#2563eb" : "#fff",
//     color: isMe ? "#fff" : "#111827",
//     boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
//     fontSize: "14px",
//     lineHeight: "1.4"
//   });

//   const inputAreaStyle = {
//     padding: "16px 20px",
//     borderTop: "1px solid #e5e7eb",
//     backgroundColor: "#fff",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px"
//   };

//   const inputStyle = {
//     flex: 1,
//     padding: "12px 16px",
//     border: "1px solid #e5e7eb",
//     borderRadius: "24px",
//     outline: "none",
//     fontSize: "14px",
//     backgroundColor: "#f9fafb"
//   };

//   const sendButtonStyle = {
//     padding: "12px",
//     borderRadius: "50%",
//     border: "none",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: "all 0.2s"
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
//       {/* Chat Header */}
//       <div style={headerStyle}>
//         <div style={userInfoStyle}>
//           <img src={conversation.profilePhoto} alt={conversation.name} style={avatarStyle} />
//           <div>
//             <div style={{ fontWeight: "600", color: "#111827" }}>{conversation.name}</div>
//             <div style={{ fontSize: "12px", color: "#10b981" }}>● Online</div>
//           </div>
//         </div>
//         <div style={actionsStyle}>
//           <button
//             style={actionButtonStyle}
//             onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
//             onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
//           >
//             <Phone size={18} />
//           </button>
//           <button
//             style={actionButtonStyle}
//             onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
//             onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
//           >
//             <Video size={18} />
//           </button>
//           <button
//             style={actionButtonStyle}
//             onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
//             onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
//           >
//             <Info size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Messages */}
//       <div style={messagesStyle}>
//         {messages.map((msg) => (
//           <div key={msg.id} style={messageItemStyle(msg.sender === "me")}>
//             <div style={messageBubbleStyle(msg.sender === "me")}>
//               <div>{msg.text}</div>
//               <div style={{ 
//                 fontSize: "11px", 
//                 marginTop: "4px", 
//                 opacity: 0.7,
//                 textAlign: msg.sender === "me" ? "right" : "left"
//               }}>
//                 {msg.time}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Input Area */}
//       <div style={inputAreaStyle}>
//         <button
//           style={{...actionButtonStyle, padding: "8px"}}
//           onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
//           onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
//         >
//           <Paperclip size={20} />
//         </button>
//         <input
//           style={inputStyle}
//           type="text"
//           placeholder="Type a message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter' && message.trim()) {
//               // Handle send message
//               setMessage("");
//             }
//           }}
//         />
//         <button
//           style={{...actionButtonStyle, padding: "8px"}}
//           onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
//           onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
//         >
//           <Smile size={20} />
//         </button>
//         <button
//           style={{...actionButtonStyle, padding: "8px"}}
//           onMouseEnter={(e) => e.target.style.backgroundColor = "#f3f4f6"}
//           onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
//         >
//           <Mic size={20} />
//         </button>
//         <button
//           style={sendButtonStyle}
//           onClick={() => {
//             if (message.trim()) {
//               // Handle send message
//               setMessage("");
//             }
//           }}
//           onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
//           onMouseLeave={(e) => e.target.style.backgroundColor = "#2563eb"}
//         >
//           <Send size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };
