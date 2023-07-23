import { Link } from "react-router-dom";
import "../Footer/footer.css";

export const Footer = () => {
  return (
    <div className="main-container-footer">
      <div className="first-container">
        <h2> Justyle </h2>
        <p> Just Style like that </p>
        <div>
          <Link>
            <p> github </p>
          </Link>
          <Link>
            <p> twitter </p>
          </Link>
          <Link>
            <p> linkedin </p>
          </Link>
        </div>
      </div>

      <div className="second-container">
        <h3> Quick Links</h3>
        <Link to="/products">
          <p> Products </p>
        </Link>
        <Link to="/cart">
          <p> Cart </p>
        </Link>
        <Link to="/wishlist">
          <p> Wishlist </p>
        </Link>
      </div>
    </div>
  );
};
