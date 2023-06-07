import axios from "axios";
import { createContext, useContext } from "react";
import { DATAACTIONS } from "../reducers/Actions/DataActions";
import { dataContext } from "./dataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const wishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const { dataState } = useContext(dataContext);
  const addToWishlistHandler = async (product, dataDispatch) => {
    try {
      const encodedToken = localStorage.getItem("userToken");
      const response = await axios.post(
        "api/user/wishlist",
        { product },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        dataDispatch({
          type: DATAACTIONS.FETCH_WISHLIST,
          payload: response.data.wishlist,
        });
        toast.success("Added to wishlist");
      }
      // console.log(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlistHandler = async (productId, dataDispatch) => {
    try {
      const encodedToken = localStorage.getItem("userToken");
      const fetchData = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (fetchData.status === 200) {
        dataDispatch({
          type: DATAACTIONS.FETCH_WISHLIST,
          payload: fetchData.data.wishlist,
        });
        toast.warning("Removed from Wishlist");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isProductInWishlist = (productId) => {
    return dataState.wishlist.find(({ _id }) => _id === productId);
  };

  const values = {
    addToWishlistHandler,
    removeFromWishlistHandler,
    isProductInWishlist,
  };

  return (
    <wishlistContext.Provider value={values}>
      {children}
    </wishlistContext.Provider>
  );
};
