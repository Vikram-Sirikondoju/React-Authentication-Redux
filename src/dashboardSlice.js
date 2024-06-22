import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  widgets: [], // Example initial state, you can define your dashboard state structure here
  loading: true,
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
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { fetchWidgetsStart, fetchWidgetsSuccess, fetchWidgetsFailure, setLoading } = dashboardSlice.actions;

export default dashboardSlice.reducer;
