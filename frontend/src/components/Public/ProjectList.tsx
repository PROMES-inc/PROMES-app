import React, { useEffect, useState } from "react";
import { getPublicProjects } from "../../services/publicServices";
import { Project } from "../../types/Project";

interface ProjectListProps {
  status: "ongoing" | "completed" | "upcoming" | "all";
}

const ProjectList: React.FC<ProjectListProps> = ({ status }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getPublicProjects(status);
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setError("Invalid data format: Expected an array.");
        }
      } catch (err) {
        setError("Failed to fetch projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [status]);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div className="space-y-4 min-h-[400px] w-full">
      {projects.map((project) => (
        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <p className="text-sm text-gray-500">
            Status: <span className="font-medium">{project.status}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;