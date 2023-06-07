import { createContext, useContext, useReducer, useState } from "react";
import { AuthReducer, InitialAuthState } from "../reducers/authReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { dataContext } from "./dataContext";
import { DATAACTIONS } from "../reducers/Actions/DataActions";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthState);
  // const { dataDispatch } = useContext(dataContext);

  const navigate = useNavigate();

  // const encodedToken = localStorage.getItem("userToken");

  // console.log(encodedToken);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const guestLoginDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const signupHandler = async () => {
    try {
      const {
        data: { encodedToken },
      } = await axios.post("/api/auth/signup", userDetails);
      localStorage.setItem("signupToken", JSON.stringify(encodedToken));
      navigate("/login");
      toast.success("Signed up,successfully.", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const guestLogin = async (
    email = guestLoginDetails.email,
    password = guestLoginDetails.password
  ) => {
    try {
      const response = await axios.post("api/auth/login", {
        email,
        password,
      });

      if (response.status == 200) {
        // authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
        localStorage.setItem(
          "GuestuserToken",
          JSON.stringify(response.data.encodedToken)
        );
        authDispatch({ type: "toggleIsLoggedIN", payload: true });
        navigate("/products");
        toast.success("Signed in as Guest,successfully.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#252525",
            color: "whitesmoke",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", userLoginDetails);
      if (response.status == 200) {
        authDispatch({ type: "toggleIsLoggedIN", payload: true });
        localStorage.setItem(
          "loginToken",
          JSON.stringify(response.data.encodedToken)
        );
        navigate("/products");
        toast.success("Signed in successfully.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#252525",
            color: "whitesmoke",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    authDispatch({ type: "toggleIsLoggedIN", payload: false });
    // dataDispatch({ type: DATAACTIONS.LOGOUT });
    localStorage.removeItem("GuestuserToken");
  };

  // useEffect(() => {
  //   guestLogin();
  // }, []);

  const values = {
    authState,
    authDispatch,
    guestLogin,
    userDetails,
    setUserDetails,
    signupHandler,
    userLoginDetails,
    setUserLoginDetails,
    userLogin,
    logout,
    // encodedToken,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
