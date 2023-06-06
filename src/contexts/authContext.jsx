import { createContext, useReducer, useState } from "react";
import { AuthReducer, InitialAuthState } from "../reducers/authReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthState);
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

  const signupHandler = async () => {
    try {
      const {
        data: { encodedToken },
      } = await axios.post("/api/auth/signup", userDetails);
      localStorage.setItem("userToken", JSON.stringify(encodedToken));

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const guestLogin = async (email, password) => {
    try {
      const response = await axios.post("api/auth/login", {
        email,
        password,
      });

      if (response.status == 200) {
        // authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
        localStorage.setItem(
          "userToken",
          JSON.stringify(response.data.encodedToken)
        );
      }
      console.log(response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
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
    // encodedToken,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
