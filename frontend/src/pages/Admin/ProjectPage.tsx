import React from "react";
import Layout from "../../components/Shared/Layout";

const ProjectPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Projects</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Add New Project</h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Project Name"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Project Description"
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;