import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenisInstance = null;

export const scrollToSection = (selector) => {
  if (lenisInstance) {
    const options = { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) };
    if (selector === "#home") {
      lenisInstance.scrollTo(0, options);
    } else {
      const el = document.querySelector(selector);
      if (el) lenisInstance.scrollTo(el, { ...options, offset: -64 });
    }
    return;
  }
  if (selector === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document
      .querySelector(selector)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const useLenis = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisInstance = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};

export default useLenis;
