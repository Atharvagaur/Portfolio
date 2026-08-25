import {
  FaBrain,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: FaBrain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Scikit-Learn",
      "XGBoost",
      "LightGBM",
      "LangChain",
      "RAG",
      "LLMs",
      "Transformers",
      "NLP",
    ],
  },
  {
    title: "Full Stack Development",
    icon: FaLaptopCode,
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
      "JavaScript",
      "Next.js",
      "HTML/CSS",
      "Vite",
    ],
  },
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: ["Python", "C++", "JavaScript", "C", "SQL"],
  },
  {
    title: "Computer Science Core",
    icon: FaServer,
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOP",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: FaTools,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter",
      "Google Colab",
    ],
  },
];

export default skillCategories;
