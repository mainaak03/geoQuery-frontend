import axios from "axios";
import {REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,NODE_URI} from "../constants/userConstant";
//register action
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(NODE_URI+"/api/users/register",userData, config);
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
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      NODE_URI+"/api/users/login",
      userData,
      config
    );
    console.log(data);
    localStorage.setItem("token", data.token);

    // should redirect to home page
    
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
