import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import { Navbar } from "../../components/NavBar/navBar";

import { CartCard } from "../../components/CartCard/cartCard";
import { PriceDetailsCard } from "../../components/PriceDetailsCard/priceDetailsCard";

export const Cart = () => {
  const { dataState } = useContext(dataContext);

  return (
    <div>
      <Navbar />
      <h1>this is the cart </h1>
      <div className="main-container">
        <div>{<CartCard products={dataState?.cart} />}</div>

        <div> {<PriceDetailsCard products={dataState?.cart} />} </div>
      </div>
    </div>
  );
};
