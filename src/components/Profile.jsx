import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react"; // 👈 use an icon instead of image
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { userProfile } = useAuth();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userProfile();
        const profileObj = {
          name: res.data.user.name,
          email: res.data.user.email,
          mobile: res.data.user.phone,
        };
        if (res) setProfile(profileObj);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
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

        {/* Profile Icon */}
        <div className="flex flex-col items-center mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-green-700  rounded-full p-4 border-green-500 "
          >
            <UserCircle size={96} />
          </motion.div>
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
        {/* <div className="mt-8 text-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold shadow-lg transition-transform duration-300"
          >
            Save Changes
          </motion.button>
        </div> */}
      </motion.form>
    </div>
  );
};

export default Profile;
