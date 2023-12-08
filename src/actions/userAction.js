import axios from "axios";
import {REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS
,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL} from "../constants/userConstant";


//register action
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post("/api/users/register",userData, config);
      console.log(data);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data});
      return true;
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.status,
      });
      return false;
    }
};

//Login
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/users/login",userData,config);
    console.log(data);
    localStorage.setItem("token", data.token);
    
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    return true;
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.status});
    return false;
  }
};

export const loadUser = (token) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" , "Authorization" : token } };
    const { data } = await axios.get("/api/users/currentuser",config);
    console.log(data);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data});
    return true;
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.status });
    return false;
  }
};


export const logout = () => async (dispatch) => {
  dispatch({type : LOGOUT_SUCCESS});
};