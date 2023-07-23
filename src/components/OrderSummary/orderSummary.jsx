import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import "../OrderSummary/orderSummary.css";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

export const OrderSummary = () => {
  const { dataState } = useContext(dataContext);
  const { totalMRP, totalDiscount, totalFinalPrice } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <div className="orderdetails-container">
      <div className="orderdetails-heading"> Order Summary </div>
      <div className="orderProducts">
        {dataState.cart.map((product) => (
          <div className="item">
            <div key={product._id} className="item">
              {product.title} {product.price} X {product.qty}
            </div>
            <div>{product.price * product.qty}</div>
          </div>
        ))}
      </div>

      <div className="orderdetails-heading">Price Details</div>

      <div className="orderdetails-container">
        <div className="item">
          <div>Total MRP</div>
          <div>{totalMRP}</div>
        </div>
        <div className="item">
          <div>Discount on MRP</div>
          <div>{totalDiscount}</div>
        </div>
        <div className="item">
          <div>Total Ampunt</div>
          <div>{totalFinalPrice}</div>
        </div>
      </div>

      <div className="orderdetails-heading">Deliver To</div>
      <div className="orderdetails-container"> adress display</div>
      <button onClick={() => navigate("/oc")}>Place order</button>
    </div>
  );
};
