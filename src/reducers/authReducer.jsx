export const InitialAuthState = {
  isLoggedIn: false,
  userDetails: {},
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "toggleIsLoggedIN": {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
