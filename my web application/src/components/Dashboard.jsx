import React from 'react';

const Dashboard = ({ userData }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <p className="text-gray-700">Track your progress:</p>
      <ul className="list-disc pl-5">
        <li>Mentees: {userData.mentees}</li>
        <li>Investments: {userData.investments}</li>
        <li>Startup Growth: {userData.startupGrowth}%</li>
      </ul>
    </div>
  );
};

export default Dashboard;
