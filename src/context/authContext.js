import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (e, data) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://192.168.1.27:5000/admin/login`,
        data
      );
      console.log("Login Success", response);
      setUser(response.data);
      // localStorage.setItem("auth", JSON.stringify(response.data));
      setIsAuthenticated(true);
      navigate("/admin");
    } catch (error) {
      console.error("Failed to Login", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
