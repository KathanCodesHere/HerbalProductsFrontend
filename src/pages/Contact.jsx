import React from "react";
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-green-50 min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* 🌿 Left Side - Images (vertically stacked) */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1731696604013-52ccf4c49bd9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXl1cnZlZGljJTIwaGVyYmFsJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Herbal Nature 1"
            className="rounded-2xl shadow-lg w-full h-65 max-w-sm object-cover hover:scale-105 transition-transform duration-500"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNJfUzcmOHCqAmu1817lriR-RLHO9HBgn2w&s"
            alt="Herbal Nature 2"
            className="rounded-2xl shadow-lg w-full h-65 max-w-sm object-cover hover:scale-105 transition-transform duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1677599082447-6549af4c5454?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF5dXJ2ZWRpYyUyMGhlcmJhbCUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
            alt="Herbal Nature 3"
            className="rounded-2xl shadow-lg w-full h-65 max-w-sm object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* 🌱 Right Side - Contact Form + Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            We'd love to hear from you! Whether it's a question about our products, feedback, or just a hello, our team at HerbalHearts is ready to respond.
          </p>

          {/* Contact Details - 2 on top, 1 below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-green-800">
            <div className="flex w-fit items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
              <FaPhoneAlt className="text-green-700 text-xl" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex  w-fit items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
              <FaRegEnvelope/>
              <span>support@herbal.com</span>
            </div>
          </div>
          {/* Address below */}
          <div className="flex items-center w-fit space-x-3 bg-white p-4 rounded-lg shadow-md mb-8">
            <FaMapMarkerAlt className="text-green-700 text-xl" />
            <span>123 Green Street, Wellness City</span>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
