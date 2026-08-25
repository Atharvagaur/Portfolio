import { scrollToSection } from "../hooks/useLenis";
import LocalTime from "./LocalTime";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Atharva Gaur
        </p>
        <LocalTime />
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
