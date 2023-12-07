import {createReducer} from "@reduxjs/toolkit";
import {REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from "../constants/userConstant";

const initialState = {
    user : {},
    loading : false,
    isAuthenticated :false,
    registerSuccess : false,
    token : "",
};

export const userReducer = createReducer(initialState,{
    REGISTER_USER_REQUEST : (state,action) => {
        state.loading = true;
    },
    REGISTER_USER_SUCCESS : (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.registerSuccess = true;
    },
    REGISTER_USER_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        state.registerSuccess = false;
    },
    LOGIN_REQUEST : (state,action) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOGIN_SUCCESS : (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token
    },
    LOGIN_FAIL : (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.token = "";
    }
});