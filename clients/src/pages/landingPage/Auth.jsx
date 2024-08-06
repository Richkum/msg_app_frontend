import React, { useState, useContext } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [isVerification, setIsVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
    setIsVerification(false);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let url = isSignup
        ? "http://localhost:3000/auth/register"
        : "http://localhost:3000/auth/login";
      const response = await axios.post(url, formData);
      if (isSignup) {
        setIsVerification(true);
      } else {
        login(response.data);
        navigate("/chatPage");
      }
    } catch (error) {
      setFormErrors(error.response?.data?.errors || {});
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/verify-email",
        {
          email: formData.email,
          verificationCode,
        }
      );
      console.log("Email verified:", response.data);
      login(response.data);
      navigate("/chatpage");
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center text-blue-500">
        {isSignup ? "Sign Up" : "Sign In"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
              value={formData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {formErrors && formErrors.username && (
              <p>{formErrors.username.msg}</p>
            )}
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
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {formErrors && formErrors.email && <p>{formErrors.email.msg}</p>}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <div
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {formErrors && formErrors.password && (
            <p>{formErrors.password.msg}</p>
          )}
        </div>
        {isVerification && (
          <>
            <div className="flex space-x-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={verificationCode[index] || ""}
                  onChange={(e) => handleVerificationCodeChange(e, index)}
                  className="w-10 h-10 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              We sent a verification code to your email.
            </p>
            <button
              type="button"
              onClick={handleVerify}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Verify
            </button>
          </>
        )}
        {!isVerification && (
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        )}
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
