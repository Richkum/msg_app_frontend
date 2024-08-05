import React, { useState } from "react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center text-blue-500">
        {isSignup ? "Sign Up" : "Sign In"}
      </h2>
      <form className="space-y-4">
        {isSignup && (
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="text-center text-sm text-gray-500">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <button
              onClick={toggleAuthMode}
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <button
              onClick={toggleAuthMode}
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
