import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showProfile: false,
  showLogine: false
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setShowProfile(state, action) {
      state.showProfile = action.payload;
    },
  
    setShowLogine (state ,action){
      state.showLogine = action.payload;

    }
  },
});

export const { setShowProfile ,setShowLogine } = navbarSlice.actions;

export default navbarSlice.reducer;
