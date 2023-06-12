import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      // TODO :: Set a lottie animation on loading
      // <div className="w-full h-full">
      //   <progress className="progress w-56"></progress>
      // </div>
      <LoadingSpinner />
    );
  } else if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
