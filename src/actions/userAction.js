import axios from "axios";
import {REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from "../constants/userConstant";

//register action
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post("/api/users/register",userData, config);
      console.log(data);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data});
  
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
};

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
