import {createReducer} from "@reduxjs/toolkit";
import {All_QUERY_REQUEST,All_QUERY_SUCCESS,All_QUERY_FAIL} from "../constants/queryConstant";

const initialState = {
    queries : [],
    loading : false,
    error : null,
};

export const queryReducer = createReducer(initialState,{
    All_QUERY_REQUEST : (state,action) => {
        state.loading = true;
    },
    All_QUERY_SUCCESS : (state,action) => {
        state.loading = false;
        state.queries = action.payload;
    },
    All_QUERY_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
    }
});