// src/pages/LoginPage.jsx
import React, { useState } from "react";
import logoImg from "../assets/dealforu.png"; // Replace with your logo path
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const LoginPage = () => {
  const [mode, setMode] = useState("customer"); // 'customer' or 'manager'
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleModeToggle = (selectedMode) => {
    setMode(selectedMode);
    setError(""); // Clear error when switching modes
    setUsername("");
    setPassword("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    // Simulate login (replace with your actual login logic)
    const data = {
      username,
      mode,
    };
    localStorage.setItem("user", JSON.stringify(data));
    // redirect to home:
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <img
            src={logoImg} // Replace with your logo
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          {mode === "customer" ? "Customer Login" : "Restaurant Manager Login"}
        </h1>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => handleModeToggle("customer")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                mode === "customer"
                  ? "bg-primary text-blue"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => handleModeToggle("manager")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                mode === "manager"
                  ? "bg-primary text-blue"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Restaurant Manager
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your username"
              aria-required="true"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
              aria-required="true"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 text-sm text-accent bg-red-50 p-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-gray bg-gray py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          If you don't have an account,{" "}
          <a href="#" className="text-sm underline text-blue">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
