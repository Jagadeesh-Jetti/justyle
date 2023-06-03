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
        const productsResponse = getProducts();
        if (productsResponse.status === 200) {
          dataDispatch({
            type: DATAACTIONS.FETCH_PRODUCTS,
            payload: { products: productsResponse.data.products },
          });
        }

        const categoryResponse = getCategories();
        if (categoryResponse.status === 200) {
          dataDispatch({
            type: DATAACTIONS.FETCH_CATEGORIES,
            payload: { categories: categoryResponse.data.categories },
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
