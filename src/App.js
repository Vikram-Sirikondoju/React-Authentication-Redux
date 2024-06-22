import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';
import { loginSuccess } from './authSlice';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
    const sdf = useSelector((state)=>console.log("fsdfgdfgd", state))
  // Check authentication status on component mount
  useEffect(() => {
    const persistedStateJSON = localStorage.getItem('authState');
    if (persistedStateJSON) {
      const persistedState = JSON.parse(persistedStateJSON);
      if (persistedState.isAuthenticated) {
        dispatch(loginSuccess(persistedState.user));
      }
    }
  }, [dispatch]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <Dashboard />
          <LogoutButton />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;
