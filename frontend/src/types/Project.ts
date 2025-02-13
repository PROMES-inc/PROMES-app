export interface Project {
    id: string;
    name: string;
    description: string;
    status: "ongoing" | "completed" | "upcoming";
    sector: string;
  }