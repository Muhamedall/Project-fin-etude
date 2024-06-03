import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favories: [],
    loading: false,
    error: null,
};

const wishlestSlice = createSlice({
    name: 'wishlests',
    initialState,
    reducers: {
        addWishlest: (state, action) => {
            state.favories.push(action.payload);
        },
        removeWishlest: (state, action) => {
            state.favories = state.favories.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addWishlest, removeWishlest } = wishlestSlice.actions;
export default wishlestSlice.reducer;
