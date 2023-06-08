import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-full">
        <progress className="progress w-56"></progress>
      </div>
    );
  } else if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
