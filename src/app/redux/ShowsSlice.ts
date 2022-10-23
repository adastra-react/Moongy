import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowsState {
    shows: any[]
    episodes: any[]
    loading: boolean
}

const initialState: ShowsState = {
    shows: [],
    loading: false,
    episodes: []
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
        },
        setEpisodes: (state, action: PayloadAction<string[]>) => {
            state.episodes = action.payload
        }
    }
});

export const { setShows } = ShowsSlice.actions;
export const { setLoading } = ShowsSlice.actions;
export const { setEpisodes } = ShowsSlice.actions;
export const loading = (state: any) => state.content.loading;
export const shows = (state: any) => state.content.systemsAccessToken;
export const episodes = (state: any) => state.content.episodes;

export default ShowsSlice.reducer;
