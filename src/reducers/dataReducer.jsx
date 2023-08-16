import { DATAACTIONS } from "./Actions/DataActions";

export const initialDataState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
  orderConfirmation: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case DATAACTIONS.FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case DATAACTIONS.FETCH_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case DATAACTIONS.FETCH_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case DATAACTIONS.FETCH_WISHLIST: {
      return {
        ...state,
        wishlist: action.payload,
      };
    }
    case DATAACTIONS.LOGOUT: {
      return {
        ...state,
        wishlist: [],
        cart: [],
      };
    }
    case "SETORDERCONFIRMATION": {
      return {
        ...state,
        orderConfirmation: [...state.orderConfirmation, action.payload],
      };
    }
    default:
      return state;
  }
};
