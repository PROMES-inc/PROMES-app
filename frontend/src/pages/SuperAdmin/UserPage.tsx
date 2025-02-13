import React from "react";
import Layout from "../../components/Shared/Layout";

const UserPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Users</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">All Users</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 border rounded">
              <h3 className="text-lg font-semibold text-gray-800">User #1</h3>
              <p className="text-gray-600">Email: admin@example.com</p>
              <p className="text-gray-600">Role: Admin</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-lg font-semibold text-gray-800">User #2</h3>
              <p className="text-gray-600">Email: superadmin@example.com</p>
              <p className="text-gray-600">Role: Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserPage;