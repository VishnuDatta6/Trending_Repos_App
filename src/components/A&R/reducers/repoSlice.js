import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingRepos } from "../actions";


const repoSlice = createSlice({
    name: 'repos',
    initialState: {
        loading:false,
        repos:[],
        error:null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingRepos.pending,(state)=>{
                state.loading = true;
                state.repos = [];
                state.error = null;
            })
            .addCase(fetchTrendingRepos.fulfilled, (state, action)=>{
                state.loading = false;
                state.repos = action.payload;
                state.error = null;
            })
            .addCase(fetchTrendingRepos.rejected, (state,action)=> {
                state.loading = false;
                state.repos = [];
                state.error = action.payload;
            });
    },
});

export default repoSlice.reducer;