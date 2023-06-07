import axios from "axios";
import { createContext, useContext } from "react";
import { DATAACTIONS } from "../reducers/Actions/DataActions";
import { dataContext } from "./dataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { dataState } = useContext(dataContext);

  const addToCartHandler = async (product, dataDispatch) => {
    try {
      const encodedToken = localStorage.getItem("userToken");
      const response = await axios.post(
        "api/user/cart",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        dataDispatch({
          type: DATAACTIONS.FETCH_CART,
          payload: response.data.cart,
        });
        toast.success("Added to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCartHandler = async (productId, dataDispatch) => {
    try {
      const encodedToken = localStorage.getItem("userToken");
      const fetchData = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (fetchData.status === 200) {
        dataDispatch({
          type: DATAACTIONS.FETCH_CART,
          payload: fetchData.data.cart,
        });
        toast.warning("Removed from cart");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isProductInCart = (productId) => {
    return dataState.cart.find(({ _id }) => _id === productId);
  };

  const values = {
    addToCartHandler,
    removeFromCartHandler,
    isProductInCart,
  };

  return (
    <cartContext.Provider value={values}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </cartContext.Provider>
  );
};
