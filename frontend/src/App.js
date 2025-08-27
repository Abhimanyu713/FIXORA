import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ExplorePage from "./pages/ExplorePage";
import CallingPage from "./pages/CallingPage";
import InboxPage from "./pages/InboxPage";
import SettingsPage from "./pages/Settings.Page";
import MentorDetailPage from "./pages/MentorDetailsPage";
import WebRTC from "./config/WebRTC/signallingServer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create_account" element={<CreateAccountPage />} />
          <Route path="/calling" element={<CallingPage />} />
           <Route path="/mentorDetails" element={<MentorDetailPage />} />
          <Route path="/inbox" element={<InboxPage />} />
            <Route path="/webrtc" element={<WebRTC />} />
             <Route path="/setting" element={<SettingsPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
