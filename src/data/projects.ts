import bestratorImg from "../assets/bestRator.png";
import hermaniaImg from "../assets/hermenia.png";
import sambisLightImg from "../assets/sambislight.png";
import successEnterpriseImg from "../assets/success-electronic.png";
import sokoImg from "../assets/soko.png";
import cediSwapImg from "../assets/cediswap.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
  // Leave unset to show the placeholder icon instead.
  image?: string;
}

export const projects: Project[] = [
  {
    id: "bestrator",
    title: "BestRator — AI-Powered Job Matching Platform",
    description:
      "Built during National Service at Axxend Corporation. An AI platform matching job seekers with opportunities. Led frontend development in React.js, with a Python/Flask/MySQL backend and Azure AI, NLTK and spaCy powering resume parsing. Hosted on Microsoft Azure.",
    tags: ["React.js", "Python", "Flask", "MySQL", "Azure AI"],
    liveUrl: "https://bestrator.com",
    image: bestratorImg,
    featured: true,
  },
  {
    id: "hermania",
    title: "Hermania — Book Reading App",
    description:
      "A live, deployed book reading and storytelling web application built as part of the BuildBluk startup, where I serve as Engineering Lead. Features book discovery, reading and community experiences.",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://the-12th-fail-story-site.vercel.app",
    image: hermaniaImg,
    featured: true,
  },
  {
    id: "sambis-light-construction",
    title: "Sambis Light Construction — Client Website",
    description:
      "A freelance website built and deployed independently for a real construction company client.",
    tags: ["React.js", "Tailwind CSS"],
    liveUrl: "https://sambislight-construction-website.vercel.app",
    image: sambisLightImg,
    featured: true,
  },
  {
    id: "success-enterprise",
    title: "Success Enterprise — Client Website",
    description:
      "A freelance website built and deployed independently for a business enterprise client.",
    tags: ["React.js", "Tailwind CSS"],
    liveUrl: "https://success-enterprise.vercel.app",
    image: successEnterpriseImg,
    featured: true,
  },
  {
    id: "soko-aerial-learning-app",
    title: "Soko Aerial Robotics — Learning App",
    description:
      "A final-year UI/UX design project: a mobile learning platform for Soko Aerial Robotics to train and onboard their interns, covering onboarding, authentication, course browsing, mentor discovery, and profile management.",
    tags: ["Figma", "UI/UX Design", "Mobile App Design"],
    figmaUrl:
      "https://www.figma.com/design/t8MnRvXg70RpkCG8gGogd8/Aerial-Tech?node-id=0-1&p=f&t=hc0YqwiOMarEn4nW-0",
    image: sokoImg,
    featured: false,
  },
  {
    id: "cedi-swap",
    title: "CediSwap — Currency Exchange App UI",
    description:
      "A UI/UX design exploration for a currency exchange app, covering authentication, guest and logged-in homepage states, and profile settings.",
    tags: ["Figma", "UI/UX Design", "Fintech UI"],
    figmaUrl:
      "https://www.figma.com/design/QextkJlZIuXOwblABh6QqM/Cediswap?t=hc0YqwiOMarEn4nW-0",
    image: cediSwapImg,
    featured: false,
  },
];
