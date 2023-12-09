import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import {queryReducer} from "./reducers/queryReducer";

const store = configureStore({
    reducer : {
        user : userReducer,
        queries : queryReducer,
    },
});

export default store;