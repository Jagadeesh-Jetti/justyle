import { Link, useNavigate } from "react-router-dom";
import "../NavBar/navBar.css";
// import { useContext } from "react";
// import { filterContext } from "../../contexts/filterContext";

import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { authContext } from "../../contexts/authContext";
import { filterContext } from "../../contexts/filterContext";
import { FILTERACTIONS } from "../../reducers/Actions/FIlterActions";
import { DATAACTIONS } from "../../reducers/Actions/DataActions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHeart,
//   // faCartShopping,
//   // faUser,
// } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const { dataState, dataDispatch } = useContext(dataContext);
  const { filterDispatch, filterState } = useContext(filterContext);
  const { authState, authDispatch } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/" className="navbar-links">
        <h3>JustYle</h3>
      </Link>

      <Link to="/products" className="navbar-links">
        <h3>Products</h3>
      </Link>

      <div className="navSearch">
        <input
          type="search"
          placeholder="Search for products"
          className="inputSearch"
          value={filterState.searchedValue}
          onChange={(e) => {
            filterDispatch({
              type: FILTERACTIONS.FILTER_BY_SEARCH,
              payload: e.target.value,
            });
            navigate("/products");
          }}
        />
      </div>

      <Link to="/wishlist" className="navbar-links">
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        <h3>Wishlist ({dataState.wishlist.length}) </h3>
      </Link>

      <Link to="/cart" className="navbar-links">
        <h3>Cart ({dataState.cart.length}) </h3>
      </Link>

      <Link to="/profile" className="navbar-links">
        <h3>Profile </h3>
      </Link>

      {authState?.isLoggedIn ? (
        <Link
          onClick={() => {
            dataDispatch({ type: DATAACTIONS.LOGOUT });
            localStorage.removeItem("GuestuserToken");
            authDispatch({ type: "toggleIsLoggedIN", payload: false });
            navigate("/login");
          }}
          className="navbar-links"
        >
          <h3>Log out</h3>
        </Link>
      ) : (
        <Link to="/login" className="navbar-links">
          <h3>Login</h3>
        </Link>
      )}
    </div>
  );
};
