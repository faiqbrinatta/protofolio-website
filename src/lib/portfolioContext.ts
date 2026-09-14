import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  OTHER_PROJECTS,
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  TECH_STACK,
  FEATURED_PROJECT,
} from "../data/portfolioData";

export type ChatLanguage = "id" | "en";
export type ChatTopic =
  | "profile"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "certifications"
  | "contact"
  | "unknown";

export interface ChatHistoryItem {
  role: "user" | "assistant";
  content: string;
}

const allProjects = [FEATURED_PROJECT, ...OTHER_PROJECTS];

const topicKeywords: Record<Exclude<ChatTopic, "unknown">, string[]> = {
  profile: ["profile", "about", "tentang", "siapa", "fa iq", "fa'iq", "bio"],
  projects: ["project", "projects", "proyek", "karya", "website", "aplikasi", "portfolio"],
  skills: ["skill", "skills", "teknologi", "technology", "tech", "stack", "kemampuan", "tools"],
  experience: ["experience", "pengalaman", "kerja", "bekerja", "internship", "magang", "karier"],
  education: ["education", "pendidikan", "kuliah", "universitas", "kampus", "ipk", "gpa", "degree"],
  certifications: ["certification", "certifications", "sertifikasi", "sertifikat", "award", "penghargaan"],
  contact: ["contact", "kontak", "email", "hubungi", "linkedin", "github", "lokasi", "location"],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9@.+#-]+/g, " ")
    .trim();
}

function containsAny(value: string, words: string[]) {
  return words.some((word) => value.includes(normalize(word)));
}

export function detectChatLanguage(message: string): ChatLanguage {
  const text = normalize(message);
  const indonesian = ["apa", "siapa", "bagaimana", "ceritakan", "tentang", "yang", "dan", "dengan", "untuk", "saya", "dia", "bisa"];
  const english = ["what", "who", "how", "tell", "about", "which", "and", "with", "for", "his", "can", "does"];
  const idScore = indonesian.filter((word) => text.split(" ").includes(word)).length;
  const enScore = english.filter((word) => text.split(" ").includes(word)).length;
  return idScore >= enScore ? "id" : "en";
}

export function detectChatTopic(message: string, previousTopic?: ChatTopic): ChatTopic {
  const text = normalize(message);
  let bestTopic: ChatTopic = "unknown";
  let bestScore = 0;

  for (const [topic, keywords] of Object.entries(topicKeywords) as [Exclude<ChatTopic, "unknown">, string[]][]) {
    const score = keywords.reduce((total, keyword) => total + (text.includes(normalize(keyword)) ? 1 : 0), 0);
    if (score > bestScore) {
      bestTopic = topic;
      bestScore = score;
    }
  }

  const isFollowUp = text.split(" ").length <= 6 && containsAny(text, ["itu", "tersebut", "dia", "it", "that", "them", "more", "detail"]);
  return bestTopic === "unknown" && isFollowUp ? previousTopic ?? "unknown" : bestTopic;
}

function findProject(message: string) {
  const text = normalize(message);
  return allProjects.find((project) => {
    const title = normalize(project.title);
    const titleWords = title.split(" ").filter((word) => word.length > 2);
    return text.includes(title) || titleWords.filter((word) => text.includes(word)).length >= Math.min(2, titleWords.length);
  });
}

function list(items: string[], conjunction: string) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")}, ${conjunction} ${items.at(-1)}`;
}

function projectAnswer(project: (typeof allProjects)[number], language: ChatLanguage) {
  if (language === "id") {
    return `**${project.title}** adalah ${project.subtitle.toLowerCase()}. ${project.detailedDescription ?? project.description} Teknologi yang digunakan: ${list(project.tags, "dan")}.`;
  }
  return `**${project.title}** is ${project.subtitle.toLowerCase()}. ${project.description} Technologies used: ${list(project.tags, "and")}.`;
}

export function getLocalPortfolioResponse(
  message: string,
  language: ChatLanguage,
  history: ChatHistoryItem[] = [],
) {
  const previousUserMessage = [...history].reverse().find((item) => item.role === "user")?.content;
  const previousTopic = previousUserMessage ? detectChatTopic(previousUserMessage) : undefined;
  const topic = detectChatTopic(message, previousTopic);
  const project = findProject(message);
  const text = normalize(message);

  if (containsAny(text, ["halo", "hai", "hello", "hi", "hey"])) {
    return language === "id"
      ? `Halo! Saya asisten portfolio ${PERSONAL_INFO.shortName}. Tanyakan apa saja tentang project, skill, pengalaman, pendidikan, atau kontaknya.`
      : `Hi! I am ${PERSONAL_INFO.shortName}'s portfolio assistant. Ask me about projects, skills, experience, education, or contact details.`;
  }

  if (topic === "projects") {
    if (project) return projectAnswer(project, language);
    const names = allProjects.map((item) => item.title);
    return language === "id"
      ? `${PERSONAL_INFO.shortName} memiliki ${allProjects.length} project utama, yaitu ${list(names, "dan")}. Sebutkan nama project jika ingin detail teknologi atau kontribusinya.`
      : `${PERSONAL_INFO.shortName} has ${allProjects.length} main projects: ${list(names, "and")}. Mention a project name if you want its technologies or contribution details.`;
  }

  if (topic === "skills") {
    const skills = SKILL_CATEGORIES.map((category) => `${category.title}: ${list(category.skills, language === "id" ? "dan" : "and")}`);
    return language === "id"
      ? `Skill Fa'iq meliputi ${skills.join(". ")}. Tech stack utama lainnya adalah ${list(TECH_STACK.map((item) => item.name), "dan")}.`
      : `Fa'iq's skills include ${skills.join(". ")}. Other main technologies are ${list(TECH_STACK.map((item) => item.name), "and")}.`;
  }

  if (topic === "experience") {
    const experience = EXPERIENCE.map((item) => `${item.role} di ${item.company} (${item.period})`);
    return language === "id"
      ? `Pengalaman Fa'iq meliputi ${list(experience, "dan")}. Saat ini ia bekerja sebagai ${EXPERIENCE.find((item) => item.isCurrent)?.role ?? "developer"} di ${EXPERIENCE.find((item) => item.isCurrent)?.company ?? "SolveIt Indonesia"}.`
      : `Fa'iq's experience includes ${list(experience, "and")}. He currently works as ${EXPERIENCE.find((item) => item.isCurrent)?.role ?? "a developer"} at ${EXPERIENCE.find((item) => item.isCurrent)?.company ?? "SolveIt Indonesia"}.`;
  }

  if (topic === "education") {
    const education = EDUCATION[0];
    return language === "id"
      ? `Fa'iq adalah lulusan ${education.degree} dari ${education.institution}. Ia menyelesaikan studi dalam 3,5 tahun dengan IPK ${education.gpa}.`
      : `Fa'iq holds a ${education.degree} degree from ${education.institution}. He completed it in 3.5 years with a GPA of ${education.gpa}.`;
  }

  if (topic === "certifications") {
    const names = CERTIFICATIONS.map((item) => `${item.title} (${item.issuer})`);
    return language === "id"
      ? `Sertifikasi dan penghargaan Fa'iq meliputi ${list(names, "dan")}.`
      : `Fa'iq's certifications and achievements include ${list(names, "and")}.`;
  }

  if (topic === "contact") {
    return language === "id"
      ? `Fa'iq berdomisili di ${PERSONAL_INFO.location}. Email: ${PERSONAL_INFO.email}. GitHub: ${PERSONAL_INFO.socials.github}. LinkedIn: ${PERSONAL_INFO.socials.linkedin}.`
      : `Fa'iq is based in ${PERSONAL_INFO.location}. Email: ${PERSONAL_INFO.email}. GitHub: ${PERSONAL_INFO.socials.github}. LinkedIn: ${PERSONAL_INFO.socials.linkedin}.`;
  }

  if (topic === "profile") {
    return language === "id"
      ? `${PERSONAL_INFO.shortName} adalah ${PERSONAL_INFO.role} dari ${PERSONAL_INFO.location}. ${PERSONAL_INFO.description}`
      : `${PERSONAL_INFO.shortName} is a ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.location}. ${PERSONAL_INFO.description}`;
  }

  return language === "id"
    ? "Saya belum menemukan jawaban yang tepat dari data portfolio. Coba tanyakan tentang project, teknologi, pengalaman, pendidikan, sertifikasi, atau kontak Fa'iq."
    : "I could not find a precise answer in the portfolio data. Try asking about projects, technologies, experience, education, certifications, or Fa'iq's contact details.";
}
