import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWidgetsStart, setLoading } from '../dashboardSlice';

const Dashboard = () => {
  const widgets = useSelector((state) => state.dashboard.widgets);
  const loading = useSelector((state) => state.dashboard.loading);
  const error = useSelector((state) => state.dashboard.error);
  const dispatch = useDispatch();
    const vdfg = useSelector((state)=>console.log("fsdfgdgdg", state))
  useEffect(() => {
    setTimeout(()=>{dispatch(setLoading(false));},2000)
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <h2>Dashboard</h2>}
      {error && <p>Error: {error}</p>}
      <ul>
        {widgets.map((widget) => (
          <li key={widget.id}>{widget.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
