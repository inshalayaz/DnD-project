import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./AuthActions";
export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    // window.location = "http://localhost:3000/";
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};
