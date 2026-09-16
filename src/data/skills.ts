export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Web Development",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Flask",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "Dart", "Android Studio"],
  },
  {
    category: "Cloud & AI/ML",
    items: [
      "Microsoft Azure",
      "Python",
      "Pandas",
      "scikit-learn",
      "NLTK",
      "spaCy",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "Firebase", "Supabase"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Figma", "Postman", "Azure DevOps"],
  },
];
