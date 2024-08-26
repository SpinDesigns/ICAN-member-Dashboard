import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated, userInfo } = useAuth();

  return isAuthenticated ? (
    <Outlet context={{ userInfo }} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
