import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrendingRepos = createAsyncThunk(
    'repos/fetchTrendingRepos',
    async (_, {rejectWithValue}) => {
        try{
            const response = await fetch(
                'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc'
            );
            const data = await response.json();
            return data.items;
        }catch(error) {
            return rejectWithValue(error.message);
        }
    }
);