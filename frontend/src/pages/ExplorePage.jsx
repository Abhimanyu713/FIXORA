import React, { useState } from "react";
import { Search } from "lucide-react";
import MentorGrid from "../components/MentorGrid";

const mentorsData = [
  {
    id: 1,
    name: "Alice Johnson",
    tech: "React",
    rating: 4.9,
    field: "Web Development",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Raj Mehta",
    tech: "Flutter",
    rating: 4.8,
    field: "Mobile Development",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sophia Lee",
    tech: "Machine Learning",
    rating: 5.0,
    field: "AI & ML",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    tech: "Python",
    rating: 4.7,
    field: "Data Science",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Emma Brown",
    tech: "UI/UX",
    rating: 4.9,
    field: "Design",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "David Kim",
    tech: "Angular",
    rating: 4.6,
    field: "Web Development",
    img: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Fatima Ali",
    tech: "Django",
    rating: 4.8,
    field: "Backend Development",
    img: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Liam Martinez",
    tech: "Node.js",
    rating: 4.7,
    field: "Backend Development",
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Olivia Chen",
    tech: "Swift",
    rating: 4.9,
    field: "Mobile Development",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Ethan Wright",
    tech: "Kotlin",
    rating: 4.6,
    field: "Mobile Development",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Mia Patel",
    tech: "TensorFlow",
    rating: 5.0,
    field: "AI & ML",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Noah Anderson",
    tech: "C++",
    rating: 4.5,
    field: "Systems Programming",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 13,
    name: "Ava Gupta",
    tech: "R",
    rating: 4.7,
    field: "Data Science",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 14,
    name: "James Wilson",
    tech: "Go",
    rating: 4.6,
    field: "Cloud & DevOps",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 15,
    name: "Zara Hassan",
    tech: "Figma",
    rating: 4.8,
    field: "Design",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Lucas Green",
    tech: "Rust",
    rating: 4.7,
    field: "Systems Programming",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Chloe Scott",
    tech: "PHP",
    rating: 4.5,
    field: "Web Development",
    img: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 18,
    name: "Arjun Nair",
    tech: "AWS",
    rating: 4.9,
    field: "Cloud & DevOps",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 19,
    name: "Grace Thompson",
    tech: "Cybersecurity",
    rating: 4.8,
    field: "Security",
    img: "https://i.pravatar.cc/150?img=19",
  },
  {
    id: 20,
    name: "Hiro Tanaka",
    tech: "Blockchain",
    rating: 4.7,
    field: "Web3 & Blockchain",
    img: "https://i.pravatar.cc/150?img=20",
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const filteredMentors = mentorsData.filter((mentor) =>
    mentor.tech.toLowerCase().includes(search.toLowerCase())
  );
  const categories = [...new Set(mentorsData.map((m) => m.field))];

  return (
    <div className="flex justify-center items-start bg-gray-50 min-h-screen w-full">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Explore Mentors
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white border rounded-lg shadow-sm p-3 mb-10 w-full max-w-md mx-auto">
          <Search className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search mentors by technology..."
            className="w-full outline-none text-gray-700"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Search Results */}
        {search && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
              Results
            </h2>
            {filteredMentors.length > 0 ? (
              <MentorGrid mentors={filteredMentors} small />
            ) : (
              <p className="text-gray-500 text-center">
                No mentors found for "{search}"
              </p>
            )}
          </div>
        )}

        {/* Top Mentors by Field */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-700 text-center">
            Top Mentors by Field
          </h2>
          {categories.map((field, idx) => {
            const topMentors = mentorsData
              .filter((m) => m.field === field)
              .slice(0, 2);
            return (
              <div key={idx} className="mb-10">
                <h3 className="text-lg font-bold text-blue-600 mb-4 text-center">
                  {field}
                </h3>
                <MentorGrid mentors={topMentors} small />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
