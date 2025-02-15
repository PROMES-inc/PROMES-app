import api from "./api";
import { Project } from "../types/Project";
import { Report } from "../types/Report";

export const getPublicProjects = async (status: string): Promise<Project[]> => {
  const response = await api.get<Project[]>(`/projects?status=${status}`);
  return response.data;
};

export const submitReport = async (reportData: Omit<Report, "id">): Promise<Report> => {
  const response = await api.post<Report>("/public/reports", reportData);
  return response.data;
};