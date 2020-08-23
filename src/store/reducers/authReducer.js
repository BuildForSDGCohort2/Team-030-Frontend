import { USER_LOADING } from "../types";

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        userLoading: true,
      };

    default:
      return state;
  }
};

export default authReducer;
