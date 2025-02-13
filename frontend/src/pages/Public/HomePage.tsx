import React from "react";
import Layout from "../../components/Shared/Layout";
import ProjectList from "../../components/Public/ProjectList";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Welcome to the Constituency Project Monitoring System
        </h1>
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Ongoing Projects
          </h2>
          <ProjectList status="ongoing" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
