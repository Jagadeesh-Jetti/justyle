import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";

export const OrderSummary = () => {
  const { dataState } = useContext(dataContext);
  return (
    <div className="orderdetails-container">
      <div className="orderdetails-heading"> Order Summary </div>
      <div className="orderProducts">
        {dataState.cart.map((product) => (
          <div>
            <div key={product._id}>
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
          <div>Total Price without discount</div>
        </div>
        <div className="item">
          <div>Discount on MRP</div>
          <div>Total Price without discount</div>
        </div>
        <div className="item">
          <div>Total Ampunt</div>
          <div>Total Price without discount</div>
        </div>
      </div>

      <div className="orderdetails-heading">Deliver To</div>
      <div className="orderdetails-container"> adress display</div>
      <button>Place order</button>
    </div>
  );
};
