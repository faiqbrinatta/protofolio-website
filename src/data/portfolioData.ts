import type {
  Project,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  Certification,
  TechItem,
} from "../types/portfolio";

export const PERSONAL_INFO = {
  fullName: "Fa'iq Zhafran Naufal Brinatta",
  shortName: "Fa'iq Brinatta",
  brandName: "KZStudios",
  role: "Fullstack  Developer",
  tagline: "Fullstack  Developer",
  headline:
    "Focused on engineering fast, functional, and user-centered web applications.",
  description:
    "Detail-oriented Full-Stack Developer with a degree in Informatics Engineering. Combines technical expertise in end-to-end web development with experience in project management and digital product creation to deliver scalable, user-friendly, and responsive web applications.",
  aboutNarrative: [
    "Bachelor’s degree in Informatics Engineering from Universitas Negeri Malang with experience in web application development. Skilled in frontend and backend development using JavaScript, PHP, React.js, and Laravel, with experience in database management using MySQL and SQL.",
    "Experienced in building and integrating REST APIs, testing and debugging applications, using Git and GitHub for development collaboration, and deploying web applications.",
    "Strong analytical and problem-solving skills with good communication abilities. Interested in developing applications and information systems that effectively support business needs.",
  ],
  email: "faiqbrinatta14@gmail.com",
  location: "Blitar, Indonesia",
  degree: "B.Eng Informatics (3.5 yrs)",
  university: "Universitas Negeri Malang",
  status: "Open to Work",
  statusRole: "Fullstack Developement",
  metrics: [
    {
      value: "3.5",
      label: "Years to Graduate",
      highlight: "text-border-accent",
    },
    { value: "5+", label: "Web Repositories", highlight: "text-primary" },
    { value: "2", label: "Industry Internships", highlight: "text-secondary" },
  ],
  socials: {
    github: "https://github.com/faiqbrinatta",
    linkedin: "https://linkedin.com/in/faiqznbrinatta",
    instagram: "https://instagram.com/faiqznbrinatta",
    email: "mailto:faiqbrinatta14@gmail.com",
  },
};

export const TECH_STACK: TechItem[] = [
  { name: "React", icon: "Atom", category: "Frontend" },
  { name: "Next.js", icon: "PanelTop", category: "Frontend" },
  { name: "TypeScript", icon: "FileCode2", category: "Language" },
  { name: "Tailwind CSS", icon: "Palette", category: "Styling" },
  { name: "Laravel", icon: "Server", category: "Backend" },
  { name: "MySQL", icon: "Database", category: "Database" },
  { name: "Git", icon: "GitBranch", category: "VCS" },
  { name: "GitHub", icon: "Github", category: "Platform" },
  { name: "Figma", icon: "Figma", category: "Design" },
  { name: "REST APIs", icon: "Webhook", category: "API" },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    period: "2022 – 2026 • Graduated in 3.5 Years",
    institution: "Universitas Negeri Malang",
    degree: "Bachelor of Informatics Engineering",
    gpa: 3.8,
    description:
      "Focused on software development paradigms, human-computer interaction, data structures, and progressive web application frameworks.",
  },
  {
    id: "edu-2",
    period: "2019 • 2022",
    institution: "Senior High School 1 Srengat",
    degree: "Science",
    gpa: 87.33,
    description:
      "Hands-on training in predictive analytics, computational modeling, and data pipelines integrated into frontend dashboard interfaces.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "Oct 2025 – Present",
    company: "SolveIt Indonesia",
    role: "Project Manager & Frontend Developer",
    isCurrent: true,
    bullets: [
      "Coordinated full-lifecycle client web platform initiatives and delivery sprints.",
      "Developed modular, fully responsive frontend systems with high performance metrics.",
      "Synchronized API schemas and contract workflows with backend engineers.",
    ],
  },
  {
    id: "exp-2",
    period: "Jun 2025 – Aug 2025",
    company: "LPPM Universitas Negeri Malang",
    role: "Web Developer Intern",
    bullets: [
      "Engineered core features for RADAR UM research evaluation portal.",
      "Organized university academic and scientific publishing databases using Laravel and MySQL.",
    ],
  },
  {
    id: "exp-3",
    period: "Jan 2025 – Jun 2025",
    company: "PT Inovasi Lentera Cipta Kreasi",
    role: "Junior Data Scientist Intern",
    bullets: [
      "Performed structured ETL operations, telemetry data cleaning, and statistical validation.",
      "Drafted business intelligence reporting visualizations for operational leadership.",
    ],
  },
];

export const FEATURED_PROJECT: Project = {
  id: "proj-kayutangan",
  title: "UMKM KAYUTANGAN",
  subtitle: "Website informasi dan pengelolaan UMKM cagar budaya",
  category: "Web Application",
  year: "2026",
  isFeatured: true,
  description:
    "An integrated information and MSME management platform for the Kayutangan Heritage area in Malang. The system features an interactive public directory, a secure authenticated merchant dashboard, and a comprehensive administrative control system",
  detailedDescription:
    "Platform komprehensif yang memetakan puluhan UMKM lokal di kawasan warisan sejarah Kayutangan Malang. Dilengkapi pencarian interaktif real-time, filter kategori kuliner & kriya, autentikasi merchant multi-tier, serta panel analitik kunjungan turis.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Next.jS", "PostgreSQL"],
  liveDemoUrl: " https://umkm-kayutangan.vercel.app/",
  githubUrl: "",
  iconName: "Store",
  image: "",
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: "proj-hismaya",
    title: "Hismaya Cahaya Rahayu",
    subtitle: "PROJECT 02 • CERTIFICATION",
    category: "Web Platform",
    year: "2026",
    description:
      "Hismaya Cahaya Rahayu is a web-based project developed to provide a professional digital platform for presenting company information, services, and other relevant content. The website is designed with a clear information structure, responsive layout, and user-friendly interface to ensure an accessible and seamless experience across different devices.",
    detailedDescription:
      "Hismaya Cahaya Rahayu is a web-based project developed to provide a professional digital platform for presenting company information, services, and other relevant content. The website is designed with a clear information structure, responsive layout, and user-friendly interface to ensure an accessible and seamless experience across different devices.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    liveDemoUrl: "https://hismaya.com/",
    githubUrl: "",
    iconName: "Award",
    color: "text-border-accent",
    image: "../projects/hismaya-cahaya.png",
  },
  {
    id: "proj-lsp",
    title: "LSP Multi Bintang Komunikasi",
    subtitle: "PROJECT 03 • CERTIFICATION",
    category: "Certification System",
    year: "2025",
    description:
      "LSP Multi Bintang Komunikasi is a website developed as an information and certification service platform for competency certification. The website provides prospective participants with information about available certification schemes, requirements, services, and certification processes. The project focuses on presenting information in a clear and structured way, with a responsive and user-friendly interface that allows users to easily access certification-related information across different devices.",
    detailedDescription:
      "LSP Multi Bintang Komunikasi is a website developed as an information and certification service platform for competency certification. The website provides prospective participants with information about available certification schemes, requirements, services, and certification processes. The project focuses on presenting information in a clear and structured way, with a responsive and user-friendly interface that allows users to easily access certification-related information across different devices.",
    tags: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    liveDemoUrl: "",
    githubUrl: "https://github.com/solveit-id/lsp-multi-bintang-komunikasi",
    iconName: "CheckCircle2",
    color: "text-primary",
    image: "../projects/lsp-mbkom.png",
  },
  {
    id: "proj-radar",
    title: "RADAR UM",
    subtitle: "PROJECT 04 • ACADEMIC SYSTEM",
    category: "Academic System",
    year: "2024",
    description:
      "RADAR UM is a web-based platform developed during my internship at the Institute for Research and Community Service (LPPM), Universitas Negeri Malang. I was involved in the development process from designing the user interface and implementing features to managing the database. I also handled testing and troubleshooting to ensure the website worked properly and provided a smooth experience for its users. The project was developed using Laravel, MySQL, Bootstrap, and other supporting technologies.",
    detailedDescription:
      "RADAR UM is a web-based platform developed during my internship at the Institute for Research and Community Service (LPPM), Universitas Negeri Malang. I was involved in the development process from designing the user interface and implementing features to managing the database. I also handled testing and troubleshooting to ensure the website worked properly and provided a smooth experience for its users. The project was developed using Laravel, MySQL, Bootstrap, and other supporting technologies.",
    tags: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
    liveDemoUrl: "",
    githubUrl: "https://github.com/faiqbrinatta/radarum-app",
    iconName: "BarChart3",
    color: "text-secondary",
    image: "../projects/radarum.png",
  },
  {
    id: "proj-govind",
    title: "Govind Abra Enterprise",
    subtitle: "PROJECT 05 • COMPANY PROFILE",
    category: "Corporate Profile",
    year: "2025",
    description:
      "Govindabra is a web-based certification platform designed to provide information and services related to professional competency certification. The website helps users explore available certification programs, understand the requirements and certification process, and access relevant information in a clear and organized manner. The platform is designed with a responsive and user-friendly interface to provide a seamless experience across different devices.",
    detailedDescription:
      "Govindabra is a web-based certification platform designed to provide information and services related to professional competency certification. The website helps users explore available certification programs, understand the requirements and certification process, and access relevant information in a clear and organized manner. The platform is designed with a responsive and user-friendly interface to provide a seamless experience across different devices.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveDemoUrl: "https://govindabraenterprise.com/",
    githubUrl: "",
    iconName: "Building2",
    color: "text-border-accent",
    image: "../projects/govindabra.png",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    subtitle: "Client Architecture",
    icon: "Monitor",
    accentColor: "text-border-accent",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Responsive Design",
      "HTML5 / Semantic UI",
    ],
  },
  {
    title: "Backend",
    subtitle: "Services & Data Layers",
    icon: "Server",
    accentColor: "text-primary",
    skills: [
      "Laravel",
      "RESTful APIs",
      "MySQL",
      "Prisma ORM",
      "PostgreSQL",
      "Node.js (Basic)",
    ],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Productivity & VCS",
    icon: "Wrench",
    accentColor: "text-secondary",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Postman"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    credentialNumber: "Credential 01",
    issuer: "VINIX7",
    year: "2024",
    title: "MSIB Data Science",
    description:
      "Kampus Merdeka certified data intelligence & analytics program.",
    credentialUrl: "#",
    icon: "BrainCircuit",
    image: "../certificates/MSIB.webp",
  },
  {
    id: "cert-2",
    credentialNumber: "Credential 02",
    issuer: "Himpunan Mahasiswa Departemen Teknik Elektro dan Informatika",
    year: "2024",
    title: "Ketua Umum",
    description:
      "National professional certification endorsed by Kemdikbudristek.",
    credentialUrl: "#",
    icon: "BadgeCheck",
    image: "../certificates/Kahim.webp",
  },
  {
    id: "cert-3",
    credentialNumber: "Credential 03",
    issuer: "LPPM UM",
    year: "2025",
    title: "Web Developer",
    description:
      "Institutional certification for production web portal delivery.",
    credentialUrl: "#",
    icon: "Code2",
    image: "../certificates/sertifikat-lppm.webp",
  },
  {
    id: "cert-4",
    credentialNumber: "Credential 04",
    issuer: "Cisco Academy",
    year: "2023",
    title: "IT Essentials & Net",
    description: "Network architectures, hardware systems, and diagnostics.",
    credentialUrl: "#",
    icon: "Network",
    image: "../certificates/Cisco.webp",
  },
  {
    id: "cert-5",
    credentialNumber: "Credential 05",
    issuer: "Capstone Expo",
    year: "2024",
    title: "Bronze Awarded for Product Kripiku",
    description:
      "Bronze for the invention of KRIPIKU at The International Capstone Expo 2024 with theme Technology for Society",
    credentialUrl: "#",
    icon: "Network",
    image: "../certificates/capstone-expo.webp",
  },
  {
    id: "cert-6",
    credentialNumber: "Credential 06",
    issuer: "ICEEIE 2023",
    year: "2024",
    title: "Committe - ICEEIE 2023",
    description: "Committe at ICEEIE 2023",
    credentialUrl: "#",
    icon: "Network",
    image: "../certificates/ICEEEIE.webp",
  },
  {
    id: "cert-7",
    credentialNumber: "Credential 07",
    issuer: "Pegat Art Movie",
    year: "2025",
    title: "Guest Speaker - SMAN 1 Srengat",
    description:
      "Served as a guest speaker in an extracurricular activity at SMAN 1 Srengat.",
    credentialUrl: "#",
    icon: "Network",
    image: "../certificates/sertifikat-pemateri.webp",
  },
];
