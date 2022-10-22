import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowsState {
    shows: any[]
}

const initialState: ShowsState = {
    shows: []
}

export const ShowsSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setShows: (state, action: PayloadAction<string[]>) => {
            state.shows = action.payload
        }
    }
});

export const { setShows } = ShowsSlice.actions;
export const shows = (state: any) => state.content.systemsAccessToken;

export default ShowsSlice.reducer;
