// import React, { useEffect, useRef, useState } from "react";
// import { Phone, ScreenShare, Mic, Video, VideoOff, MicOff } from "lucide-react";

// const CallingPage = ({ caller = "Alice", callee = "Bob" }) => {
//   const [micOn, setMicOn] = useState(true);
//   const [videoOn, setVideoOn] = useState(true);
//   const localVideoRef = useRef(null);
//   const remoteRef = useRef(null);
//   const [localStream, setLocalStream] = useState(null);

//   const pc = useRef(null); // peer connection

//   useEffect(() => {
//     startCamera();
//   }, []);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });

//       setLocalStream(stream);
//       if (localVideoRef.current) {
//         localVideoRef.current.srcObject = stream;
//       }

//       pc.current = new RTCPeerConnection();

//       stream.getTracks().forEach((track) => {
//         pc.current.addTrack(track, stream);
//       });

//       pc.current.ontrack = (event) => {
//         if (remoteRef.current) {
//           remoteRef.current.srcObject = event.streams[0];
//         }
//       };
//     } catch (err) {
//       console.error("Camera Access denied", err);
//     }
//   };

//   // Toggle mic
//   const handleMicToggle = () => {
//     if (localStream) {
//       localStream.getAudioTracks().forEach((track) => {
//         track.enabled = !micOn;
//       });
//     }
//     setMicOn(!micOn);
//   };

//   // Toggle video
//   const handleVideoToggle = () => {
//     if (localStream) {
//       localStream.getVideoTracks().forEach((track) => {
//         track.enabled = !videoOn;
//       });
//     }
//     setVideoOn(!videoOn);
//   };

//   const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "100vh",
//       backgroundColor: "#f9fafb", // light gray background like MenteeForm
//       color: "#111827", // dark text
//       padding: "24px",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "24px",
//     },
//     title: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       marginBottom: "8px",
//       color: "#111827",
//     },
//     subtitle: {
//       fontSize: "18px",
//       color: "#4b5563",
//     },
//     videoGrid: {
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr",
//       gap: "16px",
//       marginBottom: "24px",
//       width: "100%",
//       maxWidth: "800px",
//     },
//     videoBox: {
//       backgroundColor: "#e5e7eb", // gray-200
//       borderRadius: "16px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "250px",
//       fontSize: "16px",
//       color: "#6b7280", // gray-500
//       fontStyle: "italic",
//       overflow: "hidden",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     },
//     controls: {
//       display: "flex",
//       gap: "16px",
//     },
//     button: {
//       borderRadius: "50%",
//       width: "56px",
//       height: "56px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       cursor: "pointer",
//       border: "none",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
//       transition: "0.2s ease-in-out",
//     },
//     endCall: {
//       backgroundColor: "#dc2626", // red
//       color: "white",
//     },
//     secondary: {
//       backgroundColor: "#10b981", // green-500
//       color: "white",
//     },
//     outline: {
//       backgroundColor: "white",
//       border: "2px solid #10b981", // green border
//       color: "#10b981",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Caller & Callee Info */}
//       <div style={styles.header}>
//         <h2 style={styles.title}>Ongoing Call</h2>
//         <p style={styles.subtitle}>
//           {caller} 📞 {callee}
//         </p>
//       </div>

//       {/* Video Grid */}
//       <div style={styles.videoGrid}>
//         <div style={styles.videoBox}>
//           <video
//             ref={localVideoRef}
//             autoPlay
//             playsInline
//             muted
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>
//         <div style={styles.videoBox}>
//           <video
//             ref={remoteRef}
//             autoPlay
//             playsInline
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>
//       </div>

//       {/* Controls */}
//       <div style={styles.controls}>
//         <button style={{ ...styles.button, ...styles.endCall }}>
//           <Phone />
//         </button>

//         <button onClick={handleMicToggle} style={{ ...styles.button, ...styles.secondary }}>
//           {micOn ? <Mic /> : <MicOff />}
//         </button>

//         <button onClick={handleVideoToggle} style={{ ...styles.button, ...styles.secondary }}>
//           {videoOn ? <Video /> : <VideoOff />}
//         </button>

//         <button style={{ ...styles.button, ...styles.outline }}>
//           <ScreenShare />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CallingPage;



import React, { useEffect, useRef, useState } from "react";
import { 
  Phone, 
  ScreenShare, 
  Mic, 
  Video, 
  VideoOff, 
  MicOff, 
  Maximize 
} from "lucide-react";

const CallingPage = ({ caller = "Alice", callee = "Bob" }) => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const localVideoRef = useRef(null);
  const remoteRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);

  const pc = useRef(null); // peer connection

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      pc.current = new RTCPeerConnection();

      stream.getTracks().forEach((track) => {
        pc.current.addTrack(track, stream);
      });

      pc.current.ontrack = (event) => {
        if (remoteRef.current) {
          remoteRef.current.srcObject = event.streams[0];
        }
      };
    } catch (err) {
      console.error("Camera Access denied", err);
    }
  };

  // Toggle mic
  const handleMicToggle = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !micOn;
      });
    }
    setMicOn(!micOn);
  };

  // Toggle video
  const handleVideoToggle = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !videoOn;
      });
    }
    setVideoOn(!videoOn);
  };

  // Fullscreen function
  const handleFullScreen = () => {
    if (remoteRef.current) {
      if (remoteRef.current.requestFullscreen) {
        remoteRef.current.requestFullscreen();
      } else if (remoteRef.current.webkitRequestFullscreen) {
        remoteRef.current.webkitRequestFullscreen();
      } else if (remoteRef.current.msRequestFullscreen) {
        remoteRef.current.msRequestFullscreen();
      }
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f9fafb", // light gray background like MenteeForm
      color: "#111827",
      padding: "24px",
    },
    header: {
      textAlign: "center",
      marginBottom: "24px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#111827",
    },
    subtitle: {
      fontSize: "18px",
      color: "#4b5563",
    },
    videoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      marginBottom: "24px",
      width: "100%",
      maxWidth: "800px",
    },
    videoBox: {
      backgroundColor: "#e5e7eb",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "250px",
      fontSize: "16px",
      color: "#6b7280",
      fontStyle: "italic",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      position: "relative",
    },
    controls: {
      display: "flex",
      gap: "16px",
    },
    button: {
      borderRadius: "50%",
      width: "56px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      border: "none",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      transition: "0.2s ease-in-out",
    },
    endCall: {
      backgroundColor: "#dc2626", // red
      color: "white",
    },
    secondary: {
      backgroundColor: "#10b981", // green-500
      color: "white",
    },
    outline: {
      backgroundColor: "white",
      border: "2px solid #10b981",
      color: "#10b981",
    },
    fullscreenBtn: {
      position: "absolute",
      bottom: "8px",
      right: "8px",
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Caller & Callee Info */}
      <div style={styles.header}>
        <h2 style={styles.title}>Ongoing Call</h2>
        <p style={styles.subtitle}>
          {caller} 📞 {callee}
        </p>
      </div>

      {/* Video Grid */}
      <div style={styles.videoGrid}>
        {/* Local Video */}
        <div style={styles.videoBox}>
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Remote Video */}
        <div style={styles.videoBox}>
          <video
            ref={remoteRef}
            autoPlay
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <button onClick={handleFullScreen} style={styles.fullscreenBtn}>
            <Maximize size={20} />
          </button>
        </div>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <button style={{ ...styles.button, ...styles.endCall }}>
          <Phone />
        </button>

        <button onClick={handleMicToggle} style={{ ...styles.button, ...styles.secondary }}>
          {micOn ? <Mic /> : <MicOff />}
        </button>

        <button onClick={handleVideoToggle} style={{ ...styles.button, ...styles.secondary }}>
          {videoOn ? <Video /> : <VideoOff />}
        </button>

        <button style={{ ...styles.button, ...styles.outline }}>
          <ScreenShare />
        </button>
      </div>
    </div>
  );
};

export default CallingPage;
