import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1];

const contactRows = [
  {
    label: "Email",
    value: "atharvagaur7487@gmail.com",
    href: "mailto:atharvagaur7487@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/Atharvagaur",
    href: "https://github.com/Atharvagaur",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/atharvagaur7487",
    href: "https://linkedin.com/in/atharvagaur7487",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-site">
        <SectionHeading eyebrow="Contact" title="Let's build something worth shipping." index="04" />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="-mt-6 max-w-2xl leading-8 text-muted"
        >
          I'm always interested in discussing software engineering,
          artificial intelligence, machine learning, and research
          opportunities. Whether it's an internship, a collaboration, or
          simply exchanging ideas — I'd be happy to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-12 border-t border-line"
        >
          {contactRows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              target={row.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-line py-6"
            >
              <span className="flex items-center gap-5">
                <row.icon className="text-muted transition-colors group-hover:text-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                  {row.label}
                </span>
              </span>
              <span className="flex items-center gap-4 text-right font-medium text-ink transition-colors group-hover:text-accent">
                <span className="hidden sm:inline">{row.value}</span>
                <FaArrowRight
                  size={14}
                  className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                />
              </span>
            </a>
          ))}

          <div className="flex items-center justify-between gap-4 border-b border-line py-6">
            <span className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-muted" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Location
              </span>
            </span>
            <span className="text-right font-medium text-ink">
              VIT Vellore, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-10 text-center md:p-14"
        >
          <h3 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Open to internships & collaborations.
          </h3>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-muted">
            Currently pursuing B.Tech in Computer Science (AI & ML) at VIT
            Vellore, actively seeking opportunities to contribute, learn, and
            grow.
          </p>
          <a
            href="mailto:atharvagaur7487@gmail.com"
            className="mt-9 inline-block rounded-full bg-ink px-8 py-3.5 font-semibold text-paper transition-colors hover:bg-accent hover:text-white"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
