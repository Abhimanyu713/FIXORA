// import React from "react";

// const ConversationItem = ({ conversation, onClick, isActive }) => {
//   const itemStyle = {
//     padding: "12px 16px",
//     cursor: "pointer",
//     borderBottom: "1px solid #f3f4f6",
//     backgroundColor: isActive ? "#e0e7ff" : "transparent",
//     transition: "all 0.2s ease",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     position: "relative",
//   };

//   const avatarStyle = {
//     width: "48px",
//     height: "48px",
//     borderRadius: "50%",
//     objectFit: "cover",
//     border: "2px solid #e5e7eb",
//   };

//   const contentStyle = {
//     flex: 1,
//     minWidth: 0,
//   };

//   const nameStyle = {
//     fontWeight: "600",
//     color: "#111827",
//     fontSize: "14px",
//     marginBottom: "2px",
//   };

//   const messageStyle = {
//     color: "#6b7280",
//     fontSize: "13px",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   };

//   const timeStyle = {
//     fontSize: "11px",
//     color: "#9ca3af",
//     marginBottom: "4px",
//   };

//   const unreadBadgeStyle = {
//     backgroundColor: "#dc2626",
//     color: "white",
//     borderRadius: "50%",
//     width: "20px",
//     height: "20px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "11px",
//     fontWeight: "600",
//   };

//   return (
//     <div
//       style={itemStyle}
//       onClick={onClick}
//       onMouseEnter={(e) => {
//         if (!isActive) e.currentTarget.style.backgroundColor = "#f9fafb";
//       }}
//       onMouseLeave={(e) => {
//         if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
//       }}
//     >
//       <img
//         src={conversation.profilePhoto}
//         alt={conversation.name}
//         style={avatarStyle}
//       />
//       <div style={contentStyle}>
//         <div style={nameStyle}>{conversation.name}</div>
//         <div style={messageStyle}>{conversation.lastMessage}</div>
//       </div>
//       <div style={{ textAlign: "right" }}>
//         <div style={timeStyle}>{conversation.time}</div>
//         {conversation.unread > 0 && (
//           <div style={unreadBadgeStyle}>{conversation.unread}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConversationItem;


