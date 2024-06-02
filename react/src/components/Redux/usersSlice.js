import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/api';

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
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
  "users/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", { email, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
  
};

 const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = initialState.user;
      state.error = null;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setUser ,clearUser } = userSlice.actions;
export default userSlice.reducer;
