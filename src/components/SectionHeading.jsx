import { motion } from "framer-motion";
import { blurReveal } from "../lib/motion";

const SectionHeading = ({ eyebrow, title, index }) => {
  return (
    <motion.div
      variants={blurReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative mb-14 md:mb-16"
    >
      {index && (
        <span
          aria-hidden="true"
          className="absolute -top-10 right-0 font-display text-[6rem] leading-none font-semibold text-transparent select-none md:-top-16 md:text-[8.5rem]"
          style={{ WebkitTextStroke: "1.5px var(--line)" }}
        >
          {index}
        </span>
      )}
      <p className="font-mono text-xs font-medium tracking-[0.35em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
