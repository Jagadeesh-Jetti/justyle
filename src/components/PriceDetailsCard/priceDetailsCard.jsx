import { useNavigate } from "react-router-dom";

export const PriceDetailsCard = ({ products }) => {
  const navigate = useNavigate();
  const totalOriginalPrice = products.reduce(
    (acc, { original_price, quantity }) =>
      acc + Number(original_price) * Number(quantity),
    0
  );

  const totalDiscount = products.reduce(
    (acc, { price, original_price, quantity }) =>
      acc + (Number(original_price) - Number(price) * Number(quantity)),
    0
  );

  const totalFinalPrice = products.reduce(
    (acc, { price, quantity }) => acc + Number(price) * Number(quantity),
    0
  );

  return (
    <div>
      <div>
        <h2> Price Details ({products.length} items)</h2>

        <div>
          <p>Total MRP </p>
          <p>{totalOriginalPrice}</p>
        </div>

        <div>
          <p>Discount on MRP</p>
          <p>{totalDiscount}</p>
        </div>

        <div>
          <p> Convenience Fee </p>
          <p>Free</p>
        </div>

        <hr />

        <div>
          <h3> Total Amount </h3>
          <h3> {totalFinalPrice} </h3>
        </div>

        <button onClick={() => navigate("/checkout")}> Check out </button>
      </div>
    </div>
  );
};
