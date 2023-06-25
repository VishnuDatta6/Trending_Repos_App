import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';
import repoReducer from './reducers/repoSlice';
import locationReducer from './reducers/locationSlice';
import { fetchTrendingRepos } from "./actions";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    repos: repoReducer,
    location: locationReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(store);

store.dispatch(fetchTrendingRepos());

export default store;