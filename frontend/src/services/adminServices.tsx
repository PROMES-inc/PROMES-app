import api from "./api";
import { Project } from "../types/Project";
import { Report } from "../types/Report";

export const getAdminProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>("/admin/projects");
  return response.data;
};

export const getAdminReports = async (): Promise<Report[]> => {
  const response = await api.get<Report[]>("/admin/reports");
  return response.data;
};

export const updateProjectStatus = async (projectId: string, status: string): Promise<Project> => {
  const response = await api.patch<Project>(`/admin/projects/${projectId}`, { status });
  return response.data;
};

export const updateReportStatus = async (reportId: string, status: string): Promise<Report> => {
  const response = await api.patch<Report>(`/admin/reports/${reportId}`, { status });
  return response.data;
};