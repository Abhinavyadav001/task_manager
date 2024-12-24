"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleLogin = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        aria-label="Login Form"
      >
        <h2 className="text-xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            aria-label="Email Address"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
          Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            aria-label="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={loading}
          aria-label="Login Button"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && (
          <p className="mt-4 text-center text-sm text-red-600" aria-live="polite">
            {error.message}
          </p>
        )}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
