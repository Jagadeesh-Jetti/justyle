import { createContext, useReducer } from "react";
import {
  addressInitialState,
  addressReducer,
} from "../reducers/addressReducer";

export const addressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    addressInitialState
  );

  const values = {
    addressDispatch,
    addressState,
  };
  return (
    <addressContext.Provider value={values}>{children}</addressContext.Provider>
  );
};
