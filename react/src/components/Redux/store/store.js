import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../navbarSlice';
import userReducer from '../usersSlice';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    users: userReducer, 
  },
});

export default store;
