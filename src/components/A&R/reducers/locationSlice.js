import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState: '1',
    reducers : {
        setLocation: (state, action) => {
            return action.payload;
        },
    },
});

export const {setLocation} = locationSlice.actions;

export default locationSlice.reducer;