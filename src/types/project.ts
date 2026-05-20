// Единый тип проекта под GitHub API
// Используется в Projects.tsx и ProjectModal.tsx

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
}