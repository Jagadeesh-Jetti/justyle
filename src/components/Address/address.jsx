import React, { useContext, useState } from "react";
import { addressContext } from "../../contexts/addressContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "../Address/address.css";

const AddressForm = () => {
  const { addressDispatch, address, setAddress, setShowAddAddress } =
    useContext(addressContext);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (address.name.trim() === "") {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (address.street.trim() === "") {
      setErrorMessage("Please enter your street address.");
      return;
    }

    if (address.city.trim() === "") {
      setErrorMessage("Please enter your city.");
      return;
    }

    if (address.state.trim() === "") {
      setErrorMessage("Please enter your state.");
      return;
    }

    if (address.mobileNumber.trim() === "") {
      setErrorMessage("Please enter your mobile number.");
      return;
    }

    if (!/^\d{10}$/.test(address.mobileNumber.trim())) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setErrorMessage("");
    addressDispatch({ type: "STORE_ADDRESS", payload: address });
    navigate("/checkout");
    setAddress({
      id: "",
      name: "",
      street: "",
      city: "",
      state: "",
      mobileNumber: "",
    });
    setShowAddAddress(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      id: uuid(),
      [name]: value,
    }));
  };

  return (
    <div className="add-address-form-container">
      <h2>Add Address</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={address.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="Street Address"
            />
          </div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <div>
            <input
              type="text"
              id="state"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="State"
            />
          </div>
          <div>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={address.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="buttons-modal">
            <button type="submit">Submit</button>
            <button onClick={() => setShowAddAddress(false)}> Close </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
