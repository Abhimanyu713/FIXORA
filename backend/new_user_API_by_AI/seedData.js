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

    // Enhanced sample mentors with diverse skills
    const mentors = [
      // Machine Learning & AI Experts
      {
        name: 'Dr. Sarah Johnson',
        age: 32,
        education: 'phd',
        college: 'MIT',
        stream: 'Computer Science',
        areasOfProficiency: ['Machine Learning', 'Python', 'Data Science', 'Neural Networks', 'Deep Learning', 'TensorFlow']
      },
      {
        name: 'Prof. Michael Chen',
        age: 45,
        education: 'phd',
        college: 'Stanford University',
        stream: 'Data Science',
        areasOfProficiency: ['Data Analysis', 'Statistics', 'R Programming', 'Big Data', 'Machine Learning', 'Python']
      },
      {
        name: 'Dr. Emily Watson',
        age: 38,
        education: 'phd',
        college: 'Harvard University',
        stream: 'Artificial Intelligence',
        areasOfProficiency: ['AI', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'Machine Learning', 'PyTorch']
      },
      {
        name: 'Dr. Rajesh Kumar',
        age: 41,
        education: 'phd',
        college: 'Carnegie Mellon University',
        stream: 'Machine Learning',
        areasOfProficiency: ['Machine Learning', 'Computer Vision', 'Robotics', 'Python', 'C++', 'TensorFlow']
      },
      {
        name: 'Dr. Lisa Rodriguez',
        age: 35,
        education: 'phd',
        college: 'UC Berkeley',
        stream: 'Data Science',
        areasOfProficiency: ['Data Science', 'Machine Learning', 'Statistics', 'Python', 'R', 'Big Data Analytics']
      },

      // Frontend & Web Development Experts
      {
        name: 'Alex Rodriguez',
        age: 28,
        education: 'post-graduation',
        college: 'UC Berkeley',
        stream: 'Software Engineering',
        areasOfProficiency: ['JavaScript', 'React', 'Node.js', 'Full Stack Development', 'TypeScript', 'Next.js']
      },
      {
        name: 'Sarah Williams',
        age: 26,
        education: 'graduation',
        college: 'Georgia Tech',
        stream: 'Computer Science',
        areasOfProficiency: ['React', 'JavaScript', 'CSS', 'HTML', 'Frontend Development', 'UI/UX']
      },
      {
        name: 'David Kim',
        age: 31,
        education: 'post-graduation',
        college: 'University of Washington',
        stream: 'Web Development',
        areasOfProficiency: ['Vue.js', 'JavaScript', 'CSS', 'Frontend Development', 'Web Performance', 'Accessibility']
      },
      {
        name: 'Maria Garcia',
        age: 29,
        education: 'graduation',
        college: 'UT Austin',
        stream: 'Computer Science',
        areasOfProficiency: ['Angular', 'TypeScript', 'JavaScript', 'Frontend Development', 'Testing', 'CI/CD']
      },
      {
        name: 'James Wilson',
        age: 33,
        education: 'post-graduation',
        college: 'University of Illinois',
        stream: 'Software Engineering',
        areasOfProficiency: ['React Native', 'Mobile Development', 'JavaScript', 'iOS Development', 'Android Development']
      },

      // Backend & Full Stack Experts
      {
        name: 'Dr. Ahmed Hassan',
        age: 36,
        education: 'phd',
        college: 'University of Michigan',
        stream: 'Computer Science',
        areasOfProficiency: ['Backend Development', 'Node.js', 'Python', 'Database Design', 'Microservices', 'Docker']
      },
      {
        name: 'Jennifer Lee',
        age: 27,
        education: 'graduation',
        college: 'UC San Diego',
        stream: 'Software Engineering',
        areasOfProficiency: ['Java', 'Spring Boot', 'Backend Development', 'REST APIs', 'Database', 'Cloud Computing']
      },
      {
        name: 'Robert Taylor',
        age: 34,
        education: 'post-graduation',
        college: 'Northwestern University',
        stream: 'Computer Science',
        areasOfProficiency: ['Full Stack Development', 'Python', 'Django', 'React', 'PostgreSQL', 'AWS']
      },
      {
        name: 'Amanda Foster',
        age: 30,
        education: 'graduation',
        college: 'University of Wisconsin',
        stream: 'Software Engineering',
        areasOfProficiency: ['C#', '.NET', 'Backend Development', 'SQL Server', 'Azure', 'Microservices']
      },
      {
        name: 'Kevin Brown',
        age: 32,
        education: 'post-graduation',
        college: 'Purdue University',
        stream: 'Computer Science',
        areasOfProficiency: ['Go', 'Backend Development', 'Kubernetes', 'Docker', 'Microservices', 'Cloud Native']
      },

      // Mobile Development Experts
      {
        name: 'Sophie Anderson',
        age: 28,
        education: 'graduation',
        college: 'University of Maryland',
        stream: 'Mobile Development',
        areasOfProficiency: ['iOS Development', 'Swift', 'Mobile Development', 'UI/UX', 'App Store', 'Core Data']
      },
      {
        name: 'Carlos Mendez',
        age: 31,
        education: 'post-graduation',
        college: 'University of Florida',
        stream: 'Computer Science',
        areasOfProficiency: ['Android Development', 'Kotlin', 'Java', 'Mobile Development', 'Firebase', 'Material Design']
      },
      {
        name: 'Emma Thompson',
        age: 26,
        education: 'graduation',
        college: 'University of Virginia',
        stream: 'Software Engineering',
        areasOfProficiency: ['React Native', 'JavaScript', 'Mobile Development', 'Cross-platform', 'Redux', 'Firebase']
      },
      {
        name: 'Daniel Park',
        age: 29,
        education: 'post-graduation',
        college: 'University of Texas',
        stream: 'Computer Science',
        areasOfProficiency: ['Flutter', 'Dart', 'Mobile Development', 'Cross-platform', 'Firebase', 'State Management']
      },

      // DevOps & Cloud Computing Experts
      {
        name: 'Dr. David Kim',
        age: 31,
        education: 'post-graduation',
        college: 'Carnegie Mellon',
        stream: 'Cybersecurity',
        areasOfProficiency: ['Cybersecurity', 'Network Security', 'Linux', 'DevOps', 'Docker', 'Kubernetes']
      },
      {
        name: 'Dr. Rachel Green',
        age: 37,
        education: 'phd',
        college: 'University of Pennsylvania',
        stream: 'Cloud Computing',
        areasOfProficiency: ['Cloud Computing', 'AWS', 'Azure', 'DevOps', 'Infrastructure as Code', 'Terraform']
      },
      {
        name: 'Thomas Martinez',
        age: 33,
        education: 'graduation',
        college: 'University of Colorado',
        stream: 'Information Technology',
        areasOfProficiency: ['DevOps', 'CI/CD', 'Jenkins', 'GitLab', 'Docker', 'Kubernetes']
      },
      {
        name: 'Natalie White',
        age: 29,
        education: 'post-graduation',
        college: 'University of Arizona',
        stream: 'Computer Science',
        areasOfProficiency: ['Google Cloud Platform', 'DevOps', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana']
      },

      // Database & Data Engineering Experts
      {
        name: 'Dr. Christopher Lee',
        age: 39,
        education: 'phd',
        college: 'University of Chicago',
        stream: 'Data Engineering',
        areasOfProficiency: ['Database Design', 'SQL', 'NoSQL', 'Data Engineering', 'Apache Spark', 'Kafka']
      },
      {
        name: 'Michelle Johnson',
        age: 31,
        education: 'post-graduation',
        college: 'University of Minnesota',
        stream: 'Computer Science',
        areasOfProficiency: ['PostgreSQL', 'MongoDB', 'Database Administration', 'Data Modeling', 'ETL', 'Data Warehousing']
      },
      {
        name: 'Andrew Davis',
        age: 28,
        education: 'graduation',
        college: 'University of Iowa',
        stream: 'Information Systems',
        areasOfProficiency: ['MySQL', 'Database Design', 'Data Analysis', 'SQL', 'Business Intelligence', 'Tableau']
      },

      // UI/UX & Design Experts
      {
        name: 'Jessica Chen',
        age: 27,
        education: 'graduation',
        college: 'Parsons School of Design',
        stream: 'Design',
        areasOfProficiency: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems']
      },
      {
        name: 'Ryan Wilson',
        age: 30,
        education: 'post-graduation',
        college: 'Rhode Island School of Design',
        stream: 'Digital Design',
        areasOfProficiency: ['UI/UX Design', 'Sketch', 'InVision', 'User Testing', 'Information Architecture', 'Visual Design']
      },

      // Cybersecurity Experts
      {
        name: 'Dr. Marcus Johnson',
        age: 42,
        education: 'phd',
        college: 'Johns Hopkins University',
        stream: 'Cybersecurity',
        areasOfProficiency: ['Cybersecurity', 'Penetration Testing', 'Ethical Hacking', 'Network Security', 'Incident Response', 'Forensics']
      },
      {
        name: 'Dr. Elena Rodriguez',
        age: 35,
        education: 'phd',
        college: 'University of California, Davis',
        stream: 'Computer Security',
        areasOfProficiency: ['Cybersecurity', 'Cryptography', 'Blockchain', 'Smart Contracts', 'Security Auditing', 'Risk Assessment']
      },

      // Game Development Experts
      {
        name: 'Brandon Smith',
        age: 29,
        education: 'graduation',
        college: 'DigiPen Institute of Technology',
        stream: 'Game Development',
        areasOfProficiency: ['Game Development', 'Unity', 'C#', '3D Graphics', 'Game Design', 'Physics Programming']
      },
      {
        name: 'Ashley Taylor',
        age: 26,
        education: 'graduation',
        college: 'Full Sail University',
        stream: 'Game Design',
        areasOfProficiency: ['Unreal Engine', 'C++', 'Game Development', 'Level Design', 'Character Animation', 'Game Mechanics']
      },

      // Blockchain & Emerging Tech Experts
      {
        name: 'Dr. Wei Zhang',
        age: 38,
        education: 'phd',
        college: 'University of California, Irvine',
        stream: 'Blockchain Technology',
        areasOfProficiency: ['Blockchain', 'Smart Contracts', 'Solidity', 'Ethereum', 'DeFi', 'Cryptocurrency']
      },
      {
        name: 'Dr. Priya Patel',
        age: 33,
        education: 'phd',
        college: 'University of Maryland',
        stream: 'Quantum Computing',
        areasOfProficiency: ['Quantum Computing', 'Quantum Algorithms', 'Python', 'Qiskit', 'Linear Algebra', 'Quantum Mechanics']
      }
    ];

    // Enhanced sample mentees
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
      },
      {
        name: 'Michael Johnson',
        college: 'University of Michigan',
        age: 22,
        thingsToLearn: ['Mobile Development', 'React Native', 'JavaScript']
      },
      {
        name: 'Emily Davis',
        college: 'University of Washington',
        age: 19,
        thingsToLearn: ['UI/UX Design', 'Figma', 'User Research']
      },
      {
        name: 'Alex Kim',
        college: 'Stanford University',
        age: 21,
        thingsToLearn: ['Backend Development', 'Node.js', 'Database Design']
      },
      {
        name: 'Sarah Wilson',
        college: 'MIT',
        age: 20,
        thingsToLearn: ['Machine Learning', 'Python', 'Deep Learning']
      },
      {
        name: 'David Chen',
        college: 'UC Berkeley',
        age: 22,
        thingsToLearn: ['DevOps', 'Docker', 'Kubernetes']
      },
      {
        name: 'Rachel Green',
        college: 'Harvard University',
        age: 21,
        thingsToLearn: ['Cybersecurity', 'Ethical Hacking', 'Network Security']
      }
    ];

    // Insert data
    await Mentor.insertMany(mentors);
    await Mentee.insertMany(mentees);

    console.log('Database seeded successfully!');
    console.log(`Created ${mentors.length} mentors and ${mentees.length} mentees`);
    
    // Log some statistics
    console.log('\nMentor Statistics:');
    console.log(`- PhD holders: ${mentors.filter(m => m.education === 'phd').length}`);
    console.log(`- Post-graduation: ${mentors.filter(m => m.education === 'post-graduation').length}`);
    console.log(`- Graduation: ${mentors.filter(m => m.education === 'graduation').length}`);
    
    // Count skills
    const allSkills = mentors.flatMap(m => m.areasOfProficiency);
    const skillCounts = {};
    allSkills.forEach(skill => {
      skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
    
    console.log('\nTop Skills:');
    Object.entries(skillCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .forEach(([skill, count]) => {
        console.log(`- ${skill}: ${count} mentors`);
      });
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
