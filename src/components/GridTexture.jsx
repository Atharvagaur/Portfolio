const GridTexture = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 30%, transparent 20%, var(--paper) 100%)",
      }}
    />
  </div>
);

export default GridTexture;
