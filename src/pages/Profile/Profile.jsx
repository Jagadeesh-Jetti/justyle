import React, { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import "../Profile/Profile.css";
import { authContext } from "../../contexts/authContext";

export const Profile = () => {
  const { logout } = useContext(authContext);
  const user = JSON.parse(localStorage.getItem("user"));

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
        <div className="logout-btn" onClick={logout}>
          logout
        </div>
      </div>
    </div>
  );
};
