import { motion } from "framer-motion";

const accentClasses = {
    blue: {
        gradient: "from-blue-950 via-slate-900 to-slate-950",
        glow: "bg-blue-500/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
        card: "bg-blue-500/10",
        badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    },
    cyan: {
        gradient: "from-cyan-950 via-slate-900 to-slate-950",
        glow: "bg-cyan-500/20",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        card: "bg-cyan-500/10",
        badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    },
    violet: {
        gradient: "from-violet-950 via-slate-900 to-slate-950",
        glow: "bg-violet-500/20",
        border: "border-violet-500/30",
        text: "text-violet-400",
        card: "bg-violet-500/10",
        badge: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    },
};

const ProjectThumbnail = ({
    title,
    subtitle,
    accent = "blue",
    stats = [],
}) => {
    const theme = accentClasses[accent];

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35 }}
            className={`relative h-64 overflow-hidden rounded-t-3xl bg-linear-to-br ${theme.gradient}`}
        >
            {/* Glow */}
            <div
                className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${theme.glow}`}
            />

            {/* Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">

                    <motion.div

                        animate={{ rotate: 360 }}

                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}

                        className="h-105 w-105 rounded-full border border-white/5"

                    />

                </div>
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            {/* Heading */}
            <div className="relative z-10 p-6">
                <p
                    className={`text-xs font-semibold tracking-[0.35em] uppercase ${theme.text}`}
                >
                    AI PROJECT
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white">
                    {title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
            </div>

            {/* Center Icon */}
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute inset-x-0 top-[45%] px-8"
            >

                {accent === "blue" && (

                    <div className="rounded-3xl border border-blue-500/20 bg-slate-900/80 p-5 backdrop-blur-xl">

                        <div className="flex justify-between">

                            <span className="text-xs text-blue-300">
                                Fraud Score
                            </span>

                            <span className="text-xs text-green-400">
                                SAFE
                            </span>

                        </div>

                        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-700">

                            <motion.div

                                initial={{ width: "15%" }}

                                animate={{

                                    width: ["20%", "92%", "88%", "92%"]

                                }}

                                transition={

                                    {

                                        duration: 4,

                                        repeat: Infinity

                                    }

                                }

                                className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-cyan-300"
                            />

                        </div>

                        <div className="mt-4 flex justify-between text-sm">

                            <span className="text-gray-400">
                                Accuracy
                            </span>

                            <span className="font-bold text-white">
                                94%
                            </span>

                        </div>

                    </div>

                )}

                {accent === "cyan" && (

                    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-5 backdrop-blur-xl">

                        <div className="flex justify-between">

                            <div className="rounded bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">
                                PDF
                            </div>

                            <div className="rounded bg-cyan-500/20 px-2 py-1 text-xs text-cyan-300">
                                LLM
                            </div>

                        </div>

                        <div className="mt-5 flex items-center justify-between">

                            <div className="h-3 w-3 rounded-full bg-cyan-400" />

                            <div className="h-0.5 flex-1 bg-cyan-500/40" />

                            <div className="h-3 w-3 rounded-full bg-cyan-400" />

                            <div className="h-0.5 flex-1 bg-cyan-500/40" />

                            <div className="h-3 w-3 rounded-full bg-cyan-400" />

                        </div>

                        <p className="mt-4 text-center text-xs text-gray-400">

                            Upload → Vector DB → AI Answer

                        </p>

                    </div>

                )}

                {accent === "violet" && (

                    <div className="rounded-3xl border border-violet-500/20 bg-slate-900/80 p-5 backdrop-blur-xl">

                        <div className="text-xs text-violet-300">

                            Input Sentence

                        </div>

                        <div className="mt-3 rounded-xl bg-slate-800 p-3 text-sm text-gray-300">

                            Machine Learning is...

                        </div>

                        <motion.div
                            animate={{
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                            className="mt-4 text-center text-xl font-bold text-violet-300"
                        >

                            intelligent

                        </motion.div>

                    </div>

                )}

            </motion.div>

            {/* Bottom Stats */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {stats.map((item, index) => (

                    <motion.div

                        key={item}

                        initial={{
                            opacity: 0,
                            y: 15
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            delay: index * 0.15
                        }}

                        className={`rounded-lg border px-3 py-1 text-xs font-semibold backdrop-blur ${theme.badge}`}
                    >

                        {item}

                    </motion.div>

                ))}
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-white/10" />
            <div className="absolute right-10 top-8 h-4 w-4 rounded-full bg-white/20" />
            <div className="absolute right-20 top-20 h-2 w-2 rounded-full bg-white/20" />
            <div className="absolute right-14 top-28 h-1.5 w-1.5 rounded-full bg-white/20" />
        </motion.div>
    );
};

export default ProjectThumbnail;