import { Link } from "react-router-dom";
import "../Footer/footer.css";

export const Footer = () => {
  return (
    <div className="main-container-footer">
      <div className="first-container">
        <h2> Justyle : Just Style like that </h2>
        <div>
          <Link>
            <p>Github </p>
          </Link>
          <Link>
            <p> Twitter </p>
          </Link>
          <Link>
            <p> Linkedin </p>
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
