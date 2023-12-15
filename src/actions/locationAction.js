import axios from "axios";
import {NEW_LOC_REQUEST,NEW_LOC_SUCCESS,NEW_LOC_FAIL,UPDATE_LOC_REQUEST,UPDATE_LOC_SUCCESS,UPDATE_LOC_FAIL, DELETE_LOC_REQUEST, DELETE_LOC_SUCCESS, DELETE_LOC_FAIL} from '../constants/locConstant';

export const createNewLocation = (locData,token) => async (dispatch) => {
    try {
      dispatch({ type: NEW_LOC_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" , "Authorization" : token } };
  
      const { data } = await axios.post(
        "api/data",
        locData,
        config
      );
  
      dispatch({
        type: NEW_LOC_SUCCESS,
        payload: data.response,
      });
      return true;
    } catch (error) {
      dispatch({
        type: NEW_LOC_FAIL,
        payload: error.response.status,
      });
      return false;
    }
};

export const updateLocation = (locData,token) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LOC_REQUEST });

    const config = { headers: { "Content-Type": "application/json" , "Authorization" : token } };

    const { data } = await axios.put(
      "api/data",
      locData,
      config
    );

    dispatch({
      type: UPDATE_LOC_SUCCESS,
      payload: data.response,
    });
    return true;
  } catch (error) {
    dispatch({
      type: UPDATE_LOC_FAIL,
      payload: error.response.status,
    });
    return false;
  }
};

export const deleteLocation = (locData,token) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_LOC_REQUEST });

    const config = { headers: { "Content-Type": "application/json" , "Authorization" : token } };

    const { data } = await axios.delete(
      "api/data",
      {data : locData , headers : {"Authorization" : token}}
    );

    dispatch({
      type: DELETE_LOC_SUCCESS,
      payload: data.response,
    });
    return true;
  } catch (error) {
    dispatch({
      type: DELETE_LOC_FAIL,
      payload: error.response.status,
    });
    return false;
  }
};