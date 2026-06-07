import { Navigate } from "react-router";
import useUser from "../../lib/hooks/useUser.tsx";
import type { ReactNode } from "react";

export default function CheckPermission({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { loggedInUser, loading } = useUser();
  
  // Show loading state while checking authentication
  if (loading) {
    return <p>Loading...</p>;
  }
  
  // Redirect to login if user is not logged in
  if (!loggedInUser) {
    return <Navigate to="/login" />;
  }
  
  // Check if user has admin role
  if (loggedInUser.role === "admin") {
    return children;
  }
  
  // Redirect to home if user is logged in but not admin
  return <Navigate to="/" />;
}
