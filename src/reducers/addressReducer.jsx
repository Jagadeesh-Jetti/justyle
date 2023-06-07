export const addressInitialState = {
  address: [],
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "STORE_ADDRESS": {
      return {
        ...state,
        address: [...state.address, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
