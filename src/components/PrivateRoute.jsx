import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const token = localStorage.getItem("authToken");
  const storedUser = localStorage.getItem("userInfo");

  useEffect(() => {
    const fetchUserInfo = async () => {
      // console.log(token);
      // console.log(storedUser);

      if (storedUser) {
        setUserInfo(JSON.parse(storedUser));
      } else {
        try {
          const response = await axios.get(
            "https://ican-abeokuta-backend.onrender.com/api/v1/user/me",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setUserInfo(response.data); // Fix: Use setUserInfo instead of setUser
          localStorage.setItem("userInfo", JSON.stringify(response.data));
        } catch (error) {
          console.error("Error fetching user info:", error);
          setIsAuthenticated(false);
        }
      }
    };

    fetchUserInfo();
  }, [token, storedUser]);

  // console.log(userInfo);
  // console.log(isAuthenticated);

  return token ? (
    <Outlet context={{ userInfo }} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
