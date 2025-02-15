export interface Report {
    id: string;
    category: string;
    description: string;
    name: string;
    contact: string;
    location?: string;
    status: "received" | "in_progress" | "resolved" | "not_resolved" | "referred";
  }