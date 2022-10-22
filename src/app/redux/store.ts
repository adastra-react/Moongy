import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./ShowsSlice";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        content: contentReducer
    }
});

// const reducers = combineReducers({
//         devices: devicesReducer
//   });
  
//   const persistConfig = {
//     key: 'root',
//     storage,
//     // whitelist: ['navigation'],
//   };
  
//   const persistedReducer = persistReducer(persistConfig, reducers);
  
//   const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: [thunk],
//   });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;