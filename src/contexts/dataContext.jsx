import { createContext, useEffect, useReducer } from "react";
import { DataReducer, initialDataState } from "../reducers/dataReducer";
import { getCategories, getProducts } from "../services/APIcalls";
import { DATAACTIONS } from "../reducers/Actions/DataActions";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(DataReducer, initialDataState);

  useEffect(() => {
    const fetch = async () => {
      try {
        const productsResponse = await getProducts();
        if (productsResponse.status === 200) {
          dataDispatch({
            type: DATAACTIONS.FETCH_PRODUCTS,
            payload: productsResponse.data.products,
          });
        }

        const categoryResponse = await getCategories();
        if (categoryResponse.status === 200) {
          dataDispatch({
            type: DATAACTIONS.FETCH_CATEGORIES,
            payload: categoryResponse.data.categories,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  });

  const values = {
    dataState,
    dataDispatch,
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};
