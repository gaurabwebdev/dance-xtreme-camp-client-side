import React from "react";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";
import { Navigate } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  if (loading || isInstructorLoading) {
    return (
      // <div className="w-full h-full">
      //   <progress className="progress w-56"></progress>
      // </div>
      <LoadingSpinner />
    );
  } else if (user && isInstructor) {
    return children;
  }
  return <Navigate to={"/"} replace></Navigate>;
};

export default InstructorRoute;
