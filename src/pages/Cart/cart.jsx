import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";
import { CartCard } from "../../components/CartCard/cartCard";
import { PriceDetailsCard } from "../../components/PriceDetailsCard/priceDetailsCard";
import { Footer } from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./cart.css";

export const Cart = () => {
  const { dataState } = useContext(dataContext);

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-content">
        {dataState?.cart?.length === 0 ? (
          <div className="cart-empty">
            <h4>Oops! Your cart is empty</h4>
            <Button>
              <Link to="/products">Explore the store</Link>
            </Button>
          </div>
        ) : (
          <div className="main-container">
            <div className="cart-card-container">
              <CartCard products={dataState?.cart} />
            </div>

            <div className="price-details-container">
              <PriceDetailsCard products={dataState?.cart} />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
