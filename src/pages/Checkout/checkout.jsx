import { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import { OrderSummary } from "../../components/OrderSummary/orderSummary";
import { addressContext } from "../../contexts/addressContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Checkout/checkout.css";

export const Checkout = () => {
  const { addressState } = useContext(addressContext);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
        <h1> Checkout </h1>
        <div className="checkout-container">
          <div>
            {addressState?.address?.length === 0 ? (
              <div>
                <h2> Select Address </h2>
                <h3> No address available</h3>
                <Button onClick={() => navigate("/address")}>
                  Add Address
                </Button>
              </div>
            ) : (
              <div className="address-container">
                {addressState?.address?.map((address) => (
                  <div className="address-card">
                    <input type="radio" />
                    <p> {address?.name} </p>
                    <p> {address?.street} </p>
                    <p> {address?.city} </p>
                    <p> {address?.state} </p>
                    <p> {address?.mobileNumber} </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};
