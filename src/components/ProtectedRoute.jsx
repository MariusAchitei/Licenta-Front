// src/components/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

const ProtectedRoute = ({ children, roles, isPublic }) => {
  const context = useContext(UserContext);
  const user = context.user;
  const userRoles = context.roles;
  if (isPublic) {
    return children ? children : <Outlet />;
  }

  // if (!user) {
  //   // Redirect to login if the user is not logged in
  //   return <Navigate to="/login" />;
  // }

  // if (roles && !roles.some((role) => userRoles.includes(role))) {
  // Redirect to home page if the user doesn't have the required role
  // return <Navigate to="/unauthorized" />;
  // }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
