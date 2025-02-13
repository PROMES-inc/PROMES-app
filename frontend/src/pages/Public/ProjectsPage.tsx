import React from "react";
import Layout from "../../components/Shared/Layout";
import ProjectList from "../../components/Public/ProjectList";

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-blue-50 min-h-screen flex flex-col flex-grow justify-center items-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          All Projects
        </h1>
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
          <ProjectList status="all" />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
