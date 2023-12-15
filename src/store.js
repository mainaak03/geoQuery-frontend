import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import {queryReducer,newQueryReducer} from "./reducers/queryReducer";
import {locReducer} from "./reducers/locationReducer";

const store = configureStore({
    reducer : {
        user : userReducer,
        queries : queryReducer,
        newQuery : newQueryReducer,
        location : locReducer,
    },
});

export default store;