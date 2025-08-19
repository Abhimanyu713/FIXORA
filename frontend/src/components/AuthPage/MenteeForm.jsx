import React, { useState } from 'react';
import { Plus, X, BookOpen } from 'lucide-react';

const MenteeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    age: '',
    thingsToLearn: []
  });

  const [newLearning, setNewLearning] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addLearning = () => {
    if (newLearning.trim() && !formData.thingsToLearn.includes(newLearning.trim())) {
      setFormData(prev => ({
        ...prev,
        thingsToLearn: [...prev.thingsToLearn, newLearning.trim()]
      }));
      setNewLearning('');
    }
  };

  const removeLearning = (learningToRemove) => {
    setFormData(prev => ({
      ...prev,
      thingsToLearn: prev.thingsToLearn.filter(learning => learning !== learningToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.thingsToLearn.length === 0) {
      alert('Please add at least one thing you want to learn');
      return;
    }

    onSubmit({
      ...formData,
      age: parseInt(formData.age)
    });
  };

  const isFormValid = formData.name && formData.college && formData.age && formData.thingsToLearn.length > 0;

  return (
    <div className="card">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Mentee Registration</h2>
        <p className="text-gray-600 mt-2">Start your learning journey with expert guidance</p>
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
            min="16"
            max="100"
            required
          />
        </div>

        {/* Things to Learn */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Things You Want to Learn *
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newLearning}
              onChange={(e) => setNewLearning(e.target.value)}
              className="input-field flex-1"
              placeholder="e.g., Python, Machine Learning, Web Development"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLearning())}
            />
            <button
              type="button"
              onClick={addLearning}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {formData.thingsToLearn.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.thingsToLearn.map((learning, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {learning}
                  <button
                    type="button"
                    onClick={() => removeLearning(learning)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
          <p className="text-sm text-gray-500 mt-1">
            Add at least one thing you want to learn
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
            isFormValid
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Start Learning Journey
        </button>
      </form>
    </div>
  );
};

export default MenteeForm;
