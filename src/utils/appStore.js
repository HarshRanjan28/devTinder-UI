import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice';
import feedReducer from './feedSlice';
import requestReducer from "./requestSlice";
import connectionsReducer from "./connectionsSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        requests: requestReducer,
        connections: connectionsReducer,
    }
})

export default appStore;