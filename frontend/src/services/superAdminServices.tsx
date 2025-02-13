import api from "./api";
import { User } from "../types/User";
import { Project } from "../types/Project";

export const getSuperAdminConstituencies = async (): Promise<any[]> => {
  const response = await api.get<any[]>("/super-admin/constituencies");
  return response.data;
};

export const getSuperAdminUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/super-admin/users");
  return response.data;
};

export const createConstituency = async (name: string): Promise<any> => {
  const response = await api.post<any>("/super-admin/constituencies", { name });
  return response.data;
};

export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
  const response = await api.post<User>("/super-admin/users", userData);
  return response.data;
};

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await api.get<Project[]>("/super-admin/projects");
  return response.data;
};