import React from "react";
import useAuth from "../Hooks/useAuth";

import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    <LoadingSpinner />;
  } else if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default AdminRoute;
