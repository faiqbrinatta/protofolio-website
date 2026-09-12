export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  isFeatured?: boolean;
  liveDemoUrl?: string;
  githubUrl?: string;
  iconName: string;
  color?: string;
  image: string;
  previewData?: {
    browserUrl: string;
    catalogTitle: string;
    badgeText: string;
    stores: Array<{
      name: string;
      category: string;
      rating: string;
      icon: "store" | "shopping-bag";
    }>;
    dbSyncText: string;
  };
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  isCurrent?: boolean;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  gpa: GLfloat;
  description: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  skills: string[];
}

export interface Certification {
  id: string;
  credentialNumber: string;
  issuer: string;
  year: string;
  title: string;
  description: string;
  credentialUrl: string;
  icon: string;
  image: string;
}

export interface TechItem {
  name: string;
  icon: string;
  category?: string;
}
