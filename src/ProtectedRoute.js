import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserAuth } from "./context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    toast.error("Please login  😊");
    return <Navigate to="/Login" />;
  }
  return children;
};

export default ProtectedRoute;
