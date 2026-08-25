import { motion } from "framer-motion";
import CardSpotlight from "./CardSpotlight";
import SectionHeading from "./SectionHeading";
import skillCategories from "../data/skills";
import { fadeUp } from "../lib/motion";

const Skills = () => {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="container-site">
        <SectionHeading eyebrow="Skills" title="Tools of the trade." index="02" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={(index % 3) * 0.1}
              className="h-full"
            >
              <CardSpotlight className="h-full rounded-2xl border border-line bg-card p-8 transition-colors duration-300 hover:border-accent/50">
                <div className="relative z-20 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-lg text-accent">
                      <category.icon />
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    {category.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-default rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
