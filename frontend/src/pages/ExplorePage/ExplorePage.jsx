import React, { useState } from 'react';
import { Search, Sliders, Star, MapPin, Briefcase, Users, Clock } from 'lucide-react';
import Navbar from '../CommonComponent/Navbar';

const MentorExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const filters = [
    { id: 'All', label: 'All', icon: '👥' },
    { id: 'New', label: 'New', icon: '🆕' },
    { id: 'Available ASAP', label: 'Available ASAP', icon: '⚡' },
    { id: 'Notable', label: 'Notable', icon: '⭐' },
    { id: 'AI', label: 'AI', icon: '🤖' },
    { id: 'Soft Skills', label: 'Soft Skills', icon: '📝' },
    { id: 'Design', label: 'Design', icon: '🎨' },
    { id: 'Product', label: 'Product', icon: '📦' },
    { id: 'Engineering', label: 'Engineering', icon: '💻' },
    { id: 'Marketing', label: 'Marketing', icon: '📊' },
    { id: 'Data Science', label: 'Data Science', icon: '📈' },
    { id: 'Content Writing', label: 'Content Writing', icon: '✍️' },
    { id: 'No/Low Code', label: 'No/Low Code', icon: '👁️' },
    { id: 'Product Research', label: 'Product Research', icon: '🔍' },
    { id: 'Sales', label: 'Sales', icon: '💼' }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Sunil Subramanian',
      title: 'LinkedIn Top Voice| Head of Product at Volvo',
      location: 'SE',
      image: '/api/placeholder/300/300',
      sessions: 145,
      reviews: 34,
      experience: '16 years',
      attendance: '94%',
      isTopRated: true,
      isAdvanced: true,
      availableASAP: false
    },
    {
      id: 2,
      name: 'Omar El Nabalawy',
      title: 'Senior Product Designer at Master Works | Riyadh',
      location: 'EG',
      image: '/api/placeholder/300/300',
      sessions: 65,
      reviews: 29,
      experience: '7 years',
      attendance: '100%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: false
    },
    {
      id: 3,
      name: 'Teo Akinola',
      title: 'Innovation Manager + eSourcing SME at Ericsson',
      location: 'RO',
      image: '/api/placeholder/300/300',
      sessions: 14,
      reviews: 2,
      experience: '12 years',
      attendance: '100%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: true
    },
    {
      id: 4,
      name: 'Tasawwer Khurshid',
      title: 'Principle UX Consultant at Systems Limited',
      location: 'AE',
      image: '/api/placeholder/300/300',
      sessions: 360,
      reviews: 40,
      experience: '13 years',
      attendance: '79%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: true
    },
    {
      id: 5,
      name: 'Nihar Malali',
      title: 'Principal Solutions Architect | Senior Director | Senior...',
      location: 'US',
      image: '/api/placeholder/300/300',
      sessions: 164,
      reviews: 3,
      experience: '21 years',
      attendance: '86%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: true
    },
    {
      id: 6,
      name: 'Leyla Aliyeva',
      title: 'Product implementation specialist at The Central Bank of Azerbaijan',
      location: 'AZ',
      image: '/api/placeholder/300/300',
      sessions: 3,
      reviews: 1,
      experience: 'Senior',
      attendance: '83%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: false
    },
    {
      id: 7,
      name: 'Swati Shukla',
      title: 'Senior Product Manager at Amazon',
      location: 'US',
      image: '/api/placeholder/300/300',
      sessions: 89,
      reviews: 25,
      experience: '8 years',
      attendance: '92%',
      isTopRated: true,
      isAdvanced: true,
      availableASAP: false
    },
    {
      id: 8,
      name: 'RAJESH KUMAR MALVIYA',
      title: 'Enterprise Architect at NTT Data',
      location: 'US',
      image: '/api/placeholder/300/300',
      sessions: 115,
      reviews: 0,
      experience: '15 years',
      attendance: '88%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: true
    },
    {
      id: 9,
      name: 'Shubham Sharma',
      title: 'Senior Consultant at Xebia IT Architects',
      location: 'IN',
      image: '/api/placeholder/300/300',
      sessions: 67,
      reviews: 12,
      experience: '9 years',
      attendance: '95%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: true
    },
    {
      id: 10,
      name: 'Yeshwanth Vasa',
      title: 'Software Engineer at Miracles Tek LLC',
      location: 'US',
      image: '/api/placeholder/300/300',
      sessions: 43,
      reviews: 8,
      experience: '6 years',
      attendance: '91%',
      isTopRated: false,
      isAdvanced: false,
      availableASAP: false
    },
    {
      id: 11,
      name: 'Behrang Fatemi',
      title: 'Sr PM at SA Health',
      location: 'AU',
      image: '/api/placeholder/300/300',
      sessions: 104,
      reviews: 18,
      experience: '12 years',
      attendance: '87%',
      isTopRated: false,
      isAdvanced: true,
      availableASAP: false
    },
    {
      id: 12,
      name: 'Mehmet Ergene',
      title: 'Associate Experience Director at MRM GmbH',
      location: 'DE',
      image: '/api/placeholder/300/300',
      sessions: 78,
      reviews: 14,
      experience: '10 years',
      attendance: '94%',
      isTopRated: false,
      isAdvanced: true,
      availableASAP: false
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'Available ASAP') return matchesSearch && mentor.availableASAP;
    if (activeFilter === 'New') return matchesSearch && mentor.sessions < 20;
    
    return matchesSearch;
  });

  return (
    <>
    <Navbar/>

       <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-8 mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
              Mentors
            </h1>
            <h2 className="text-2xl font-medium text-gray-400">Group Sessions</h2>
          </div>
          
          {/* Search and Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, company, role"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-sm">✨</span>
                <span>Try AI Search</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">New</span>
                <label className="flex items-center gap-2 text-sm">
                  <span>Display advanced sessions</span>
                  <span className="text-gray-400">| Commit to long term</span>
                  <input
                    type="checkbox"
                    checked={showAdvanced}
                    onChange={(e) => setShowAdvanced(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </label>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Sliders className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                activeFilter === filter.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-base">{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              {/* Image and Badges */}
              <div className="relative h-48 bg-gray-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {mentor.isTopRated && (
                    <span className="px-2 py-1 bg-black text-white text-xs rounded">
                      Top rated
                    </span>
                  )}
                </div>
                
                <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                  {mentor.availableASAP && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Available ASAP
                    </span>
                  )}
                  {mentor.isAdvanced && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      ⚡ Advanced
                    </span>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {mentor.name}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-1 py-0.5 rounded">
                    {mentor.location}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  <Briefcase className="w-3 h-3 text-gray-400" />
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {mentor.title}
                  </p> 
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  <Users className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600">
                    {mentor.sessions} sessions ({mentor.reviews} reviews)
                  </span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-gray-500">Experience</div>
                    <div className="font-medium text-gray-900">{mentor.experience}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Avg. Attendance</div>
                    <div className="font-medium text-gray-900">{mentor.attendance}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>  );
 
};

export default MentorExplorePage;