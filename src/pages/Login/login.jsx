import { Link } from "react-router-dom";
import "../Login/login.css";
import { Navbar } from "../../components/NavBar/navBar";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

export const Login = () => {
  const { guestLogin } = useContext(authContext);
  return (
    <div>
      <Navbar />
      <form className="login">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
      <button
        onClick={() => guestLogin("adarshbalika@gmail.com", "adarshbalika")}
      >
        Guest Login
      </button>
      <h3>Don't have an account?</h3>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};
