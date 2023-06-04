import { createContext, useReducer } from "react";
import { FilterReducer, initialFilterState } from "../reducers/filterReducer";

export const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    initialFilterState
  );

  const values = {
    filterState,
    filterDispatch,
  };

  return (
    <filterContext.Provider value={values}>{children}</filterContext.Provider>
  );
};
