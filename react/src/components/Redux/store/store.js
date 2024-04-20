
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../navbarSlice';
import usersReducer from '../usersSlice'; 

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    users: usersReducer, 
  },
});
