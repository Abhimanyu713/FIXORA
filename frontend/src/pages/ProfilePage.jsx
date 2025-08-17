import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, GraduationCap, BookOpen, Edit3, Coins } from "lucide-react";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "John Doe",
    type: "mentee", // or 'mentor'
    email: "john@example.com",
    phone: "+91 9876543210",
    college: "MIT",
    stream: "Computer Science",
    education: "Graduation",
    yearsOfExperience: 2,
    skills: ["JavaScript", "React", "Node.js"],
    coins: 120,
    bio: "Passionate learner, focused on improving frontend development skills.",
    profilePhoto:
      "https://i.pravatar.cc/150?img=32", // random avatar
  });

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleEdit = () => {
    alert("Edit profile clicked! (you can integrate modal or form here)");
  };

  return (
    <div className="min-h-screen bg-gray-50">

          {/* Navbar - Fixed Left Side */}
            <aside className="w-15 bg-white border-r border-gray-200  fixed top-0 left-0 h-full">
              <Navbar />
            </aside>
      
      {/* Header */}


      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">SolutionSphere</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                {userData.type === "mentor" ? (
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                ) : (
                  <BookOpen className="w-5 h-5 text-green-600" />
                )}
                <span className="font-medium">{userData.name}</span>
                <span className="text-sm text-gray-500">({userData.type})</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          {/* Profile Photo + Info */}
          <div className="flex flex-col items-center">
            <img
              src={userData.profilePhoto}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-100 object-cover"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-900">{userData.name}</h2>
            <p className="text-gray-500">{userData.email}</p>
            <p className="text-gray-500">{userData.phone}</p>
            <span className="mt-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm capitalize">
              {userData.type}
            </span>

            {/* Coins */}
            <div className="flex items-center gap-1 mt-3 text-yellow-600 font-semibold">
              <Coins className="w-5 h-5" /> {userData.coins} Coins Left
            </div>

            {/* Edit Button */}
            <button
              onClick={handleEdit}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            >
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">About Me</h3>
            <p className="mt-2 text-gray-600">{userData.bio}</p>
          </div>

          {/* Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-gray-500">College</h4>
              <p className="font-medium text-gray-900">{userData.college}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Stream</h4>
              <p className="font-medium text-gray-900">{userData.stream}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Education</h4>
              <p className="font-medium text-gray-900">{userData.education}</p>
            </div>
            {userData.type === "mentor" && (
              <div>
                <h4 className="text-sm text-gray-500">Years of Experience</h4>
                <p className="font-medium text-gray-900">{userData.yearsOfExperience}</p>
              </div>
            )}
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {userData.type === "mentor" ? "Areas of Proficiency" : "Things to Learn"}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {userData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
