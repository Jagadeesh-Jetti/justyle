import { FILTERACTIONS } from "./Actions/FIlterActions";

export const initialFilterState = {
  selectedCategory: [],
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
    default:
      return state;
  }
};
