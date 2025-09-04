// components/MentorGrid.jsx
import React from "react";

export default function MentorGrid({ mentors, small }) {
  return (
    <div
      className={`grid gap-6 ${
        small ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className={`bg-white shadow-md rounded-lg p-4 text-center border hover:shadow-lg transition ${
            small ? "p-3 text-sm" : "p-5"
          }`}
        >
          <img
            src={mentor.img}
            alt={mentor.name}
            className={`rounded-full mx-auto mb-3 ${
              small ? "w-16 h-16" : "w-20 h-20"
            }`}
          />
          <h4 className="font-semibold text-gray-800">{mentor.name}</h4>
          <p className="text-gray-500">{mentor.tech}</p>
          <p className="text-yellow-500">⭐ {mentor.rating}</p>
        </div>
      ))}
    </div>
  );
}
