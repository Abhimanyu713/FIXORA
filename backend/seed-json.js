const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const mentorsFile = path.join(dataDir, 'mentors.json');
const menteesFile = path.join(dataDir, 'mentees.json');

// Sample mentor data
const mentors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    age: 32,
    education: 'post-graduation',
    college: 'MIT',
    stream: 'Computer Science',
    areasOfProficiency: ['Python', 'Machine Learning', 'Data Science', 'Deep Learning'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    age: 45,
    education: 'phd',
    college: 'Stanford University',
    stream: 'Data Science',
    areasOfProficiency: ['Data Analysis', 'Statistics', 'Python', 'R', 'SQL'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Alex Rodriguez',
    age: 28,
    education: 'graduation',
    college: 'UC Berkeley',
    stream: 'Software Engineering',
    areasOfProficiency: ['JavaScript', 'React', 'Node.js', 'Web Development'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Dr. Emily Watson',
    age: 38,
    education: 'phd',
    college: 'Harvard University',
    stream: 'Artificial Intelligence',
    areasOfProficiency: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'Python'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'James Wilson',
    age: 26,
    education: 'graduation',
    college: 'Georgia Tech',
    stream: 'Information Technology',
    areasOfProficiency: ['Cybersecurity', 'Network Security', 'Linux', 'Python'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Sample mentee data
const mentees = [
  {
    id: '1',
    name: 'Maria Garcia',
    college: 'University of Texas',
    age: 20,
    thingsToLearn: ['Python', 'Data Analysis', 'Machine Learning'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'David Kim',
    college: 'NYU',
    age: 22,
    thingsToLearn: ['Web Development', 'React', 'JavaScript'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Lisa Thompson',
    college: 'University of Michigan',
    age: 19,
    thingsToLearn: ['Data Science', 'Statistics', 'Python'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Robert Chen',
    college: 'UCLA',
    age: 21,
    thingsToLearn: ['Cybersecurity', 'Network Security', 'Linux'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Amanda Foster',
    college: 'University of Washington',
    age: 23,
    thingsToLearn: ['Artificial Intelligence', 'Machine Learning', 'Python'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const seedData = async () => {
  try {
    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
      console.log('Created data directory');
    }

    // Write mentor data
    fs.writeFileSync(mentorsFile, JSON.stringify(mentors, null, 2));
    console.log(`✅ Seeded ${mentors.length} mentors to ${mentorsFile}`);

    // Write mentee data
    fs.writeFileSync(menteesFile, JSON.stringify(mentees, null, 2));
    console.log(`✅ Seeded ${mentees.length} mentees to ${menteesFile}`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('📁 Data stored in:', dataDir);
    console.log('\n🚀 You can now run: npm run dev-json');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
