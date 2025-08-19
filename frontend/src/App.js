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
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
