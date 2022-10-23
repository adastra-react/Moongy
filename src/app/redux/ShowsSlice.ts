import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowsState {
    shows: any[]
    loading: boolean
}

const initialState: ShowsState = {
    shows: [],
    loading: false
}

export const ShowsSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setShows: (state, action: PayloadAction<string[]>) => {
            state.shows = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
});

export const { setShows } = ShowsSlice.actions;
export const { setLoading } = ShowsSlice.actions;
export const loading = (state: any) => state.content.loading;
export const shows = (state: any) => state.content.systemsAccessToken;

export default ShowsSlice.reducer;
