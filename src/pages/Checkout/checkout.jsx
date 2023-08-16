import React, { useContext } from "react";
import { Navbar } from "../../components/NavBar/navBar";
import { OrderSummary } from "../../components/OrderSummary/orderSummary";
import { addressContext } from "../../contexts/addressContext";
import { EditAddress } from "../../components/modals/EditAddress/EditAddress";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
import AddressForm from "../../components/Address/address";

export const Checkout = () => {
  const {
    addressState,
    addressDispatch,
    showEditAddress,
    setShowEditAddress,
    showAddAddress,
    setShowAddAddress,
    setIsAddressSelected,
    isAddressSelected,
  } = useContext(addressContext);
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <Navbar />

      <h1 className="checkout-heading">Checkout</h1>

      <div className="checkout-content-container">
        <div className="checkout-address-container">
          <div className="address-header">
            <div> Select Delivery Address</div>
            <div>
              <Button onClick={() => setShowAddAddress(true)}>
                Add Address
              </Button>
            </div>
          </div>

          <div className="address-section">
            {addressState?.address?.length === 0 ? (
              <div className="no-address">
                <h2>Select Address</h2>
                <h3>No address available</h3>
              </div>
            ) : (
              <div className="address-container">
                {addressState?.address?.map((address) => (
                  <div className="address-card" key={address.id}>
                    <div className="address-checkbox">
                      <input
                        type="radio"
                        name="address"
                        checked={
                          isAddressSelected &&
                          addressState.selectedAddress.id === address.id
                        }
                        onChange={() => {
                          setIsAddressSelected(true);
                          addressDispatch({
                            type: "SELECT_ADDRESS",
                            payload: address.id,
                          });
                        }}
                      />
                    </div>

                    <div className="address-details">
                      <p className="address-name">{address.name}</p>
                      <p>{address.street}</p>
                      <p>
                        {address.city} , {address.state}
                      </p>

                      <p>{address.mobileNumber}</p>
                      <div className="address-details-options">
                        <div>
                          <Button
                            onClick={() => {
                              addressDispatch({
                                type: "FILTER_ADDRESS",
                                payload: address.id,
                              });
                              setShowEditAddress(true);
                            }}
                          >
                            Edit
                          </Button>
                        </div>
                        <div>
                          <Button
                            onClick={() =>
                              addressDispatch({
                                type: "DELETE_ADDRESS",
                                payload: address.id,
                              })
                            }
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {showAddAddress && (
          <div
            className="address_modal_outer_div"
            onClick={() => setShowAddAddress(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="address_modal_outer_container"
            >
              <AddressForm />
            </div>
          </div>
        )}
        {showEditAddress && (
          <div
            className="address_modal_outer_div"
            onClick={() => setShowEditAddress(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="address_modal_outer_container"
            >
              <EditAddress />
            </div>
          </div>
        )}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
