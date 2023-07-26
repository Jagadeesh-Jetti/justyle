import { useContext, useState } from "react";
import { addressContext } from "../../../contexts/addressContext";
import { useNavigate } from "react-router-dom";
import "../EditAddress/EditAddress.css";
import { v4 as uuid } from "uuid";

export const EditAddress = () => {
  const { addressDispatch, addressState, setShowEditAddress } =
    useContext(addressContext);

  const [tempAddress, setTempAddress] = useState(addressState.editAddress);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tempAddress.name.trim() === "") {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (tempAddress.street.trim() === "") {
      setErrorMessage("Please enter your street address.");
      return;
    }

    if (tempAddress.city.trim() === "") {
      setErrorMessage("Please enter your city.");
      return;
    }

    if (tempAddress.state.trim() === "") {
      setErrorMessage("Please enter your state.");
      return;
    }

    if (tempAddress.mobileNumber.trim() === "") {
      setErrorMessage("Please enter your mobile number.");
      return;
    }

    if (!/^\d{10}$/.test(tempAddress.mobileNumber.trim())) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setErrorMessage("");
    addressDispatch({
      type: "EDIT_ADDRESS",
      payload: tempAddress,
    });
    setShowEditAddress(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="add-address-form-container">
      <h2>Edit Address</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={tempAddress.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            id="street"
            name="street"
            value={tempAddress.street}
            onChange={handleChange}
            placeholder="Street Address"
          />
        </div>
        <div>
          <input
            type="text"
            id="city"
            name="city"
            value={tempAddress.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        <div>
          <input
            type="text"
            id="state"
            name="state"
            value={tempAddress.state}
            onChange={handleChange}
            placeholder="State"
          />
        </div>
        <div>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={tempAddress.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <div className="buttons-modal">
          <button type="submit">Submit</button>
          <button onClick={() => setShowEditAddress(false)}> Close </button>
        </div>
      </form>
    </div>
  );
};
