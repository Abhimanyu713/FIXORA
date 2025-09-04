import React from "react";
import { Star } from "lucide-react";

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between h-full">
      <div className="flex flex-col items-center text-center">
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-20 h-20 rounded-full mb-4"
        />
        <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
        <p className="text-sm text-gray-500">{mentor.tech}</p>
        <div className="flex items-center mt-2">
          <Star className="text-yellow-400 mr-1" size={18} />
          <span className="text-gray-700 font-medium">{mentor.rating}</span>
        </div>
      </div>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full">
        Connect
      </button>
    </div>
  );
}
