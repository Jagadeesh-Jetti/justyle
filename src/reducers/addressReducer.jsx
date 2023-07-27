export const addressInitialState = {
  address: [],
  isAddressPresent: false,
  selectedAddress: {},
  editAddress: {},
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "STORE_ADDRESS": {
      return {
        ...state,
        address: [...state.address, action.payload],
        isAddressPresent: true,
      };
    }
    case "FILTER_ADDRESS": {
      const filteredAddress = state.address.find(
        ({ id }) => id === action.payload
      );
      return {
        ...state,
        editAddress: filteredAddress || {},
        selectedAddress: filteredAddress ? filteredAddress : {},
      };
    }
    case "SELECT_ADDRESS": {
      const filteredAddress = state.address.find(
        ({ id }) => id === action.payload
      );
      return {
        ...state,
        selectedAddress: filteredAddress ? filteredAddress : {},
      };
    }

    case "DELETE_ADDRESS": {
      return {
        ...state,
        address: state.address.filter(({ id }) => id !== action.payload),
      };
    }
    case "EDIT_ADDRESS": {
      const updatedAddress = state.address.map((address) =>
        address.id === action.payload.id ? action.payload : address
      );
      const selectedAddressUpdated =
        state.selectedAddress.id === action.payload.id
          ? action.payload
          : state.selectedAddress;

      return {
        ...state,
        address: updatedAddress,
        editAddress: {},
        selectedAddress: selectedAddressUpdated,
      };
    }
    default: {
      return state;
    }
  }
};
