import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showProfile: false,
  showLogine: false,
  showInscription :false
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

    },
    setShowInscription (state ,action){
      state.showInscription=action.payload
    }
  },
});

export const { setShowProfile ,setShowLogine ,setShowInscription } = navbarSlice.actions;

export default navbarSlice.reducer;
