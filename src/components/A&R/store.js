import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './reducers/authSlice';
import repoReducer from './reducers/repoSlice';
import locationReducer from './reducers/locationSlice';
import storage from 'redux-persist/lib/storage';
import {REGISTER, persistReducer, persistStore} from "redux-persist";
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
    middleware: getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [REGISTER]
        }
    })
})

export const persistor = persistStore(store);

export default store;