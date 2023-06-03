import { Link } from "react-router-dom";
import "../NavBar/navBar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h3> JustYle </h3>
      <Link to="/products">
        <h3> Products </h3>
      </Link>

      <h3> Wishlist </h3>
      <h3> Cart </h3>
    </div>
  );
};
