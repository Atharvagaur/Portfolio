import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaCodeBranch,
  FaGitPullRequest,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../lib/motion";

const contributions = [
  {
    project: "LangChain",
    repository: "langchain-ai/deepagents",
    title: "Apply request timeouts and preserve partial output",
    number: "#7121",
    status: "Merged",
    merged: true,
    description:
      "Bounded Daytona command execution with a shared deadline across setup, execution, polling, and log retrieval. Preserved partial logs on timeout and added a bounded cleanup budget.",
    technologies: ["Python", "Async I/O", "Timeout handling", "Testing"],
    href: "https://github.com/langchain-ai/deepagents/pull/7121",
  },
  {
    project: "LangSmith",
    repository: "langchain-ai/langsmith-python",
    title: "Preserve tool calls in streamed Gemini traces",
    number: "#63",
    status: "Open",
    merged: false,
    description:
      "Updated streamed Gemini output handling to retain function-call parts and finish reasons, align streamed and non-streamed trace shapes, and cover the behavior with regression tests.",
    technologies: ["Python", "Gemini", "Tracing", "pytest"],
    href: "https://github.com/langchain-ai/langsmith-python/pull/63",
  },
  {
    project: "LangSmith",
    repository: "langchain-ai/langsmith-python",
    title: "Add update_example to AsyncClient",
    number: "#46",
    status: "Open",
    merged: false,
    description:
      "Implemented the async example-update API with JSON and multipart PATCH support, dataset ID resolution, attachment handling, and focused unit tests.",
    technologies: ["Python", "AsyncClient", "HTTP APIs", "Testing"],
    href: "https://github.com/langchain-ai/langsmith-python/pull/46",
  },
  {
    project: "DSPy",
    repository: "stanfordnlp/dspy",
    title: "Preserve non-text block positions in MCP results",
    number: "#10642",
    status: "Open",
    merged: false,
    description:
      "Fixed MCP text-mode conversion so non-text content stays in its original position among text blocks, avoiding collisions between mixed-content and pure-text results. Added a regression test.",
    technologies: ["Python", "MCP", "Regression testing"],
    href: "https://github.com/stanfordnlp/dspy/pull/10642",
  },
];

const ContributionCard = ({ contribution, index }) => {
  const StatusIcon = contribution.merged ? FaCheckCircle : FaClock;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={(index % 2) * 0.1}
      className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/50 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-xs tracking-wide text-accent">
            {contribution.project}
          </p>
          <p className="mt-2 break-all font-mono text-[11px] text-muted">
            {contribution.repository}
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${
            contribution.merged
              ? "border-emerald-700/20 bg-emerald-700/5 text-emerald-700 dark:text-emerald-400"
              : "border-line text-muted"
          }`}
        >
          <StatusIcon size={10} />
          {contribution.status}
        </span>
      </div>

      <h3 className="mt-6 text-lg leading-snug font-semibold tracking-tight text-ink sm:text-xl">
        {contribution.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">
        {contribution.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {contribution.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted sm:text-xs"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
          <FaGitPullRequest size={12} />
          {contribution.number}
        </span>
        <a
          href={contribution.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${contribution.project} pull request ${contribution.number}`}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View PR
          <FaArrowUpRightFromSquare size={11} />
        </a>
      </div>
    </motion.article>
  );
};

const OpenSource = () => {
  return (
    <section id="open-source" className="section-pad border-t border-line">
      <div className="container-site">
        <SectionHeading
          eyebrow="Community & Collaboration"
          title="Open Source Contributions."
          index="04"
        />
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted">
          <span>4 pull requests</span>
          <span className="text-line">/</span>
          <span>3 projects</span>
          <span className="text-line">/</span>
          <span>1 merged</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {contributions.map((contribution, index) => (
            <ContributionCard
              key={contribution.href}
              contribution={contribution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
