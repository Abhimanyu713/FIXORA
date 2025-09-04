// // // components/Navbar.jsx
// // import React from "react";
// // import { Home, Users, BookOpen, UserSquare, Info } from "lucide-react";

// // export default function Navbar() {
// //   const iconSize = 22;

// //   const navItems = [
// //     { icon: <Home size={iconSize} />, label: "Home", href: "/" },
// //     { icon: <Users size={iconSize} />, label: "Mentors",  href: "/mentors" },
// //     { icon: <BookOpen size={iconSize} />, label: "Learning Paths",  href: "/learning-paths" },
// //     { icon: <UserSquare size={iconSize} />, label: "Communities",  href: "/communities" },
// //     { icon: <Info size={iconSize} />, label: "About", href: "/about" },
// //   ];

// //   return (
// //     <nav className="bg-white border-b border-gray-200 w-full flex items-center justify-between px-6 py-3 sticky top-0 z-50">
// //       {/* FIXORA Logo/Text */}
// //       <div className="text-xl font-bold text-blue-600 tracking-wide">FIXORA</div>

// //       {/* Navigation Icons */}
// //       <ul className="flex flex-row space-x-8 items-center">
// //         {navItems.map((item, idx) => (
// //           <li key={idx} className="group relative">
// //             <a
// //               href={item.href}
// //               className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex justify-center"
// //             >
// //               {item.icon}
// //             </a>
// //             {/* Tooltip */}
// //             <div className="absolute top-full mt-0 px-2 py-0.5 bg-gray-800 text-white rounded-md  opacity-0 group-hover:opacity-100 transition-opacity duration-200  whitespace-nowrap z-10 shadow-lg text-sm">
// //               <p className="font-medium">{item.label}</p>
// //               <p className="text-xs text-gray-300">{item.desc}</p>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // }





// // components/Navbar.jsx
// import React from "react";
// import { Home, Users, BookOpen, UserSquare, Info } from "lucide-react";
// import SearchBar from "./HomePage/SearchBar";

// export default function Navbar() {
//   const iconSize = 22;

//   const navItems = [
//     { icon: <Home size={iconSize} />, label: "Home" , href: "/" },
//     { icon: <Users size={iconSize} />, label: "Mentors",   href: "/mentors" },
//     { icon: <BookOpen size={iconSize} />, label: "Learning Paths",  href: "/learning-paths" },
//     { icon: <UserSquare size={iconSize} />, label: "Communities",  href: "/communities" },
//     { icon: <Info size={iconSize} />, label: "About",   href: "/about" },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-200 w-full flex items-center justify-between px-6 py-3 sticky top-0 z-50">
//       {/* FIXORA Logo/Text */}
//       <div className="text-xl font-bold text-blue-600 tracking-wide">FIXORA</div>
// {/* search bar */ }
//       {/* Navigation Icons */}
//       <ul className="flex flex-row space-x-8 items-center">
//         {navItems.map((item, idx) => (
//           <li key={idx} className="group relative">
//             <a
//               href={item.href}
//               className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex justify-center"
//             >
//               {item.icon}
//             </a>
//             {/* Tooltip */}
//             <div
//               className="absolute top-full mt-1.5 px-2 py-0.5 bg-gray-800 text-white rounded-md  opacity-0 group-hover:opacity-100 transition-opacity duration-200  whitespace-nowrap z-10 shadow-lg text-sm transform -translate-x-1/2 left-1/2
//                          tooltip-check"
//             >
//               <p className="font-medium">{item.label}</p>
//               <p className="text-xs text-gray-300">{item.desc}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// /* 
// 👉 Add this to your global CSS file (e.g., index.css, globals.css)
// to prevent tooltips from going outside the screen.
// */


import React, { useState } from "react";
import { Home, Users, BookOpen, UserSquare, Info, Search } from "lucide-react";
import SearchBar from "../HomePage/component/SearchBar"; 
import {Link}  from "react-router-dom"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const iconSize = 22;

  const navItems = [
    { icon: <Home size={iconSize} />, label: "Home", href: "/" },
    { icon: <Users size={iconSize} />, label: "Mentors", href: "/profile" },
    { icon: <BookOpen size={iconSize} />, label: "Learning Paths", href: "/learning-paths" },
    { icon: <UserSquare size={iconSize} />, label: "Communities", href: "/communities" },
    { icon: <Info size={iconSize} />, label: "About",  href: "/about" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 w-full flex items-center justify-between px-6 py-3 sticky top-0 z-50">
        {/* FIXORA Logo/Text */}
        <div className="text-xl font-bold text-blue-600 tracking-wide">FIXORA</div>
<div style={{justifyContent:'center' , color:"red"}}>   {/* Search Modal */}
     <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        on Search={(mentor) => {
        
          setIsSearchOpen(false);
        }}
      /></div>
        {/* Navigation Icons */}
        <ul className="flex flex-row space-x-8 items-center">
          {navItems.map((item, idx) => (
            <li key={idx} className="group relative">
              <Link
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex justify-center"
              >
                {item.icon}
              </Link>
              {/* Tooltip */}
              <div
                className="absolute top-full mt-2 px-3 py-2 bg-gray-800 text-white rounded-md 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                           whitespace-nowrap z-10 shadow-lg transform -translate-x-1/2 left-1/2"
              >
                <p className="font-medium">{item.label}</p>
                <p className="text-xs text-gray-300">{item.desc}</p>
              </div>
            </li>
          ))}

          {/* 🔍 Search Button */}
          <li className="group relative">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex justify-center"
            >
              <Search size={iconSize} />
            </button>
            {/* Tooltip */}
            <div
              className="absolute top-full mt-2 px-3 py-2 bg-gray-800 text-white rounded-md 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                         whitespace-nowrap z-10 shadow-lg transform -translate-x-1/2 left-1/2"
            >
              <p className="font-medium">Search</p>
              <p className="text-xs text-gray-300">Find mentors & skills</p>
            </div>
          </li>
        </ul>
      </nav>

    
    </>
  );
}
