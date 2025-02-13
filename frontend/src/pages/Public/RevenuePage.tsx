import React from "react";
import Layout from "../../components/Shared/Layout";

const RevenuePage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-blue-50 min-h-screen flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
          Revenue and Expenses
        </h1>
        <div className="w-full max-w-4xl mx-auto flex-grow">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Weekly Revenue
            </h2>
            <p className="text-gray-600">Total Revenue: $50,000</p>
            <p className="text-gray-600">Total Expenses: $30,000</p>
            <p className="text-gray-600">Net Income: $20,000</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RevenuePage;
