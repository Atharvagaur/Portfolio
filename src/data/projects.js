const projects = [
  {
    id: 1,
    title: "RAG Learning Assistant",
    tagline: "Retrieval-Augmented Generation",
    variant: "rag",
    description:
      "AI-powered adaptive learning assistant capable of understanding uploaded documents using semantic search and Retrieval-Augmented Generation.",
    tech: ["LangChain", "ChromaDB", "FAISS", "LLM", "Python"],
    stats: ["Semantic Search", "PDF Upload", "Adaptive Learning"],
    github: "https://github.com/Atharvagaur/Q_and_A_Chatbot_using_RAG",
  },
  {
    id: 2,
    title: "CareTrack",
    tagline: "Full-Stack Issue Tracker",
    variant: "caretrack",
    description:
      "Built an end-to-end issue tracker (React, Express, MongoDB) with REST APIs for creating, updating, filtering and assigning issues, a Kanban workflow, and Recharts status/priority dashboards.",
    tech: ["React", "Node.js", "Express", "MongoDB", "LLM API", "Recharts", "OpenRouter", "Zod"],
    stats: ["REST APIs", "Kanban Workflow", "LLM Summaries"],
    github: "https://github.com/Atharvagaur/CareTrack",
  },
  {
    id: 3,
    title: "DDoS Attack Detection",
    tagline: "ML-Based Anomaly Detection",
    variant: "ddos",
    description:
      "Built a reproducible ML pipeline (Random Forest, XGBoost, LightGBM, Isolation Forest) across 3 CIC datasets, cutting 77 features to 20 via mutual information, with frozen-model cross-dataset evaluation, SHAP, and five-seed analysis.",
    tech: ["Python", "Random Forest", "XGBoost", "LightGBM", "Isolation Forest", "SHAP"],
    stats: ["3 CIC Datasets", "77 → 20 Features", "Five-Seed Analysis"],
    github: "https://github.com/Atharvagaur/DDOS_Detection_ML",
  },
  {
    id: 4,
    title: "Merchant Fraud Detection System",
    tagline: "Machine Learning · Fraud Analytics",
    variant: "fraud",
    description:
      "Designed an end-to-end fraud detection pipeline on 7M+ transactions using advanced feature engineering and ensemble machine learning models.",
    tech: ["Python", "TensorFlow", "XGBoost", "LightGBM", "SHAP", "Pandas"],
    stats: ["7M+ Transactions", "25+ Features", "94%+ F1 Score"],
    github: "https://github.com/Atharvagaur",
  },
];

export default projects;
