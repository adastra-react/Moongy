import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShowsState {
    shows: any[]
    episodes: any[]
    loading: boolean
    episodesLoading: boolean
}

const initialState: ShowsState = {
    shows: [],
    loading: false,
    episodes: [],
    episodesLoading: false
}

///////////////////////////
// Setup from redux Slice//
///////////////////////////

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
        },
        setEpisodesLoading: (state, action: PayloadAction<boolean>) => {
            state.episodesLoading = action.payload
        }
    }
});

//////////////////////////////////
//Export the actions and states///
//////////////////////////////////

export const { setShows } = ShowsSlice.actions;
export const { setLoading } = ShowsSlice.actions;
export const { setEpisodes } = ShowsSlice.actions;
export const { setEpisodesLoading } = ShowsSlice.actions;
export const loading = (state: any) => state.content.loading;
export const shows = (state: any) => state.content.systemsAccessToken;
export const episodes = (state: any) => state.content.episodes;
export const episodesLoading = (state: any) => state.content.episodesLoading;

export default ShowsSlice.reducer;
