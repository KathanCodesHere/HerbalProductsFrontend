import React, { useState } from "react";
import {Link} from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 text-[#023918] px-6 py-4 flex justify-between items-center shadow-lg  top-0 z-50 sticky">
      {/* Logo */}
<Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-all duration-300">
  <img
    src="/logos/logo.png" // 👈 your logo path (put your image in public/assets or src/assets)
    alt="Kesh Herbal Logo"
    className="h-10 w-auto sm:h-12 md:h-14 object-contain"
  />
</Link>


      {/* Center Links */}
      <div className="hidden md:flex space-x-8">
      {["Products", "About Us", "Contact Us"].map((item) => (
        <Link key={item}
        to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
        className="relative px-3 py-2 rounded-lg font-medium transition-all duration-300
               hover:text-white hover:scale-105
               hover:bg-gradient-to-r from-green-600 to-yellow-400">
        {item}
        </Link>
))}

      </div>

      {/* Right Side Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/login"
          className="relative px-3 py-2 rounded-lg font-medium transition-all duration-300
                     hover:text-white hover:scale-105
                     hover:bg-gradient-to-r from-green-600 to-yellow-400"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="relative px-3 py-2 rounded-lg font-medium transition-all duration-300
                     hover:text-white hover:scale-105
                     hover:bg-gradient-to-r from-green-600 to-yellow-400"
        >
          Signup
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center text-[#023918] hover:text-yellow-400 transition-all duration-300"
        onClick={toggleMenu}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // X icon
                : "M4 6h16M4 12h16m-7 6h7" // Hamburger
            }
          />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
       {/* 📱 Mobile Dropdown Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden"
          >
            {["Products", "About Us", "Contact Us", "Login", "Signup"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="w-4/5 text-center py-2 rounded-lg font-medium transition-all duration-300
                             hover:text-white hover:bg-gradient-to-r from-green-500 to-lime-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
