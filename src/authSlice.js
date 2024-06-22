import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

// Load initial state from localStorage if available
const persistedStateJSON = localStorage.getItem('authState');
if (persistedStateJSON) {
  const persistedState = JSON.parse(persistedStateJSON);
  initialState.isAuthenticated = persistedState.isAuthenticated;
  initialState.user = persistedState.user;
}

const authSlice = createSlice({
  name: 'auther',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
      localStorage.removeItem('authState');
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem('authState');
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
