import { REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from "./constants";

export const registerReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        message: null,
        isFetching: true,
        error: false,
      };
    case REGISTER_SUCCESS:
      return {
        message: action.payload,
        isFetching: false,
        error: false,
      };
    case REGISTER_FAIL:
      return {
        message: action.payload,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};
