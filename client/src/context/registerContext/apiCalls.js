import axios from "axios";
import {
  registerFailed,
  registerStart,
  registerSuccess,
} from "./RegisterActions";

export const register = async (user, dispatch) => {
  dispatch(registerStart());

  try {
    const res = await axios.post(
      "http://localhost:3001/api/auth/register",
      user,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    dispatch(registerSuccess(res.data.message));
  } catch (error) {
    dispatch(registerFailed(error.response.data.message));
    // console.log(error.response.data.message);
  }
};
