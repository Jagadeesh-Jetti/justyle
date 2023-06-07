import { useContext } from "react";
import { authContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { authState } = useContext(authContext);

  return authState.isLoggedIn ? children : <Navigate to="/login" />;
};
