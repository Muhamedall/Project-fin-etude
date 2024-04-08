import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showProfile: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setShowProfile(state, action) {
      state.showProfile = action.payload;
    },
  },
});

export const { setShowProfile } = navbarSlice.actions;

export default navbarSlice.reducer;
