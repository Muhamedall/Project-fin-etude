import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('favories');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('favories', serializedState);
    } catch (err) {
        console.error('Error saving to local storage:', err);
    }
};
const loadNumberFavoriesFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('numberFavories');
        if (serializedState === null) {
            return 0; 
        }
        return parseInt(serializedState, 10); 
    } catch (err) {
        return 0; 
    }
};

const saveNumberFavoriesToLocalStorage = (numberFavories) => {
    try {
        localStorage.setItem('numberFavories', numberFavories.toString()); 
    } catch (err) {
        console.error('Error saving numberFavories to local storage:', err);
    }
};


const initialState = {
    favories: loadFromLocalStorage(),
    numberFavories: loadNumberFavoriesFromLocalStorage(), 
    loading: false,
    error: null,
};

const wishlestSlice = createSlice({
    name: 'wishlests',
    initialState,
    reducers: {
        addWishlest: (state, action) => {
            if (!Array.isArray(state.favories)) {
                state.favories = [];
            }
            const existingItem = state.favories.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.favories.push(action.payload);
                saveToLocalStorage(state.favories);
                state.numberFavories = state.favories.length;
                saveNumberFavoriesToLocalStorage(state.numberFavories); // Save numberFavories to localStorage
                console.log("the number favories:" + state.numberFavories);
            }
        },
        removeWishlest: (state, action) => {
            state.favories = state.favories.filter(item => item.id !== action.payload.id);
            saveToLocalStorage(state.favories);
            state.numberFavories = state.favories.length;
            saveNumberFavoriesToLocalStorage(state.numberFavories); // Save numberFavories to localStorage
            console.log("the number favories:" + state.numberFavories);
        },
    },
});

export const { addWishlest, removeWishlest } = wishlestSlice.actions;
export default wishlestSlice.reducer;
