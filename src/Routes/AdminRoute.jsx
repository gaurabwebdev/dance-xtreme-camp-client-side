import React from "react";
import useAuth from "../Hooks/useAuth";

import useAdmin from "../Hooks/useAdmin";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    <div className="w-full h-full">
      <progress className="progress w-56"></progress>
    </div>;
  } else if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"}></Navigate>;
};

export default AdminRoute;
