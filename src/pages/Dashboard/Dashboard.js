import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className='.container'>
      <h4>Hello, {user?.name}</h4>
    </div>
  );
};

export default Dashboard;
