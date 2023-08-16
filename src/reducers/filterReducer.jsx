import { FILTERACTIONS } from "./Actions/FIlterActions";

export const initialFilterState = {
  selectedCategory: [],
  selectedPriceSort: "",
  selectedRating: "1",
  searchedValue: "",
};

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case FILTERACTIONS.FILTER_BY_CATEGORY: {
      return {
        ...state,
        selectedCategory: state.selectedCategory.includes(action.payload)
          ? state.selectedCategory.filter(
              (category) => category !== action.payload
            )
          : [...state.selectedCategory, action.payload],
      };
    }
    case FILTERACTIONS.FILTER_BY_PRICE: {
      return {
        ...state,
        selectedPriceSort: action.payload,
      };
    }
    case FILTERACTIONS.FILTER_BY_RATING: {
      return {
        ...state,
        selectedRating: action.payload,
      };
    }
    case FILTERACTIONS.FILTER_BY_SEARCH: {
      return {
        ...state,
        searchedValue: action.payload,
      };
    }
    case FILTERACTIONS.CLEAR: {
      return {
        ...state,
        selectedCategory: [],
        selectedPriceSort: "",
        selectedRating: "1",
        searchedValue: "",
      };
    }

    default:
      return state;
  }
};
