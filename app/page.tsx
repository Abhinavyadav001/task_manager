"use client";

import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Welcome to TaskMaster
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
          Organize your tasks, track your progress, and stay productive with our intuitive task management tool.
        </p>
        <div className="flex space-x-4">
          <a
            href="/signup"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-lg shadow-md"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-lg font-medium rounded-lg shadow-md"
          >
            Log In
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
            Why Choose TaskMaster?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl text-blue-500 mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-400">
                Intuitive design that helps you stay on top of your tasks effortlessly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl text-green-500 mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-400">
                Stay synced across devices with live task updates and notifications.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <div className="text-4xl text-purple-500 mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-400">
                Organize tasks your way with categories, priorities, and themes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default HomePage;
