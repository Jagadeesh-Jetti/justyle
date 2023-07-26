import React, { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import "../Profile/Profile.css";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../contexts/dataContext";
import { DATAACTIONS } from "../../reducers/Actions/DataActions";

export const Profile = () => {
  const { authDispatch } = useContext(authContext);
  const { dataDispatch } = useContext(dataContext);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();

  console.log(user);

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-container">
        <div>
          <img src="./user.jpg" alt="loading" className="profile-image" />
        </div>
        <div>
          <div> {user?.email}</div>
          <div>
            {user?.firstName} {user?.lastName}
          </div>
        </div>
        <div
          className="logout-btn"
          onClick={() => {
            dataDispatch({ type: DATAACTIONS.LOGOUT });
            localStorage.removeItem("GuestuserToken");
            authDispatch({ type: "toggleIsLoggedIN", payload: false });
            navigate("/login");
          }}
        >
          logout
        </div>
      </div>
    </div>
  );
};
