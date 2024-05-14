import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/api';

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ name, email, password, dateOfBirth, city }, thunkAPI) => {
    try {
      const response = await axios.post('/register', {
        name,
        email,
        password,
        dateOfBirth,
        city,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const initialState = {
  user: {
    email: '',
    name: '',
  },
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
