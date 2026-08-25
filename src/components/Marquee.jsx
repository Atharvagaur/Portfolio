import { motion } from "framer-motion";

const items = [
  "Machine Learning",
  "Deep Learning",
  "RAG Systems",
  "Agentic AI",
  "LangChain",
  "TensorFlow",
  "XGBoost",
  "Transformers",
  "NLP",
  "Full Stack",
];

const Marquee = () => {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line py-5"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-mono text-sm tracking-[0.25em] whitespace-nowrap text-muted uppercase"
          >
            {item}
            <span className="text-xs text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
