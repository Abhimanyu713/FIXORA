import React, { useState } from 'react';
import { Plus, X, GraduationCap } from 'lucide-react';

const MentorForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    college: '',
    stream: '',
    areasOfProficiency: []
  });

  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.areasOfProficiency.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        areasOfProficiency: [...prev.areasOfProficiency, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      areasOfProficiency: prev.areasOfProficiency.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.areasOfProficiency.length === 0) {
      alert('Please add at least one area of proficiency');
      return;
    }

    onSubmit({
      ...formData,
      age: parseInt(formData.age)
    });
  };

  const isFormValid = formData.name && formData.age && formData.education && 
                     formData.college && formData.stream && formData.areasOfProficiency.length > 0;

  return (
    <div className="card">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <GraduationCap className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Mentor Registration</h2>
        <p className="text-gray-600 mt-2">Share your expertise and help others grow</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your age"
            min="18"
            max="100"
            required
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
            Highest Education Level *
          </label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="">Select education level</option>
            <option value="graduation">Graduation</option>
            <option value="post-graduation">Post-Graduation</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* College */}
        <div>
          <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
            College/University *
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your college/university name"
            required
          />
        </div>

        {/* Stream */}
        <div>
          <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-2">
            Field of Study *
          </label>
          <input
            type="text"
            id="stream"
            name="stream"
            value={formData.stream}
            onChange={handleInputChange}
            className="input-field"
            placeholder="e.g., Computer Science, Data Science, Engineering"
            required
          />
        </div>

        {/* Areas of Proficiency */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Areas of Proficiency *
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="input-field flex-1"
              placeholder="e.g., Python, Machine Learning, Data Analysis"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
            />
            <button
              type="button"
              onClick={addSkill}
              className="btn-primary px-4 py-2"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {formData.areasOfProficiency.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.areasOfProficiency.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
          <p className="text-sm text-gray-500 mt-1">
            Add at least one area of proficiency
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
            isFormValid
              ? 'bg-primary-600 hover:bg-primary-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Complete Registration
        </button>
      </form>
    </div>
  );
};

export default MentorForm;
