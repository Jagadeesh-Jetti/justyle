import { Link } from "react-router-dom";
import "../Login/login.css";
import { Navbar } from "../../components/NavBar/navBar";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

export const Login = () => {
  const {
    guestLogin,
    userLogin,
    userLoginDetails,
    setUserLoginDetails,
    logout,
  } = useContext(authContext);

  return (
    <div>
      <Navbar />
      <form className="login">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
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

      <button onClick={() => logout()}> Log out </button>
      <h3>Don't have an account?</h3>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};
