import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-green-800 text-white py-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* 🌿 Brand Section - Left */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 tracking-wide">
            HerbalHearts
          </h2>
          <p className="text-sm md:text-base mt-4 text-green-200 leading-relaxed max-w-sm">
            Reviving nature’s goodness — pure, organic, and sustainable wellness.
          </p>
          <Link to='/dashboard'>Dashboard</Link>
        </div>

        {/* 🔗 Quick Links - Center */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block text-green-100 hover:text-yellow-300 transition-all duration-300 hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block text-green-100 hover:text-yellow-300 transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block text-green-100 hover:text-yellow-300 transition-all duration-300 hover:scale-105"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="block text-green-100 hover:text-yellow-300 transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 🌐 Social Media - Right */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-300">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            {[{ icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" }
            ].map((social, index) => (
              <Link
                key={index}
                to={social.link}
                className="p-3 rounded-full bg-green-700 text-yellow-100 hover:bg-gradient-to-r from-yellow-300 to-green-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 🌱 Bottom Bar */}
      <div className="mt-10 border-t border-green-600 text-center pt-5 text-sm text-green-200">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-300 font-medium">HerbalHearts</span>. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
