import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import {queryReducer,newQueryReducer} from "./reducers/queryReducer";

const store = configureStore({
    reducer : {
        user : userReducer,
        queries : queryReducer,
        newQuery : newQueryReducer,
    },
});

export default store;