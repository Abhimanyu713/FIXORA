const mongoose = require('mongoose');
const Mentor = require('./models/Mentor');
const Mentee = require('./models/Mentee');
require('dotenv').config({ path: './config.env' });

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await Mentor.deleteMany({});
    await Mentee.deleteMany({});

    // Sample mentors
    const mentors = [
      {
        name: 'Dr. Sarah Johnson',
        age: 32,
        education: 'phd',
        college: 'MIT',
        stream: 'Computer Science',
        areasOfProficiency: ['Machine Learning', 'Python', 'Data Science', 'Neural Networks']
      },
      {
        name: 'Prof. Michael Chen',
        age: 45,
        education: 'phd',
        college: 'Stanford University',
        stream: 'Data Science',
        areasOfProficiency: ['Data Analysis', 'Statistics', 'R Programming', 'Big Data']
      },
      {
        name: 'Alex Rodriguez',
        age: 28,
        education: 'post-graduation',
        college: 'UC Berkeley',
        stream: 'Software Engineering',
        areasOfProficiency: ['JavaScript', 'React', 'Node.js', 'Full Stack Development']
      },
      {
        name: 'Dr. Emily Watson',
        age: 38,
        education: 'phd',
        college: 'Harvard University',
        stream: 'Artificial Intelligence',
        areasOfProficiency: ['AI', 'Deep Learning', 'Computer Vision', 'Natural Language Processing']
      },
      {
        name: 'David Kim',
        age: 31,
        education: 'post-graduation',
        college: 'Carnegie Mellon',
        stream: 'Cybersecurity',
        areasOfProficiency: ['Cybersecurity', 'Network Security', 'Ethical Hacking', 'Linux']
      }
    ];

    // Sample mentees
    const mentees = [
      {
        name: 'John Smith',
        college: 'University of California',
        age: 20,
        thingsToLearn: ['Python', 'Machine Learning', 'Data Analysis']
      },
      {
        name: 'Lisa Wang',
        college: 'NYU',
        age: 19,
        thingsToLearn: ['Web Development', 'JavaScript', 'React']
      },
      {
        name: 'Carlos Mendez',
        college: 'Texas A&M',
        age: 21,
        thingsToLearn: ['Cybersecurity', 'Network Security', 'Linux']
      },
      {
        name: 'Aisha Patel',
        college: 'Georgia Tech',
        age: 20,
        thingsToLearn: ['Data Science', 'Statistics', 'R Programming']
      }
    ];

    // Insert data
    await Mentor.insertMany(mentors);
    await Mentee.insertMany(mentees);

    console.log('Database seeded successfully!');
    console.log(`Created ${mentors.length} mentors and ${mentees.length} mentees`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
