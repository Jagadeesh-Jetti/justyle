import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import { Navbar } from "../../components/NavBar/navBar";
import { authContext } from "../../contexts/authContext";
import { Footer } from "../../components/Footer/footer";

export const Login = () => {
  const { loginHandler } = useContext(authContext);

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    if (
      userLoginDetails.email.trim() === "" ||
      userLoginDetails.password.trim() === ""
    ) {
      // Handle the case when fields are empty
      console.log("Fields are empty");
    } else {
      loginHandler(userLoginDetails);
    }
  };

  const handleGuest = () => {
    const guestCredentials = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    loginHandler(guestCredentials);
  };

  return (
    <div>
      <Navbar />

      <div className="login-page">
        <div className="login-main-container">
          <h2> Login </h2>
          <form className="login-form">
            <div className="login-mail-container">
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="login-email"
                value={userLoginDetails.email}
                onChange={(e) =>
                  setUserLoginDetails({
                    ...userLoginDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="login-password-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="login-password"
                value={userLoginDetails.password}
                onChange={(e) =>
                  setUserLoginDetails({
                    ...userLoginDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button className="btn-login" onClick={handleLogIn}>
              Login
            </button>
          </form>
          <button className="btn-login" onClick={handleGuest}>
            Guest Login
          </button>
          <h3>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </h3>
        </div>
      </div>

      <div className="login-footer">
        <Footer />
      </div>
    </div>
  );
};
