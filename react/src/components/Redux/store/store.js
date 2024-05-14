
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../navbarSlice';
import userReducer from '../usersSlice';


export default configureStore({
  reducer: {
    navbar: navbarReducer,
    users: userReducer,
   
  },
});
