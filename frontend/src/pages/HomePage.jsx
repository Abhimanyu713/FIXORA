import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../components/Filters";
import Feed from "../components/Feed";
import ChatPanel from "../components/ChatPanel";
import SearchBar from "../components/SearchBar";
import { LogOut, User, BookOpen, GraduationCap, Search } from "lucide-react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
      if (parsedData.type === "mentor") {
        setSelectedFilters(parsedData.areasOfProficiency || []);
      } else {
        setSelectedFilters(parsedData.thingsToLearn || []);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleSearch = (mentor) => {
    console.log("Selected mentor:", mentor);
  };

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Navbar - Fixed Left Side */}
      <aside className="w-15 bg-white border-r border-gray-200  fixed top-0 left-0 h-full">
        <Navbar />
      </aside>

      {/* Main Section shifted to the right */}
      <div className="flex-1 ml-14">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 ">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  <span className="text-primary-600">Fixora</span>
                </h1>
              </div>
              {/* ... rest of your header code */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Filters */}
            <div className="lg:col-span-3">
              <Filters
                userType={userData.type}
                userSkills={
                  userData.type === "mentor"
                    ? userData.areasOfProficiency
                    : userData.thingsToLearn
                }
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Feed */}
            <div className="lg:col-span-6">
              <Feed selectedFilters={selectedFilters} />
            </div>

            {/* Chat */}
            <div className="lg:col-span-3">
              <ChatPanel
                userType={userData.type}
                userSkills={selectedFilters}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default HomePage;
