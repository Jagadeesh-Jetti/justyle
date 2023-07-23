import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import "../PriceDetailsCard/priceDetailsCard.css";
import { Button } from "@mui/material";

export const PriceDetailsCard = ({ products }) => {
  const navigate = useNavigate();
  const { totalMRP, totalDiscount, totalFinalPrice } = useContext(cartContext);

  return (
    <div className="pdc-main-container">
      <div>
        <h2> Price Details ({products.length} items)</h2>

        <div className="item-pdc">
          <div>Total MRP </div>
          <div>{totalMRP}</div>
        </div>

        <div className="item-pdc">
          <div>Discount on MRP</div>
          <div>{totalDiscount}</div>
        </div>

        <div className="item-pdc">
          <div> Convenience Fee </div>
          <div>Free</div>
        </div>

        <hr />

        <div className="item-pdc">
          <h3> Total Amount </h3>
          <h3> {totalFinalPrice} </h3>
        </div>

        <Button className="btn-pdc" onClick={() => navigate("/checkout")}>
          Check out
        </Button>
      </div>
    </div>
  );
};
