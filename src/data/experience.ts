export interface ExperienceItem {
  period: string;
  title: string;
  place: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "Jun 2026 — Present",
    title: "Frontend Developer",
    place: "First Bank Ghana, Accra",
    description:
      "Developing and maintaining banking web applications using React and TypeScript; working on remittance systems and internal banking platforms with a focus on security and performance.",
  },
  {
    period: "Oct 2025 — May 2026",
    title: "Business Analyst & Tech Support",
    place: "Nyaho Medical Centre, Accra",
    description:
      "Provided 24-hour technical support and business analysis in a fast-paced medical facility, ensuring operational continuity of critical hospital systems.",
  },
  {
    period: "Nov 2024 — May 2025",
    title: "Software Developer & AI/ML Engineer (National Service)",
    place: "Axxend Corporation, East Legon, Accra",
    description:
      "Built and deployed cloud-native solutions on Microsoft Azure; developed AI/ML models achieving 80%+ accuracy and improved software efficiency by 40%. Received Employee of the Year award.",
  },
  {
    period: "Jan 2024 — Mar 2024",
    title: "Mobile App Developer & UI/UX Designer (Intern)",
    place: "Soko Aerial Robotics, Accra",
    description:
      "Developed cross-platform Flutter mobile apps for drone education; designed UI/UX prototypes in Figma.",
  },
  {
    period: "Jul 2022 — Sep 2022",
    title: "Web Developer (Intern)",
    place: "Coldsis Ghana Limited, East Legon, Accra",
    description:
      "Built responsive web applications using HTML, CSS and JavaScript; used Git for version control.",
  },
];

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  details: string;
}

export const education: EducationItem[] = [
  {
    period: "2021 — 2024",
    degree: "BSc. Industrial Software Engineering — GPA 3.95/4.0",
    school: "Pentecost University, Accra",
    details:
      "Best Software Developer Award (2024) · Overall Best Graduating Student · Overall Best Graduating Female Student",
  },
];
