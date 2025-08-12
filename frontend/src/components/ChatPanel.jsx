import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Bot, User, Lightbulb, Users } from 'lucide-react';

const ChatPanel = ({ userType, userSkills }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Hello! I'm your AI assistant. I can help you with debugging problems, learning guidance, and finding mentors. What would you like to know?`,
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMentorRecommendations, setShowMentorRecommendations] = useState(false);
  const [mentorRecommendations, setMentorRecommendations] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate API call to chat endpoint
      const response = await simulateChatAPI(inputMessage, userType, userSkills);
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.response,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, botMessage]);

      // If the message contains debugging or learning content, show mentor recommendations
      if (inputMessage.toLowerCase().includes('debug') || 
          inputMessage.toLowerCase().includes('learn') || 
          inputMessage.toLowerCase().includes('help')) {
        await showMentorSuggestions(inputMessage);
      }
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateChatAPI = async (message, userType, userSkills) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockResponses = {
      'debug': 'Here\'s a step-by-step debugging approach:\n\n1. **Identify the Problem**: Clearly define what\'s not working\n2. **Check Error Messages**: Look for specific error codes or messages\n3. **Isolate the Issue**: Test components individually\n4. **Use Debugging Tools**: Utilize console logs, breakpoints, or debugging software\n5. **Verify Assumptions**: Check if your assumptions about the system are correct\n6. **Test Fixes**: Implement solutions incrementally and test each change\n\nWould you like me to suggest a mentor who can help you with this specific debugging challenge?',
      'learn': 'Great question! Here\'s a structured learning path:\n\n1. **Start with Fundamentals**: Build a strong foundation in the basics\n2. **Practice Regularly**: Apply what you learn through hands-on projects\n3. **Seek Resources**: Use tutorials, documentation, and online courses\n4. **Join Communities**: Engage with others learning the same topics\n5. **Build Projects**: Create real-world applications to solidify your knowledge\n6. **Get Feedback**: Share your work and learn from others\' input\n\nI can recommend mentors who specialize in these areas if you\'d like!',
      'mentor': 'I\'d be happy to help you find a mentor! Based on your interests and the problem you\'re facing, I can suggest experts who can provide personalized guidance. What specific area are you looking for mentorship in?',
      'general': 'That\'s an interesting question! I can help you with:\n\n• **Debugging problems** - Step-by-step troubleshooting\n• **Learning guidance** - Structured learning paths\n• **Mentor recommendations** - Connect with experts\n• **Technical explanations** - Break down complex concepts\n\nWhat would you like to explore?'
    };
    
    let response = mockResponses.general;
    
    if (message.toLowerCase().includes('debug') || message.toLowerCase().includes('error') || message.toLowerCase().includes('problem')) {
      response = mockResponses.debug;
    } else if (message.toLowerCase().includes('learn') || message.toLowerCase().includes('study') || message.toLowerCase().includes('how to')) {
      response = mockResponses.learn;
    } else if (message.toLowerCase().includes('mentor') || message.toLowerCase().includes('help') || message.toLowerCase().includes('guidance')) {
      response = mockResponses.mentor;
    }
    
    return { response };
  };

  const showMentorSuggestions = async (problemDescription) => {
    try {
      // Simulate API call to get mentor recommendations
      const response = await simulateMentorRecommendations(problemDescription, userType);
      setMentorRecommendations(response.recommendations);
      setShowMentorRecommendations(true);
    } catch (error) {
      console.error('Error getting mentor recommendations:', error);
    }
  };

  const simulateMentorRecommendations = async (problemDescription, userType) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock mentor recommendations based on problem description
    const mockMentors = [
      {
        name: "Dr. Sarah Johnson",
        skills: ["Machine Learning", "Python", "Data Science"],
        education: "PhD",
        college: "MIT"
      },
      {
        name: "Prof. Michael Chen",
        skills: ["Data Analysis", "Statistics", "R Programming"],
        education: "PhD",
        college: "Stanford University"
      },
      {
        name: "Alex Rodriguez",
        skills: ["JavaScript", "React", "Web Development"],
        education: "Post-Graduation",
        college: "UC Berkeley"
      }
    ];
    
    return {
      recommendations: mockMentors,
      problemKeywords: ["debug", "problem", "help"]
    };
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="card h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
        <MessageCircle className="w-5 h-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.type === 'bot' && (
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary-600" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="whitespace-pre-line text-sm">{message.content}</div>
              <div className={`text-xs mt-2 ${
                message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
              }`}>
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
            </div>
            
            {message.type === 'user' && (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-600" />
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Mentor Recommendations */}
      {showMentorRecommendations && mentorRecommendations.length > 0 && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-medium text-blue-900">Recommended Mentors</h4>
          </div>
          <div className="space-y-2">
            {mentorRecommendations.map((mentor, index) => (
              <div key={index} className="text-xs text-blue-800">
                <strong>{mentor.name}</strong> ({mentor.education}, {mentor.college})
                <br />
                <span className="text-blue-600">Skills: {mentor.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          className="input-field flex-1 text-sm"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isLoading}
          className="btn-primary p-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500 mb-2">Quick actions:</div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setInputMessage('I need help debugging a problem')}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
          >
            Debug Help
          </button>
          <button
            onClick={() => setInputMessage('How should I learn this topic?')}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
          >
            Learning Path
          </button>
          <button
            onClick={() => setInputMessage('Find me a mentor')}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
          >
            Find Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
