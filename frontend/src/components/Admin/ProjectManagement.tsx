import React from "react";

const ProjectManagement: React.FC = () => {
  return (
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
  );
};

export default ProjectManagement;