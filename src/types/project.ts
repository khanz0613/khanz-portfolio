export interface Project {
  id: string;
  title: string;
  titleKo: string;
  overview: string;
  period: string;
  role: string;
  status: 'production' | 'completed' | 'in-progress';
  techStack: {
    backend?: string[];
    frontend?: string[];
    database?: string[];
    devops?: string[];
    ml?: string[];
  };
  metrics?: {
    [key: string]: string;
  };
  links: {
    github?: string;
    live?: string;
    documentation?: string;
  };
}