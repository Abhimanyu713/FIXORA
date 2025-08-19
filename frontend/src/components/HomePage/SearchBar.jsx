import React, { useState, useEffect, useRef } from 'react';
import { Search, X, User, GraduationCap, MapPin, Filter } from 'lucide-react';

const SearchBar = ({ isOpen, onClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchMode, setSearchMode] = useState('all'); // 'all', 'name', 'skills'
  const searchInputRef = useRef(null);

  const commonSkills = [
    // Programming Languages
    'JavaScript', 'Python', 'Java', 'C#', 'C++', 'Go', 'Kotlin', 'Swift', 'TypeScript',
    
    // Web Development
    'React', 'Node.js', 'Vue.js', 'Angular', 'Next.js', 'Full Stack Development', 
    'Frontend Development', 'Backend Development', 'Web Development',
    
    // Mobile Development
    'Mobile Development', 'React Native', 'iOS Development', 'Android Development', 
    'Flutter', 'Cross-platform',
    
    // AI & Machine Learning
    'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Computer Vision',
    'Natural Language Processing', 'Neural Networks', 'TensorFlow', 'PyTorch',
    
    // Data & Analytics
    'Data Science', 'Data Analysis', 'Big Data', 'Statistics', 'R Programming',
    'Data Engineering', 'Business Intelligence',
    
    // Cloud & DevOps
    'Cloud Computing', 'AWS', 'Azure', 'Google Cloud Platform', 'DevOps', 'Docker',
    'Kubernetes', 'CI/CD', 'Infrastructure as Code',
    
    // Database & Data
    'Database', 'Database Design', 'SQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'MySQL',
    'Data Modeling', 'ETL', 'Data Warehousing',
    
    // Design & UX
    'UI/UX Design', 'UI/UX', 'Figma', 'Adobe Creative Suite', 'User Research',
    'Prototyping', 'Design Systems',
    
    // Security & Emerging Tech
    'Cybersecurity', 'Network Security', 'Blockchain', 'Smart Contracts', 'Game Development',
    'Unity', 'Unreal Engine', 'Quantum Computing'
  ];

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim() || selectedSkills.length > 0) {
        setIsLoading(true);
        try {
          const params = new URLSearchParams();
          
          // If search query is provided, treat it as a general search (name + skills)
          if (searchQuery.trim()) {
            params.append('query', searchQuery.trim());
          }
          
          // Add selected skills as additional filters
          if (selectedSkills.length > 0) {
            params.append('skills', selectedSkills.join(','));
          }
          
          const response = await fetch(`/api/mentors/search?${params}`);
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, selectedSkills]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Auto-detect if user is typing a skill name
    const isTypingSkill = commonSkills.some(skill => 
      skill.toLowerCase().includes(value.toLowerCase())
    );
    
    if (value.trim() && isTypingSkill) {
      setSearchMode('skills');
    } else if (value.trim()) {
      setSearchMode('all');
    }
    
    // Clear results when clearing search
    if (!value.trim()) {
      setSearchResults([]);
    }
  };

  const handleResultClick = (mentor) => {
    onSearch(mentor);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedSkills([]);
    setSearchResults([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Search Mentors</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search mentors by name or skills (e.g., Machine Learning, React, Python)..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {/* Search Mode Indicator */}
          {searchQuery && (
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>
                {searchMode === 'skills' 
                  ? `Searching for mentors with skills matching "${searchQuery}"`
                  : `Searching for mentors with name or skills matching "${searchQuery}"`
                }
              </span>
            </div>
          )}
        </div>

        {/* Skills Filter */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Quick Filter by Skills</h3>
            {selectedSkills.length > 0 && (
              <button
                onClick={() => setSelectedSkills([])}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {commonSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillToggle(skill)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSkills.includes(skill)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Found {searchResults.length} mentor(s)
                </h3>
                {(searchQuery || selectedSkills.length > 0) && (
                  <div className="text-sm text-gray-600">
                    {searchQuery && <span>Search: "{searchQuery}"</span>}
                    {searchQuery && selectedSkills.length > 0 && <span> + </span>}
                    {selectedSkills.length > 0 && (
                      <span>Skills: {selectedSkills.join(', ')}</span>
                    )}
                  </div>
                )}
              </div>
              {searchResults.map((mentor) => (
                <div
                  key={mentor._id}
                  onClick={() => handleResultClick(mentor)}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {mentor.name}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          {mentor.education}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {mentor.college}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mentor.areasOfProficiency.slice(0, 5).map((skill, index) => {
                          const isMatchingSkill = (searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                                                 selectedSkills.includes(skill);
                          return (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs rounded-full font-medium ${
                                isMatchingSkill
                                  ? 'bg-green-100 text-green-800 border-2 border-green-300 shadow-sm'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {skill}
                              {isMatchingSkill && (
                                <span className="ml-1 text-green-600">✓</span>
                              )}
                            </span>
                          );
                        })}
                        {mentor.areasOfProficiency.length > 5 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{mentor.areasOfProficiency.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (searchQuery.trim() || selectedSkills.length > 0) ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No mentors found matching your criteria</p>
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your search terms or skills. You can search by:
              </p>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>• Mentor names (e.g., "Sarah", "Dr. Johnson")</li>
                <li>• Skills (e.g., "Machine Learning", "React", "Python")</li>
                <li>• Use the skill filters below for more specific results</li>
              </ul>
            </div>
          ) : (
            <div className="text-center py-8">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Start typing to search for mentors</p>
              <p className="text-gray-400 text-sm mt-2">
                Search by name, skills, or use the skill filters below
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg max-w-md mx-auto">
                <p className="text-sm text-gray-600 mb-2">Examples:</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Type "Machine Learning" to find ML experts</li>
                  <li>• Type "React" to find frontend developers</li>
                  <li>• Type "Python" to find Python developers</li>
                  <li>• Or click skill tags below for instant filtering</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
