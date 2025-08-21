import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../components/HomePage/Filters";
import Feed from "../components/HomePage/Feed";
import ChatPanel from "../components/HomePage/ChatPanel";
import SearchBar from "../components/HomePage/SearchBar";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      backgroundColor: "#f9fafb" // gray-50
    },
    sidebar: {
      width: "60px",
      backgroundColor: "#fff",
      borderRight: "1px solid #e5e7eb", // gray-200
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%"
    },
    main: {
      flex: 1,
      marginLeft: "60px" // shift right equal to sidebar width
    },
    header: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
      height: "64px",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#111827" // gray-900
    },
    content: {
      padding: "24px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr 1fr",
      gap: "24px"
    }
  };

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
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Sidebar Navbar */}
      {/* <aside style={styles.sidebar}>
        <Navbar />
      </aside> */}

      {/* Main Section */}
      <div style={styles.main}>
        {/* Header */}
        <Navbar />

      

        {/* Content */}
        <div style={styles.content}>
          <div style={styles.grid}>
            {/* Filters */}
            <div>
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
            <div>
              <Feed selectedFilters={selectedFilters} />
            </div>

            {/* Chat */}
            <div>
              <ChatPanel userType={userData.type} userSkills={selectedFilters} />
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
