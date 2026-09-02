import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FraudDemo = () => (
  <div className="w-full max-w-sm rounded-xl border border-line bg-paper/70 p-5 backdrop-blur">
    <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-muted uppercase">
      <span>Fraud score</span>
      <span className="font-semibold text-emerald-500">SAFE</span>
    </div>
    <div className="mt-4 h-2 overflow-hidden rounded-full bg-line">
      <motion.div
        initial={{ width: "15%" }}
        whileInView={{ width: ["20%", "88%", "82%", "88%"] }}
        viewport={{ once: false }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="h-full rounded-full bg-accent"
      />
    </div>
    <div className="mt-4 grid grid-cols-3 gap-3">
      {[
        ["Precision", "96%"],
        ["Recall", "92%"],
        ["F1", "94%"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-lg border border-line px-2 py-2 text-center">
          <p className="font-mono text-[9px] tracking-widest text-muted uppercase">
            {label}
          </p>
          <p className="mt-0.5 font-semibold text-ink">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

const RagDemo = () => {
  const nodes = ["PDF", "Vector DB", "LLM"];

  return (
    <div className="w-full max-w-sm rounded-xl border border-line bg-paper/70 p-5 backdrop-blur">
      <div className="relative flex items-center justify-between">
        {nodes.map((node, i) => (
          <motion.span
            key={node}
            animate={{ scale: [1, 1.08, 1], borderColor: "var(--line)" }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
            className="relative z-10 rounded-lg border bg-card px-3 py-2 font-mono text-[11px] font-medium text-accent"
          >
            {node}
          </motion.span>
        ))}
        <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-line" />
        <motion.span
          animate={{ left: ["4%", "96%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
        />
      </div>
      <p className="mt-5 text-center font-mono text-[11px] text-muted">
        upload → semantic search → grounded answer
      </p>
    </div>
  );
};

const predictions = ["intelligent", "powerful", "everywhere", "iterative"];

const NlpDemo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % predictions.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-xl border border-line bg-paper/70 p-5 backdrop-blur">
      <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
        Next word prediction
      </p>
      <div className="mt-3 rounded-lg border border-line bg-card p-3 font-mono text-sm text-muted">
        machine learning is
        <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-accent align-middle" />
      </div>
      <div className="flex h-9 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={predictions[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="font-display text-xl italic text-accent"
          >
            {predictions[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

const demos = {
  fraud: FraudDemo,
  rag: RagDemo,
  nlp: NlpDemo,
};

const ProjectThumbnail = ({ title, tagline, stats = [], variant }) => {
  const Demo = demos[variant] ?? demos.fraud;

  return (
    <div className="relative flex h-72 flex-col overflow-hidden border-b border-line bg-linear-to-br from-accent-soft via-card to-card">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <header className="relative z-20 px-7 pt-6">
        <p className="font-mono text-[10px] font-semibold tracking-[0.3em] text-accent uppercase">
          {tagline}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight font-medium text-ink">
          {title}
        </h3>
      </header>

      <div className="group-hover:scale-[1.03] relative z-10 flex flex-1 items-center justify-center px-8 py-4 transition-transform duration-500">
        <Demo />
      </div>

      <footer className="relative z-20 flex flex-wrap gap-2 px-7 pb-5">
        {stats.map((stat) => (
          <span
            key={stat}
            className="rounded-md border border-line bg-paper/80 px-2.5 py-1 font-mono text-[11px] font-medium text-ink backdrop-blur"
          >
            {stat}
          </span>
        ))}
      </footer>
    </div>
  );
};

export default ProjectThumbnail;
