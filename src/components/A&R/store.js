import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';
import repoReducer from './reducers/repoSlice';
import locationReducer from './reducers/locationSlice';
import { fetchTrendingRepos } from "./actions";


const store = configureStore({
    reducer: {
        auth: authReducer,
        repos: repoReducer,
        location: locationReducer
    },
});

store.dispatch(fetchTrendingRepos());

export default store;