import { Link, useNavigate } from "react-router-dom";
import "../NavBar/navBar.css";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { authContext } from "../../contexts/authContext";
import { filterContext } from "../../contexts/filterContext";
import { FILTERACTIONS } from "../../reducers/Actions/FIlterActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { filterDispatch, filterState } = useContext(filterContext);
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

      <Link to="/profile" className="navbar-links">
        <div>
          <FontAwesomeIcon icon={faUser} className="no-rotate-icon" />
        </div>
        <div className="icon-name">Profile</div>
      </Link>

      <Link to="/wishlist" className="navbar-links">
        <div>
          <FontAwesomeIcon icon={faHeart} className="no-rotate-icon" />
        </div>
        <div className="icon-name">Wishlist</div>
      </Link>

      <Link to="/cart" className="navbar-links">
        <div>
          <FontAwesomeIcon icon={faCartShopping} className="no-rotate-icon" />
        </div>
        <div className="icon-name">Cart</div>
      </Link>
    </div>
  );
};
