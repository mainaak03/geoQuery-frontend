import {createReducer} from "@reduxjs/toolkit";
import {NEW_LOC_REQUEST,NEW_LOC_FAIL,NEW_LOC_SUCCESS,UPDATE_LOC_REQUEST,UPDATE_LOC_SUCCESS,UPDATE_LOC_FAIL,
DELETE_LOC_REQUEST,DELETE_LOC_SUCCESS,DELETE_LOC_FAIL} from "../constants/locConstant";

const initialState = {
    response : {},
    loading : false,
    error : null,
};

export const locReducer = createReducer(initialState,{
    NEW_LOC_REQUEST : (state,action) => {
        state.loading = true;
        state.response = {}
        state.error = null;
    },
    NEW_LOC_SUCCESS : (state,action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
    },
    NEW_LOC_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.response = {};
    },
    UPDATE_LOC_REQUEST : (state,action) => {
        state.loading = true;
        state.response = {}
        state.error = null;
    },
    UPDATE_LOC_SUCCESS : (state,action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
    },
    UPDATE_LOC_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.response = {};
    },
    DELETE_LOC_REQUEST : (state,action) => {
        state.loading = true;
        state.response = {}
        state.error = null;
    },
    DELETE_LOC_SUCCESS : (state,action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
    },
    DELETE_LOC_FAIL : (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.response = {};
    }
});