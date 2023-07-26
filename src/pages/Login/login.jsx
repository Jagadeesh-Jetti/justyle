import { Link } from "react-router-dom";
import "../Login/login.css";
import { Navbar } from "../../components/NavBar/navBar";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import { Footer } from "../../components/Footer/footer";

export const Login = () => {
  const { guestLogin, userLogin, userLoginDetails, setUserLoginDetails } =
    useContext(authContext);

  return (
    <div>
      <Navbar />

      <div className="login-page">
        <div className="login-main-container">
          <h2> Login </h2>
          <form className="login-form">
            <div className="login-mail-container">
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="login-email"
                onChange={(e) =>
                  setUserLoginDetails({
                    ...userLoginDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="login-password-container">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="login-password"
                onChange={(e) =>
                  setUserLoginDetails({
                    ...userLoginDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button onClick={() => userLogin()}>Login</button>
          </form>

          <button onClick={() => guestLogin()}> Guest Login </button>

          {/* <button onClick={() => logout()}> Log out </button> */}
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
