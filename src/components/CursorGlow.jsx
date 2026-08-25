import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SIZE = 520;

const CursorGlow = () => {
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const springX = useSpring(x, { stiffness: 55, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 55, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 -z-10 hidden h-[520px] w-[520px] rounded-full dark:block"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, var(--glow) 0%, transparent 65%)",
      }}
    />
  );
};

export default CursorGlow;
