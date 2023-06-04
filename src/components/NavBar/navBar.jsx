import { Link } from "react-router-dom";
import "../NavBar/navBar.css";
// import { useContext } from "react";
// import { filterContext } from "../../contexts/filterContext";

// import { useContext } from "react";
// import { dataContext } from "../../contexts/dataContext";

export const Navbar = () => {
  // const { dataState } = useContext(dataContext);
  // const categories = dataState.categories.reduce(
  //   (acc, cur) =>
  //     acc.includes(cur.categoryName) ? acc : [...acc, cur.categoryName],
  //   []
  // );

  return (
    <div className="navbar">
      <Link to="/">
        <h3>JustYle</h3>
      </Link>

      {/* <div className="categoryNav">
        {categories.map((category) => {
          return (
            <Link to="/products">
              <h3> {category} </h3>
            </Link>
          );
        })}
      </div> */}

      {/* <Link
        to="/products"
        onClick={() =>
          filterDispatch({
            type: FILTERACTIONS.FILTER_BY_CATEGORY,
            payload: "Men",
          })
        }
      >
        <h3>Men</h3>
      </Link>

      <Link
        to="/products"
        onClick={() =>
          filterDispatch({
            type: FILTERACTIONS.FILTER_BY_CATEGORY,
            payload: "Women",
          })
        }
      >
        <h3>Women</h3>
      </Link>

      <Link
        to="/products"
        onClick={() =>
          filterDispatch({
            type: FILTERACTIONS.FILTER_BY_CATEGORY,
            payload: "Kids",
          })
        }
      >
        <h3>Kids</h3>
      </Link> */}

      <Link to="/products">
        <h3>Products</h3>
      </Link>

      <div className="navSearch">
        <input
          type="search"
          placeholder="Search for products"
          className="inputSearch"
        />
      </div>

      <h3>Wishlist</h3>
      <h3>Cart</h3>
      <h3>Account</h3>
    </div>
  );
};
