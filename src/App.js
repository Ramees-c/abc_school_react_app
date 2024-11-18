import React, { useEffect, useContext, useState } from "react";
import "./App.css";
import LayoutRoutes from "./LayoutRoutes/LayoutRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { AuthContext } from "./context/authContext";
import { Spinner } from "react-bootstrap";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const login = async () => {
      const response = await axios.post(
        "http://192.168.1.16:5000/admin/login",
        {
          email: "admin@gmail.com",
          password: "password1",
        }
      );
      setIsAuthenticated(true);
    };
    login();
  }, [isAuthenticated]);

  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated === false) {
        setIsLoading(true);
      }
    }, [1000]);
  }, [isAuthenticated]);

  if (!isLoading) {
    return (
      <div style={{height: '100vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <Spinner animation="border" variant="warning" />;
      </div>
    );
  } else {
    return (
      <div>
        <LayoutRoutes />
      </div>
    );
  }
}

export default App;
