import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(
    () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("id");
      console.log("token", token, "userId", userId);

      if (token && userId) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          localStorage.removeItem("id");
          delete axios.defaults.headers.common["Authorization"];
          setIsAuthenticated(false);
          setUser(null);
          navigate("/");
        } else {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setIsAuthenticated(true);
          setUser({ id: userId });
          navigate("/chatPage");
        }
      }
    },
    [
      /**navigate*/
    ]
  );

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem("id", userData.user.id);
    axios.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
    setIsAuthenticated(true);
    setUser(userData.user);
    navigate("/chatPage");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    delete axios.defaults.headers.common["Authorization"];
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
