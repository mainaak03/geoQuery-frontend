import axios from 'axios';
import {All_QUERY_REQUEST,All_QUERY_FAIL,All_QUERY_SUCCESS} from "../constants/queryConstant";

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