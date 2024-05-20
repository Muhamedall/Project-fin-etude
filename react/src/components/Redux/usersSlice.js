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

export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/logout');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/login', { email, password });
      return response.data.user;
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
  loading: false,
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
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = initialState.user;
      state.error = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
