import { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import { OrderSummary } from "../../components/OrderSummary/orderSummary";
import { addressContext } from "../../contexts/addressContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export const Checkout = () => {
  const { addressState } = useContext(addressContext);
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <Navbar />
      <h1 className="checkout-heading">Checkout</h1>
      <div className="checkout-content-container">
        <div className="checkout-container">
          <div className="address-section">
            {addressState?.address?.length === 0 ? (
              <div className="no-address">
                <h2>Select Address</h2>
                <h3>No address available</h3>
                <Button onClick={() => navigate("/address")}>
                  Add Address
                </Button>
              </div>
            ) : (
              <div className="address-container">
                {addressState?.address?.map((address) => (
                  <div className="address-card" key={address.id}>
                    <input type="radio" />
                    <div className="address-details">
                      <p className="address-name">{address.name}</p>
                      <p>{address.street}</p>
                      <p>{address.city}</p>
                      <p>{address.state}</p>
                      <p>{address.mobileNumber}</p>
                    </div>
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
    </div>
  );
};
