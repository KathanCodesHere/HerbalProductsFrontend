import React, { useState } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Kathan Sahu",
    email: "kathan@gmail.com",
    mobile: "9876543210",
    image: "https://via.placeholder.com/150",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md md:max-w-lg border border-green-200"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8 tracking-wide">
          My Profile 🌿
        </h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <motion.img
              src={profile.image}
              alt="Profile"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-lg"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-1 right-1 bg-green-500 text-white p-2 rounded-full cursor-pointer hover:bg-green-600 transition"
            >
              ✎
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-green-900 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full bg-green-50 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder:text-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-green-900 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full bg-green-50 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder:text-green-400"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-green-900 font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
              className="w-full bg-green-50 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-green-900 placeholder:text-green-400"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold shadow-lg transition-transform duration-300"
          >
            Save Changes
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default Profile;
