import React, { useContext, useState } from "react";
import { Navbar } from "../NavBar/navBar";
import { addressContext } from "../../contexts/addressContext";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const { addressDispatch } = useContext(addressContext);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const userAddress = {
    name: name,
    street: street,
    city: city,
    state: state,
    mobileNumber: mobileNumber,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication/validation checks
    if (name.trim() === "") {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (street.trim() === "") {
      setErrorMessage("Please enter your street address.");
      return;
    }

    if (city.trim() === "") {
      setErrorMessage("Please enter your city.");
      return;
    }

    if (state.trim() === "") {
      setErrorMessage("Please enter your state.");
      return;
    }

    if (mobileNumber.trim() === "") {
      setErrorMessage("Please enter your mobile number.");
      return;
    }

    if (!/^\d{10}$/.test(mobileNumber.trim())) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    // If all validations pass, proceed with form submission/authentication
    setErrorMessage("");
    addressDispatch({ type: "STORE_ADDRESS", payload: userAddress });
    navigate("/checkout");
  };

  return (
    <div>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="street">Street Address:</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
