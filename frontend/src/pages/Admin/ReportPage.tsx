import React from "react";
import Layout from "../../components/Shared/Layout";

const ReportPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Reports</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">All Reports</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 border rounded">
              <h3 className="text-lg font-semibold text-gray-800">Report #1</h3>
              <p className="text-gray-600">Category: Infrastructure</p>
              <p className="text-gray-600">Status: Received</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="text-lg font-semibold text-gray-800">Report #2</h3>
              <p className="text-gray-600">Category: Health</p>
              <p className="text-gray-600">Status: In Progress</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportPage;