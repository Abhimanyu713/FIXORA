const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data storage using JSON files
const dataDir = path.join(__dirname, 'data');
const mentorsFile = path.join(dataDir, 'mentors.json');
const menteesFile = path.join(dataDir, 'chat.json');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Initialize JSON files if they don't exist
if (!fs.existsSync(mentorsFile)) {
  fs.writeFileSync(mentorsFile, JSON.stringify([], null, 2));
}
if (!fs.existsSync(menteesFile)) {
  fs.writeFileSync(menteesFile, JSON.stringify([], null, 2));
}

// Helper functions for JSON file operations
const readData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing to file:', error);
    return false;
  }
};

// Mentor routes
app.get('/api/mentors', (req, res) => {
  try {
    const mentors = readData(mentorsFile);
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentors' });
  }
});

app.get('/api/mentors/skills/:skill', (req, res) => {
  try {
    const mentors = readData(mentorsFile);
    const skill = req.params.skill.toLowerCase();
    const filteredMentors = mentors.filter(mentor =>
      mentor.areasOfProficiency.some(area => 
        area.toLowerCase().includes(skill)
      )
    );
    res.json(filteredMentors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentors by skill' });
  }
});

app.post('/api/mentors', (req, res) => {
  try {
    const mentors = readData(mentorsFile);
    const newMentor = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    mentors.push(newMentor);
    writeData(mentorsFile, mentors);
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mentor' });
  }
});

app.get('/api/mentors/:id', (req, res) => {
  try {
    const mentors = readData(mentorsFile);
    const mentor = mentors.find(m => m.id === req.params.id);
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }
    res.json(mentor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentor' });
  }
});

// Mentee routes
app.get('/api/mentees', (req, res) => {
  try {
    const mentees = readData(menteesFile);
    res.json(mentees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentees' });
  }
});

app.post('/api/mentees', (req, res) => {
  try {
    const mentees = readData(menteesFile);
    const newMentee = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    mentees.push(newMentee);
    writeData(menteesFile, mentees);
    res.status(201).json(newMentee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mentee' });
  }
});

app.get('/api/mentees/:id', (req, res) => {
  try {
    const mentees = readData(menteesFile);
    const mentee = mentees.find(m => m.id === req.params.id);
    if (!mentee) {
      return res.status(404).json({ error: 'Mentee not found' });
    }
    res.json(mentee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mentee' });
  }
});

// Chat routes
app.post('/api/chat', async (req, res) => {
  try {
    const { message, userType, userSkills } = req.body;
    
    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let response = "I'm here to help! What would you like to learn about?";
    
    if (message.toLowerCase().includes('python')) {
      response = "Python is a great programming language! It's excellent for beginners and widely used in data science, web development, and automation. Would you like me to suggest some learning resources or connect you with a Python mentor?";
    } else if (message.toLowerCase().includes('machine learning')) {
      response = "Machine Learning is fascinating! It involves teaching computers to learn from data. Key areas include supervised learning, unsupervised learning, and deep learning. I can recommend some mentors who specialize in ML.";
    } else if (message.toLowerCase().includes('data analysis')) {
      response = "Data Analysis is crucial in today's data-driven world! It involves collecting, cleaning, and interpreting data to make informed decisions. Tools like Python, R, and SQL are essential. Let me find you a data analysis expert!";
    }
    
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

app.post('/api/chat/recommend-mentor', async (req, res) => {
  try {
    const { problemDescription } = req.body;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mentors = readData(mentorsFile);
    const keywords = problemDescription.toLowerCase().split(' ');
    
    // Find mentors with matching skills
    const matchingMentors = mentors.filter(mentor =>
      mentor.areasOfProficiency.some(skill =>
        keywords.some(keyword => skill.toLowerCase().includes(keyword))
      )
    ).slice(0, 3);
    
    if (matchingMentors.length === 0) {
      // Return mock mentors if no real ones exist
      const mockMentors = [
        {
          id: 'mock1',
          name: 'Dr. Sarah Johnson',
          education: 'post-graduation',
          college: 'MIT',
          stream: 'Computer Science',
          areasOfProficiency: ['Python', 'Machine Learning', 'Data Science'],
          rating: 4.8
        },
        {
          id: 'mock2',
          name: 'Prof. Michael Chen',
          education: 'phd',
          college: 'Stanford University',
          stream: 'Data Science',
          areasOfProficiency: ['Data Analysis', 'Statistics', 'Python'],
          rating: 4.9
        }
      ];
      return res.json({ mentors: mockMentors });
    }
    
    res.json({ mentors: matchingMentors });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get mentor recommendations' });
  }
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch all handler for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`JSON-based server running on port ${PORT}`);
  console.log(`No MongoDB required! Data stored in: ${dataDir}`);
});
