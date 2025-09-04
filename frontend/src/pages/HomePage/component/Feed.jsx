import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, TrendingUp, Calendar, Tag } from 'lucide-react';

const Feed = ({ selectedFilters }) => {
  const [filteredContent, setFilteredContent] = useState([]);

  // Mock content data
  const mockContent = [
    {
      id: 1,
      title: "Introduction to Machine Learning with Python",
      excerpt: "Learn the fundamentals of machine learning using Python libraries like scikit-learn and pandas. This comprehensive guide covers everything from data preprocessing to model evaluation.",
      type: "article",
      tags: ["Python", "Machine Learning", "Data Science"],
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      trending: true
    },
    {
      id: 2,
      title: "Advanced Data Analysis Techniques",
      excerpt: "Explore advanced statistical methods and data visualization techniques for extracting meaningful insights from complex datasets.",
      type: "research",
      tags: ["Data Analysis", "Statistics", "R Programming"],
      author: "Prof. Michael Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      trending: false
    },
    {
      id: 3,
      title: "Building Modern Web Applications with React",
      excerpt: "A step-by-step tutorial on building scalable web applications using React, Node.js, and modern development practices.",
      type: "tutorial",
      tags: ["JavaScript", "React", "Web Development"],
      author: "Alex Rodriguez",
      date: "2024-01-10",
      readTime: "15 min read",
      trending: true
    },
    {
      id: 4,
      title: "Cybersecurity Fundamentals for Beginners",
      excerpt: "Essential cybersecurity concepts, tools, and best practices for protecting digital assets and maintaining online security.",
      type: "guide",
      tags: ["Cybersecurity", "Network Security", "Linux"],
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      trending: false
    },
    {
      id: 5,
      title: "Deep Learning: From Theory to Practice",
      excerpt: "Comprehensive coverage of deep learning concepts, neural network architectures, and practical implementation using TensorFlow and PyTorch.",
      type: "research",
      tags: ["Deep Learning", "Neural Networks", "AI"],
      author: "Dr. Emily Watson",
      date: "2024-01-05",
      readTime: "20 min read",
      trending: true
    },
    {
      id: 6,
      title: "Data Science Project Portfolio Guide",
      excerpt: "Learn how to build an impressive data science portfolio with real-world projects that showcase your skills to potential employers.",
      type: "guide",
      tags: ["Data Science", "Portfolio", "Career"],
      author: "Dr. Sarah Johnson",
      date: "2024-01-03",
      readTime: "6 min read",
      trending: false
    }
  ];

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredContent(mockContent);
    } else {
      const filtered = mockContent.filter(item => 
        item.tags.some(tag => 
          selectedFilters.some(filter => 
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
      setFilteredContent(filtered);
    }
  }, [selectedFilters]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case 'research':
        return <BookOpen className="w-4 h-4 text-green-600" />;
      case 'tutorial':
        return <TrendingUp className="w-4 h-4 text-purple-600" />;
      case 'guide':
        return <BookOpen className="w-4 h-4 text-orange-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'research':
        return 'bg-green-100 text-green-800';
      case 'tutorial':
        return 'bg-purple-100 text-purple-800';
      case 'guide':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Recommended Content</h2>
        <div className="text-sm text-gray-500">
          {filteredContent.length} articles found
        </div>
      </div>

      {filteredContent.length === 0 ? (
        <div className="card text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-500">
            Try adjusting your filters to see more content
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredContent.map((item) => (
            <div key={item.id} className="card hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {getTypeIcon(item.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    {item.trending && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Trending
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <span>{item.readTime}</span>
                    <span>by {item.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
