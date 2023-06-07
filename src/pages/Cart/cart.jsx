import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";

import { CartCard } from "../../components/CartCard/cartCard";
import { PriceDetailsCard } from "../../components/PriceDetailsCard/priceDetailsCard";
import "../Cart/cart.css";
import { Footer } from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Cart = () => {
  const { dataState } = useContext(dataContext);
  return (
    <div>
      <Navbar />
      {dataState?.cart?.length === 0 ? (
        <div>
          <h4> Oops! Your cart is empty </h4>
          <Button>
            <Link to="/products"> Explore the store</Link>
          </Button>
        </div>
      ) : (
        <div className="main-container">
          <div>{<CartCard products={dataState?.cart} />}</div>

          <div> {<PriceDetailsCard products={dataState?.cart} />} </div>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};
