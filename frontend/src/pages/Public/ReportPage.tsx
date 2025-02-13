import React from "react";
import Layout from "../../components/Shared/Layout";
import ReportForm from "../../components/Public/ReportForm";

const ReportPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-blue-50 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Submit a Report
        </h1>
        <ReportForm />
      </div>
    </Layout>
  );
};

export default ReportPage;