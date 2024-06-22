import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dashboardSlice from './dashboardSlice';


import App from './App';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardSlice,
    // Add other reducers here if needed
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
