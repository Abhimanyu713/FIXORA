import React, { useEffect, useRef, useState } from "react";

const WebRTC = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const pc = useRef(null); // peer connection
  const [localStream, setLocalStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    startCamera();
  }, []);

  // 1. Get camera + mic
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
      setError(null); // reset error if retry works
    } catch (err) {
      console.error("Camera access denied:", err);
      setError("Camera/Mic access denied. Please enable permissions.");
    }
  };

  // 2. Create PeerConnection
  const createPeerConnection = () => {
    if (!localStream) {
      alert("Start the camera first!");
      return;
    }

    pc.current = new RTCPeerConnection();

    // send local tracks
    localStream.getTracks().forEach((track) => {
      pc.current.addTrack(track, localStream);
    });

    // when remote stream arrives
    pc.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };
  };

  // 3. Create Offer
  const createOffer = async () => {
    createPeerConnection();

    const offer = await pc.current.createOffer();
    await pc.current.setLocalDescription(offer);

    console.log("Offer SDP:", offer);
  };

  // 4. Create Answer
  const createAnswer = async (offer) => {
    createPeerConnection();

    await pc.current.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await pc.current.createAnswer();
    await pc.current.setLocalDescription(answer);

    console.log("Answer SDP:", answer);
  };

  // 5. Add remote answer from peer
  const addAnswer = async (answer) => {
    if (!pc.current.currentRemoteDescription) {
      await pc.current.setRemoteDescription(new RTCSessionDescription(answer));
    }
  };

  return (
    <div>
      <h2>React WebRTC Demo</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={startCamera}>Retry Camera</button>
      <button onClick={createOffer}>Create Offer</button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          style={{ width: "300px", background: "#000" }}
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          style={{ width: "300px", background: "#000" }}
        />
      </div>
    </div>
  );
};

export default WebRTC;
