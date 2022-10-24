import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./ShowsSlice";

///////////////////////
// Setup redux store //
///////////////////////

const store = configureStore({
    reducer: {
        content: contentReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;