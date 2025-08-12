import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from '../components/Filters';
import Feed from '../components/Feed';
import ChatPanel from '../components/ChatPanel';
import SearchBar from '../components/SearchBar';
import { LogOut, User, BookOpen, GraduationCap, Search } from 'lucide-react';

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData);
      // Set initial filters based on user type
      if (parsedData.type === 'mentor') {
        setSelectedFilters(parsedData.areasOfProficiency || []);
      } else {
        setSelectedFilters(parsedData.thingsToLearn || []);
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleSearch = (mentor) => {
    // Handle mentor selection from search
    console.log('Selected mentor:', mentor);
    // You can implement navigation to mentor profile or other actions here
  };

  if (!userData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-primary-600">Fixora</span>
              </h1>
            </div>
            
            {/* Search Bar - Center */}
            <div className="flex-1 max-w-2xl mx-8">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center gap-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-text text-left"
              >
                <Search className="w-5 h-5 text-gray-400" />
                <span className="text-gray-500">Search mentors by name or skills...</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                {userData.type === 'mentor' ? (
                  <GraduationCap className="w-5 h-5 text-primary-600" />
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Filters */}
          <div className="lg:col-span-3">
            <Filters
              userType={userData.type}
              userSkills={userData.type === 'mentor' ? userData.areasOfProficiency : userData.thingsToLearn}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Middle Panel - Feed */}
          <div className="lg:col-span-6">
            <Feed selectedFilters={selectedFilters} />
          </div>

          {/* Right Panel - Chat */}
          <div className="lg:col-span-3">
            <ChatPanel userType={userData.type} userSkills={selectedFilters} />
          </div>
        </div>
      </div>

      {/* Search Bar Modal */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default HomePage;
