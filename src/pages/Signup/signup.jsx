import { Link } from "react-router-dom";
import "../Signup/signup.css";
import { Navbar } from "../../components/NavBar/navBar";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";

export const Signup = () => {
  const { userDetails, setUserDetails, signupHandler } =
    useContext(authContext);

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setUserDetails({ ...userDetails, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newRecord = { ...user, id: new Date().getTime().toString() };
  //   setAddedUser([...addedUser, newRecord]);
  // };

  return (
    <div>
      <Navbar />
      <form className="form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                firstName: e.target.value,
              })
            }
            // onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
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
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
        <button onClick={signupHandler}> Create account </button>
        <h3> Have an accout already ? </h3> <Link to="/login"> Login </Link>
      </form>
    </div>
  );
};
