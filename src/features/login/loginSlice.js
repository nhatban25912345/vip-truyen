import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

  export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        // Simulate API call with fake login function
        const response = await fakeApiLogin(credentials);
        return response.user; // Return the user data
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  // Simulated API function for login
const fakeApiLogin = async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'user' && credentials.password === 'password') {
          resolve({ user: { id: 1, name: 'John Doe' } });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  // Create the login slice
const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  // Export actions and the reducer
  export const { logout } = loginSlice.actions;
  export default loginSlice.reducer;