import { motion } from "framer-motion";

const nodes = [
  { x: 20, y: 15 },
  { x: 20, y: 40 },
  { x: 20, y: 65 },
  { x: 20, y: 90 },

  { x: 50, y: 25 },
  { x: 50, y: 55 },
  { x: 50, y: 85 },

  { x: 80, y: 35 },
  { x: 80, y: 70 },
];

const lines = [
  [0, 4],
  [0, 5],
  [1, 4],
  [1, 5],
  [1, 6],
  [2, 5],
  [2, 6],
  [3, 6],
  [4, 7],
  [4, 8],
  [5, 7],
  [5, 8],
  [6, 8],
];

const HeroGraphic = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-162.5">

      {/* Glow */}

      <div className="absolute w-120 h-120 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Rotating Rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute w-107.5 h-107.5 rounded-full border border-blue-500/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="absolute w-[320px] h-80 rounded-full border border-cyan-400/20"
      />

      {/* Neural Network */}

      <svg
        viewBox="0 0 100 100"
        className="absolute w-85 h-85"
      >
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#2563eb"
            strokeWidth="0.5"
            opacity="0.35"
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="#60a5fa"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Floating Cards */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-14 left-4 backdrop-blur-xl bg-slate-900/80 border border-blue-500/30 rounded-2xl p-5 shadow-xl"
      >
        <p className="text-gray-400 text-sm">Research</p>
        <h2 className="text-3xl font-bold text-white">AI/ML</h2>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-0 top-44 backdrop-blur-xl bg-slate-900/80 border border-cyan-400/30 rounded-2xl p-5 shadow-xl"
      >
        <p className="text-gray-400 text-sm">Focus</p>
        <h2 className="text-2xl font-bold text-cyan-400">
          RAG Systems and Agentic AI
        </h2>
      </motion.div>

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-10 left-16 backdrop-blur-xl bg-slate-900/80 border border-blue-500/30 rounded-2xl p-5 shadow-xl"
      >
        <p className="text-gray-400 text-sm">Interests</p>

        <div className="mt-3 space-y-2">

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-white text-sm">
              Deep Learning
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-white text-sm">
              NLP
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-white text-sm">
              Computer Vision
            </span>
          </div>

        </div>
      </motion.div>

      {/* Center Orb */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="relative z-10 w-36 h-36 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 shadow-[0_0_80px_rgba(59,130,246,0.5)] flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center text-3xl font-black text-blue-400">
          AI
        </div>
      </motion.div>

    </div>
  );
};

export default HeroGraphic;