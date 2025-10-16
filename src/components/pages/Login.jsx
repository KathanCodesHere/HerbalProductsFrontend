import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [showForgot, setShowForgot] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // alert("Login successful 🌿 (demo)");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    // alert(Password reset link sent to ${email});
    setShowForgot(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center font-sans px-4">
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-green-800 text-center mb-2">
          Welcome Back 🌿
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login to your Herbal Essence account
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <label className="block mb-2 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Enter your password"
          />

          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={() => setShowForgot(true)}
              className="text-sm text-green-700 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 font-medium hover:underline">
            Register here
          </Link>
        </p>
      </motion.div>

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgot && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
                Forgot Password
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Enter your email address to reset your password.
              </p>
              <form onSubmit={handleForgot}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your email address"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
                  >
                    Send Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgot(false)}
                    className="flex-1 border border-green-700 text-green-700 py-2 rounded-lg hover:bg-green-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;