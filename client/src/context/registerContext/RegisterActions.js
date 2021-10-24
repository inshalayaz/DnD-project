import { REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from "./constants";

export const registerStart = () => ({
  type: REGISTER_START,
});

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload: message,
});

export const registerFailed = (message) => ({
  type: REGISTER_FAIL,
  payload: message,
});
