import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Signup/signup.css";
import { Navbar } from "../../components/NavBar/navBar";
import { authContext } from "../../contexts/authContext";

export const Signup = () => {
  const { signupHandler } = useContext(authContext);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      userDetails.firstName.trim() === "" ||
      userDetails.lastName.trim() === "" ||
      userDetails.email.trim() === "" ||
      userDetails.password.trim() === "" ||
      userDetails.confirmPassword.trim() === ""
    ) {
      console.log("Fields are empty");
      return;
    }

    if (userDetails.password !== userDetails.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    signupHandler(userDetails);
  };

  return (
    <div>
      <Navbar />
      <div className="login-page">
        <div className="login-main-container">
          <h2> Sign up</h2>
          <form className="login-form">
            <div className="login-mail-container">
              <input
                type="text"
                className="login-input"
                placeholder="Enter the First Name"
                value={userDetails.firstName}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="login-mail-container">
              <input
                type="text"
                className="login-input"
                placeholder="Enter the Last Name"
                value={userDetails.lastName}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="login-mail-container">
              <input
                type="text"
                className="login-input"
                placeholder="Enter the Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="login-mail-container">
              <input
                type="password"
                className="login-input"
                placeholder="Enter the Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="login-mail-container">
              <input
                type="password"
                className="login-input"
                placeholder="Enter the Confirm Password"
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <button onClick={handleSignup}>Create account</button>
            <div className="signup-footer">
              <h3> Have an account already? </h3>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
