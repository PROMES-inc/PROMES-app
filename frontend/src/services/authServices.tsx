import api from "./api";
import { User } from "../types/User";

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", credentials);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};