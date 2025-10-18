// src/hooks/useAuth.js
import { useState } from "react";
import { loginService, signupService, logoutService, profileService } from "../services/authService";

export const useAuth = () => {
  const [user, setUser] = useState(() => {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (err) {
    console.warn("Failed to read user from localStorage:", err);
    return null;
  }
});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔐 Signup
  const signup = async (formData) => {
    try {
      setLoading(true);
      const data = await signupService(formData);
      // localStorage.setItem("token", data.token);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 🔑 Login
  const login = async (credentials) => {
    try {
      setLoading(true);
      const data = await loginService(credentials);
      localStorage.setItem("accessToken", data.data.tokens.accessToken);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      setUser(data.data.user);
      setError(null);
      return data;
    } catch (err) {
      const message =
      err.response?.data?.message || "Invalid email or password";
    setError(message);
    } finally {
      setLoading(false);
    }
  };

  //  profile
  const userProfile = async (credentials) => {
    try {
      setLoading(true);
      const data = await profileService(credentials);
      setError(null);
      return data;
    } catch (err) {
      const message =
      err.response?.data?.message || "profile not fetched";
    setError(message);
    } finally {
      setLoading(false);
    }
  };

  // 🚪 Logout
  const logout = async () => {
    try {
      await logoutService();
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return { user, loading, error, signup, login, logout, userProfile };
};
