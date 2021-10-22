import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from "./constants";

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
export const loginFail = () => ({
  type: LOGIN_FAIL,
});
