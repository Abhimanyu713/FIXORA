import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MentorForm from '../components/MentorForm';
import MenteeForm from '../components/MenteeForm';
import { Users, GraduationCap, BookOpen } from 'lucide-react';

const LoginPage = () => {
  const [userType, setUserType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setShowForm(true);
  };

  const handleFormSubmit = (userData) => {
    // Store user data in localStorage for demo purposes
    localStorage.setItem('userData', JSON.stringify({ ...userData, type: userType }));
    navigate('/home');
  };

  const handleBackToSelection = () => {
    setUserType('');
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <button
            onClick={handleBackToSelection}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors"
          >
            ← Back to selection
          </button>
          
          {userType === 'mentor' ? (
            <MentorForm onSubmit={handleFormSubmit} />
          ) : (
            <MenteeForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-primary-600">Fixora</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with mentors and mentees to accelerate your learning journey
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mentor Card */}
          <div 
            className="card cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            onClick={() => handleUserTypeSelect('mentor')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">I'm a Mentor</h3>
              <p className="text-gray-600 mb-4">
                Share your expertise and help others grow in their learning journey
              </p>
              <div className="text-sm text-gray-500">
                <p>• Share your knowledge</p>
                <p>• Connect with mentees</p>
                <p>• Build your network</p>
              </div>
            </div>
          </div>

          {/* Mentee Card */}
          <div 
            className="card cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            onClick={() => handleUserTypeSelect('mentee')}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">I'm a Mentee</h3>
              <p className="text-gray-600 mb-4">
                Find mentors and accelerate your learning with expert guidance
              </p>
              <div className="text-sm text-gray-500">
                <p>• Learn from experts</p>
                <p>• Get personalized guidance</p>
                <p>• Accelerate your growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>Choose your role to get started with Fixora</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
