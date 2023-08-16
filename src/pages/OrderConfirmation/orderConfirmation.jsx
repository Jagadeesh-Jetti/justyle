import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/NavBar/navBar";
import { useContext } from "react";
import { dataContext } from "../../contexts/dataContext";

export const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { dataState } = useContext(dataContext);

  console.log(dataState.orderConfirmation);
  return (
    <div>
      <Navbar />
      <h3> Order placed successfully </h3>
      <div>
        {dataState.orderConfirmation.map((orderItem) => (
          <div key={orderItem._id} className="order-item">
            <div>{orderItem.title}</div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/products")}> Go to products </button>
    </div>
  );
};
