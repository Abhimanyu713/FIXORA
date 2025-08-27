import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Clock, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Users, 
  MessageCircle, 
  Video, 
  Phone,
  Mail,
  LinkedinIcon,
  TwitterIcon,
  Globe,
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Heart,
  Share2,
  Flag
} from 'lucide-react';

const MentorDetailPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Sample mentor data
  const mentor = {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "Google",
    avatar: null,
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 127,
    experience: 8,
    mentees: 45,
    responseTime: "Within 2 hours",
    languages: ["English", "Mandarin", "Spanish"],
    timezone: "PST (UTC-8)",
    hourlyRate: 85,
    bio: "Passionate product manager with 8+ years of experience building world-class products at Google, Facebook, and startups. I specialize in product strategy, user research, and team leadership. I love helping aspiring PMs break into tech and advance their careers.",
    expertise: [
      "Product Management",
      "Product Strategy", 
      "User Research",
      "Team Leadership",
      "Agile/Scrum",
      "Data Analysis",
      "Go-to-Market Strategy",
      "Stakeholder Management"
    ],
    education: [
      {
        degree: "MBA",
        school: "Stanford Graduate School of Business",
        year: "2018"
      },
      {
        degree: "BS Computer Science",
        school: "UC Berkeley",
        year: "2014"
      }
    ],
    workExperience: [
      {
        role: "Senior Product Manager",
        company: "Google",
        duration: "2020 - Present",
        description: "Leading product strategy for Google Search features with 1B+ users"
      },
      {
        role: "Product Manager",
        company: "Facebook",
        duration: "2018 - 2020",
        description: "Managed Instagram Shopping features, driving 40% increase in conversion"
      },
      {
        role: "Associate Product Manager",
        company: "Uber",
        duration: "2016 - 2018",
        description: "Built rider experience features for Uber's core platform"
      }
    ],
    achievements: [
      "Led product launch that generated $50M in revenue",
      "Managed cross-functional team of 15+ engineers and designers",
      "Speaker at ProductCon 2023",
      "Mentor of the Year - TechMentors 2022"
    ],
    availability: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 1:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 3:00 PM",
      weekend: "By appointment"
    },
    sessionTypes: [
      {
        type: "1-on-1 Mentoring",
        duration: "60 min",
        price: 85,
        description: "Deep-dive career coaching and strategic guidance"
      },
      {
        type: "Resume Review",
        duration: "30 min", 
        price: 45,
        description: "Comprehensive review and feedback on your resume"
      },
      {
        type: "Mock Interview",
        duration: "45 min",
        price: 65,
        description: "Practice PM interviews with detailed feedback"
      },
      {
        type: "Portfolio Review",
        duration: "60 min",
        price: 85,
        description: "Review and optimize your PM portfolio/case studies"
      }
    ],
    reviews: [
      {
        id: 1,
        name: "Alex Thompson",
        rating: 5,
        date: "2 weeks ago",
        comment: "Sarah provided incredible insights into product strategy. Her feedback helped me land my dream PM job at Microsoft!"
      },
      {
        id: 2,
        name: "Maria Rodriguez",
        rating: 5,
        date: "1 month ago",
        comment: "Excellent mentor! Very patient and knowledgeable. The mock interviews were extremely helpful."
      },
      {
        id: 3,
        name: "David Kim",
        rating: 4,
        date: "2 months ago",
        comment: "Great session on product roadmapping. Sarah's real-world examples made complex concepts easy to understand."
      }
    ]
  };

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'availability', label: 'Availability' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const renderAboutTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Target className="mr-2" size={20} />
          Areas of Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Award className="mr-2" size={20} />
          Key Achievements
        </h3>
        <ul className="space-y-3">
          {mentor.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mt-0.5 mr-3 flex-shrink-0" size={16} />
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderExperienceTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2" size={20} />
          Work Experience
        </h3>
        <div className="space-y-6">
          {mentor.workExperience.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-blue-200 last:border-l-0">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div>
                <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <GraduationCap className="mr-2" size={20} />
          Education
        </h3>
        <div className="space-y-4">
          {mentor.education.map((edu, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAvailabilityTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          Weekly Availability
        </h3>
        <div className="grid gap-3">
          {Object.entries(mentor.availability).map(([day, hours]) => (
            <div key={day} className="flex justify-between items-center py-2 px-4 bg-gray-50 rounded-lg">
              <span className="font-medium capitalize text-gray-900">{day}</span>
              <span className="text-gray-600">{hours}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2" size={20} />
          Session Types & Pricing
        </h3>
        <div className="grid gap-4">
          {mentor.sessionTypes.map((session, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{session.type}</h4>
                <div className="text-right">
                  <span className="text-2xl font-bold text-blue-600">${session.price}</span>
                  <p className="text-sm text-gray-500">{session.duration}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{session.description}</p>
              <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderReviewsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Reviews & Ratings</h3>
          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars(mentor.rating)}</div>
            <span className="font-semibold">{mentor.rating}</span>
            <span className="text-gray-500">({mentor.reviewCount} reviews)</span>
          </div>
        </div>

        <div className="space-y-4">
          {mentor.reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-700 ml-13">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Mentor Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-8">
              <div className="p-6">
                {/* Avatar and Basic Info */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">SC</span>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">{mentor.name}</h1>
                  <p className="text-blue-600 font-medium mb-2">{mentor.title}</p>
                  <p className="text-gray-600 mb-4">{mentor.company}</p>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {mentor.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {renderStars(mentor.rating)}
                    <span className="ml-2 font-semibold">{mentor.rating}</span>
                    <span className="text-gray-500">({mentor.reviewCount})</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{mentor.experience}</div>
                    <div className="text-sm text-gray-600">Years Exp.</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{mentor.mentees}</div>
                    <div className="text-sm text-gray-600">Mentees</div>
                  </div>
                </div>

                {/* Key Details */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Clock size={16} className="mr-2" />
                      Response time:
                    </span>
                    <span className="font-medium">{mentor.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Globe size={16} className="mr-2" />
                      Languages:
                    </span>
                    <span className="font-medium">{mentor.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Timezone:
                    </span>
                    <span className="font-medium">{mentor.timezone}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                    <Calendar className="mr-2" size={18} />
                    Book Session
                  </button>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center">
                    <MessageCircle className="mr-2" size={18} />
                    Send Message
                  </button>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`flex-1 py-2 px-4 rounded-lg border transition-colors flex items-center justify-center ${
                        isBookmarked 
                          ? 'bg-red-50 border-red-200 text-red-600' 
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Heart size={18} className={isBookmarked ? 'fill-current' : ''} />
                    </button>
                    <button className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <Share2 size={18} />
                    </button>
                    <button className="flex-1 py-2 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <Flag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-sm border mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === 'about' && renderAboutTab()}
              {activeTab === 'experience' && renderExperienceTab()}
              {activeTab === 'availability' && renderAvailabilityTab()}
              {activeTab === 'reviews' && renderReviewsTab()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailPage;






