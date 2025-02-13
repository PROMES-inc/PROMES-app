import React from "react";
import Layout from "../../components/Shared/Layout";

const SuperDashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Super Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Constituencies</h2>
            <p className="mt-2 text-gray-600">Manage all constituencies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Users</h2>
            <p className="mt-2 text-gray-600">Manage system users.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
            <p className="mt-2 text-gray-600">Monitor all projects.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuperDashboardPage;