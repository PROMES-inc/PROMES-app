import React from "react";

const ReportManagement: React.FC = () => {
  return (
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
  );
};

export default ReportManagement;