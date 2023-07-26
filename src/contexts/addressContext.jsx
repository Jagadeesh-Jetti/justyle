import { createContext, useReducer, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  addressInitialState,
  addressReducer,
} from "../reducers/addressReducer";

export const addressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    addressInitialState
  );

  const [address, setAddress] = useState({
    id: "",
    name: "",
    street: "",
    city: "",
    state: "",
    mobileNumber: "",
  });

  const values = {
    addressDispatch,
    addressState,
    address,
    setAddress,
    showEditAddress,
    setShowEditAddress,
    showAddAddress,
    setShowAddAddress,
  };

  return (
    <addressContext.Provider value={values}>{children}</addressContext.Provider>
  );
};
