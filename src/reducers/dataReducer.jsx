import { DATAACTIONS } from "./Actions/DataActions";

export const initialDataState = {
  products: [],
  categories: [],
  cart: [],
  wishlist: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case DATAACTIONS.FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
