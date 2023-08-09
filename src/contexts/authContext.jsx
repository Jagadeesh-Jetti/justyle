import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer, InitialAuthState } from "../reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DATAACTIONS } from "../reducers/Actions/DataActions";
import { loginCall, signupCall } from "../services/AuthenticationCalls";
import { dataContext } from "./dataContext";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthState);
  const { dataDispatch } = useContext(dataContext);
  const navigate = useNavigate();

  const signupHandler = async (userDetails) => {
    try {
      const response = await signupCall(userDetails);
      localStorage.setItem("userToken", response.data.encodedToken);
      navigate("/login");
      toast.success("Signed up successfully.", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed. Please try again.");
    }
  };

  const loginHandler = async (loginDetails) => {
    try {
      const response = await loginCall(loginDetails);
      if (response.status === 200) {
        localStorage.setItem("userToken", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({ type: "toggleIsLoggedIN", payload: true });
        dataDispatch({
          type: DATAACTIONS.SETLOGGEDINUSER,
          payload: response.data.foundUser,
        });
        navigate("/products");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  const logout = () => {
    authDispatch({ type: "toggleIsLoggedIN", payload: false });
    dataDispatch({ type: DATAACTIONS.LOGOUT });
    navigate("/login");
    localStorage.removeItem("userToken");
  };

  const values = {
    authState,
    authDispatch,
    signupHandler,
    loginHandler,
    logout,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
