import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
        <p className="mt-2 text-gray-600">Manage ongoing projects.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Reports</h2>
        <p className="mt-2 text-gray-600">View and resolve user reports.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Revenue</h2>
        <p className="mt-2 text-gray-600">Track constituency revenue.</p>
      </div>
    </div>
  );
};

export default Dashboard;