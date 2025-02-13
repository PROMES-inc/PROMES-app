export interface User {
    id: string;
    email: string;
    role: "admin" | "super_admin";
  }