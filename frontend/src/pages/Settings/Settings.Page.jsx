import React, { useState } from "react";
import { User, Bell, Shield, Palette, Save } from "lucide-react";

import ProfileTab from "./component/ProfileTab";
import NotificationsTab from "./component/NotificationTab";
import PreferencesTab from "./component/PreferenceTab";
import SecurityTab from "./component/SecurityTab";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Senior Software Engineer passionate about creating innovative solutions.",
    avatar: null,
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    taskReminders: true,
    projectUpdates: true,
    teamMentions: true,
    systemAlerts: true,
    marketingEmails: false,
  });

  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "en",
    timezone: "America/New_York",
    dateFormat: "MM/DD/YYYY",
    workingHours: "9:00 AM - 5:00 PM",
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "preferences", label: "Preferences", icon: Palette },
    { id: "security", label: "Security", icon: Shield },
  ];

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  // ✅ Centralized styles object
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
    },
    header: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
    },
    headerTitle: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#111827",
    },
    headerSub: {
      marginTop: "0.5rem",
      color: "#4b5563",
    },
    sidebar: {
      backgroundColor: "#fff",
      borderRadius: "0.5rem",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      padding: "1rem",
    },
    tabButton: (isActive) => ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.5rem 0.75rem",
      borderRadius: "0.5rem",
      borderRight: isActive ? "2px solid #2563eb" : "none",
      backgroundColor: isActive ? "#eff6ff" : "transparent",
      color: isActive ? "#1d4ed8" : "#374151",
      cursor: "pointer",
      transition: "all 0.2s ease",
    }),
    saveBtn: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.5rem",
      backgroundColor: "#2563eb",
      color: "#fff",
      borderRadius: "0.5rem",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 style={styles.headerTitle}>Settings</h1>
            <p style={styles.headerSub}>
              Manage your account settings and preferences
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div style={styles.sidebar}>
              <nav>
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={styles.tabButton(activeTab === tab.id)}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <ProfileTab profile={profile} setProfile={setProfile} />
            )}
            {activeTab === "notifications" && (
              <NotificationsTab
                notifications={notifications}
                setNotifications={setNotifications}
              />
            )}
            {activeTab === "preferences" && (
              <PreferencesTab
                preferences={preferences}
                setPreferences={setPreferences}
              />
            )}
            {activeTab === "security" && <SecurityTab />}

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button onClick={handleSave} style={styles.saveBtn}>
                <Save size={20} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
