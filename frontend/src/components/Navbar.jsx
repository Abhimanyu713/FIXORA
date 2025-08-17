// components/Navbar.jsx
import React from "react";
import { Home, Users, BookOpen, UserSquare, Info } from "lucide-react"; // fixed icons

export default function Navbar() {
  const iconSize = 22;

  const navItems = [
    {
      icon: <Home size={iconSize} />,
      label: "Home",
      desc: "Dashboard / Feed overview",
      href: "/",
    },
    {
      icon: <Users size={iconSize} />,
      label: "Mentors",
      desc: "Browse mentors / experts",
      href: "/mentors",
    },
    {
      icon: <BookOpen size={iconSize} />,
      label: "Learning Paths",
      desc: "Structured courses / topics",
      href: "/learning-paths",
    },
    {
      icon: <UserSquare size={iconSize} />,
      label: "Communities",
      desc: "Join topic-based communities",
      href: "/communities",
    },
    {
      icon: <Info size={iconSize} />,
      label: "About",
      desc: "Platform introduction",
      href: "/about",
    },
  ];

  return (
    <nav className="bg-white border-r border-gray-200 
                    w-16 min-h-screen flex flex-col p-4 items-center justify-center">
      <ul className="flex flex-col space-y-8">
        {navItems.map((item, idx) => (
          <li key={idx} className="group relative">
            <a
              href={item.href}
              className="text-gray-700 hover:text-blue-600 
                         transition-colors duration-200 flex justify-center"
            >
              {item.icon}
            </a>
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white rounded-md 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                            whitespace-nowrap z-10 shadow-lg">
              <p className="font-medium">{item.label}</p>
              <p className="text-xs text-gray-300">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
