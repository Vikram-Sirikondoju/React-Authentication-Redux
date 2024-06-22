import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  widgets: [], // Example initial state, you can define your dashboard state structure here
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchWidgetsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWidgetsSuccess(state, action) {
      state.loading = false;
      state.widgets = action.payload;
      state.error = null;
    },
    fetchWidgetsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWidgetsStart, fetchWidgetsSuccess, fetchWidgetsFailure } = dashboardSlice.actions;

export default dashboardSlice.reducer;
