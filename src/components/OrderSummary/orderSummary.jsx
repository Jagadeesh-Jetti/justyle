import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";
import "../OrderSummary/orderSummary.css";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { addressContext } from "../../contexts/addressContext";
import { DATAACTIONS } from "../../reducers/Actions/DataActions";

export const OrderSummary = () => {
  const { dataState, dataDispatch } = useContext(dataContext);
  const { addressState, isAddressSelected } = useContext(addressContext);
  const { totalMRP, totalDiscount, totalFinalPrice, clearCart } =
    useContext(cartContext);
  const navigate = useNavigate();

  return (
    <div className="ordersummary-container">
      <div className="orderdetails-heading">Order Summary</div>
      <div className="orderProducts">
        {dataState.cart.map((product) => (
          <div key={product._id} className="item">
            {product.title} {product.price} X {product.qty}
            <div>₹{product.price * product.qty}</div>
          </div>
        ))}
      </div>

      <div className="orderdetails-heading">Price Details</div>

      <div className="orderdetails-container">
        <div className="item">
          <div>Total MRP</div>
          <div>₹{totalMRP}</div>
        </div>
        <div className="item">
          <div>Discount on MRP</div>
          <div>₹{totalDiscount}</div>
        </div>
        <div className="item">
          <div>Total Amount</div>
          <div>₹{totalFinalPrice}</div>
        </div>
      </div>

      <div className="orderdetails-heading">Deliver To</div>
      {addressState.address.find(
        ({ id }) => id === addressState.selectedAddress.id
      ) ? (
        <div className="orderdetails-container">
          <div>{addressState.selectedAddress?.name}</div>
          <div> {addressState.selectedAddress.street}</div>
          <div>
            {addressState.selectedAddress.city},{" "}
            {addressState.selectedAddress.state}
          </div>
          <div> {addressState.selectedAddress.mobileNumber}</div>
        </div>
      ) : null}

      {isAddressSelected ? (
        <button
          onClick={() => {
            navigate("/oc");
            dataDispatch({ type: DATAACTIONS.FETCH_CART, payload: [] });
          }}
        >
          Place order
        </button>
      ) : (
        <button>Select address to place order</button>
      )}
    </div>
  );
};
