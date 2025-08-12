# Fixora - Mentorship Platform

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) website that connects mentors and mentees for accelerated learning and knowledge sharing.

## Features

### 🎯 **User Registration & Profiles**
- **Mentor Registration**: Complete profile with education, skills, and expertise areas
- **Mentee Registration**: Profile with learning goals and interests
- **Dynamic Skill Management**: Add/remove multiple skills and learning areas

### 🏠 **Home Dashboard**
- **Three-Panel Layout**: Filters, Content Feed, and AI Chat
- **Smart Filtering**: Content filtered based on user skills and interests
- **Responsive Design**: Modern UI with Tailwind CSS

### 🤖 **AI-Powered Chat Assistant**
- **Intelligent Responses**: Context-aware responses for debugging and learning
- **Mentor Recommendations**: AI suggests mentors based on problem descriptions
- **Quick Actions**: Pre-built prompts for common queries

### 📚 **Content Feed**
- **Curated Articles**: Research papers, tutorials, and guides
- **Smart Recommendations**: Content filtered by user interests
- **Rich Metadata**: Author info, read time, and trending indicators

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication (ready for implementation)

### Frontend
- **React 18** - UI library with functional components and hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Project Structure

```
fixora/
├── backend/
│   ├── models/
│   │   ├── Mentor.js
│   │   └── Mentee.js
│   ├── routes/
│   │   ├── mentorRoutes.js
│   │   ├── menteeRoutes.js
│   │   └── chatRoutes.js
│   ├── config.env
│   ├── package.json
│   ├── seedData.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── MentorForm.jsx
│   │   │   ├── MenteeForm.jsx
│   │   │   ├── Filters.jsx
│   │   │   ├── Feed.jsx
│   │   │   └── ChatPanel.jsx
│   │   ├── pages/
│   │   │   ├── LoginPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd fixora
```

### 2. Install Dependencies
```bash
npm run install-all
```

### 3. Choose Your Database Option

#### Option A: Quick Start (JSON-based - No MongoDB Required)
```bash
npm run seed-json
npm run dev-json
```

#### Option B: Full MongoDB Setup
1. **Install MongoDB** (see [MONGODB_SETUP.md](./MONGODB_SETUP.md))
2. **Update backend/config.env** with your MongoDB connection string
3. **Seed the database:**
```bash
npm run seed
```
4. **Start development:**
```bash
npm run dev
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/fixora
JWT_SECRET=your_secret_key_here
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Database Setup
Make sure MongoDB is running, then seed the database:
```bash
cd ../backend
node seedData.js
```

### 5. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## API Endpoints

### Mentors
- `GET /api/mentors` - Get all mentors
- `POST /api/mentors` - Create new mentor
- `GET /api/mentors/:id` - Get mentor by ID
- `GET /api/mentors/skills/:skill` - Get mentors by skill

### Mentees
- `GET /api/mentees` - Get all mentees
- `POST /api/mentees` - Create new mentee
- `GET /api/mentees/:id` - Get mentee by ID

### Chat
- `POST /api/chat/chat` - AI chat endpoint
- `POST /api/chat/recommend-mentor` - Get mentor recommendations

## Usage

### For Mentors
1. Select "I'm a Mentor" on the login page
2. Fill in your profile: name, age, education, college, stream
3. Add your areas of proficiency (skills)
4. Access personalized content feed and AI chat

### For Mentees
1. Select "I'm a Mentee" on the login page
2. Fill in your profile: name, college, age
3. Add things you want to learn
4. Browse filtered content and get AI assistance

### AI Chat Features
- **Debug Help**: Get step-by-step debugging guidance
- **Learning Paths**: Structured learning recommendations
- **Mentor Matching**: AI suggests mentors based on your needs
- **Quick Actions**: Pre-built prompts for common queries

## Development

### Adding New Features
- **New Routes**: Add to appropriate route files in `backend/routes/`
- **New Models**: Create in `backend/models/`
- **New Components**: Add to `frontend/src/components/`
- **New Pages**: Add to `frontend/src/pages/`

### Styling
- Uses Tailwind CSS utility classes
- Custom components defined in `frontend/src/index.css`
- Responsive design with mobile-first approach

### State Management
- React hooks (useState, useEffect) for local state
- localStorage for user session persistence
- Props for component communication

## Deployment

### Backend Deployment
1. Set environment variables on your hosting platform
2. Build and deploy to Node.js hosting (Heroku, Vercel, etc.)
3. Ensure MongoDB connection string is properly configured

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `build` folder to static hosting (Netlify, Vercel, etc.)
3. Update API endpoints to point to your deployed backend

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using the MERN stack**
