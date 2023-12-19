import axios from 'axios';
import {All_QUERY_REQUEST,All_QUERY_FAIL,All_QUERY_SUCCESS,NEW_QUERY_REQUEST,NEW_QUERY_SUCCESS,NEW_QUERY_FAIL,
STATUS_REQUEST,STATUS_SUCCESS,STATUS_FAIL, CLEAR_RESPONSE} from "../constants/queryConstant";

export const getAllQueries = (token) => async (dispatch) => {
    try {
      dispatch({ type: All_QUERY_REQUEST });
      
      const config = { headers: { "Content-Type": "application/json" , "Authorization" : token } };
      const { data } = await axios.get("api/queries",config);
  
      dispatch({
        type: All_QUERY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: All_QUERY_FAIL,
        payload: error.response.data.message,
      });
    }
};

export const createNewQuery = (queryData,token) => async (dispatch) => {
  try {
    dispatch({ type: NEW_QUERY_REQUEST });

    const config = { headers: { "Content-Type": "application/json" , "Authorization" : token } };

    const { data } = await axios.post(
      "api/queries",
      queryData,
      config
    );

    dispatch({
      type: NEW_QUERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_QUERY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getStatus = () => async (dispatch) => {
  try {
    dispatch({ type: STATUS_REQUEST });


    const { data } = await axios.get(
      "api/usage"
    );

    dispatch({
      type: STATUS_SUCCESS,
      payload: data.usage,
    });
  } catch (error) {
    dispatch({
      type: STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearResponse = () => async (dispatch) => {
  dispatch({type : CLEAR_RESPONSE});
}
