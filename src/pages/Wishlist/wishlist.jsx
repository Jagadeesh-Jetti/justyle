import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { ProductCard } from "../../components/productCard/productCard";
import { Footer } from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./wishlist.css";

export const Wishlist = () => {
  const { dataState } = useContext(dataContext);

  return (
    <div className="wishlist-page">
      <Navbar />

      <div className="wishlist-content">
        {dataState?.wishlist?.length === 0 ? (
          <div className="wishlist-empty">
            <h4>Ooops! Your Wishlist is empty</h4>
            <Button>
              <Link to="/products">Explore the store</Link>
            </Button>
          </div>
        ) : (
          <div className="wishlist-container">
            <ProductCard fromWishlist={true} products={dataState?.wishlist} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
