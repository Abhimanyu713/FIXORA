import React from 'react';
import { Filter, X } from 'lucide-react';

const Filters = ({ userType, userSkills, selectedFilters, onFilterChange }) => {
  const handleFilterToggle = (skill) => {
    if (selectedFilters.includes(skill)) {
      onFilterChange(selectedFilters.filter(filter => filter !== skill));
    } else {
      onFilterChange([...selectedFilters, skill]);
    }
  };

  const clearAllFilters = () => {
    onFilterChange([]);
  };

  const selectAllFilters = () => {
    onFilterChange([...userSkills]);
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary-600" />
          Filters
        </h3>
        <div className="flex gap-2">
          <button
            onClick={selectAllFilters}
            className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded hover:bg-primary-200 transition-colors"
          >
            All
          </button>
          <button
            onClick={clearAllFilters}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            {userType === 'mentor' ? 'Areas of Proficiency' : 'Things to Learn'}
          </h4>
          
          {userSkills.length === 0 ? (
            <p className="text-sm text-gray-500">No skills available</p>
          ) : (
            <div className="space-y-2">
              {userSkills.map((skill, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(skill)}
                    onChange={() => handleFilterToggle(skill)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {selectedFilters.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Active Filters</h4>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs"
                >
                  {filter}
                  <button
                    onClick={() => handleFilterToggle(filter)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          {userType === 'mentor' 
            ? 'Filter content based on your areas of expertise'
            : 'Filter content based on what you want to learn'
          }
        </p>
      </div>
    </div>
  );
};

export default Filters;
