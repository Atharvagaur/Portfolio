import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-24 px-6 bg-slate-950"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">
                        Contact
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Let's Build Something Amazing
                    </h2>

                    <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
                        I'm always interested in discussing software engineering,
                        artificial intelligence, machine learning, research opportunities,
                        and exciting development projects. Whether it's an internship,
                        collaboration, or simply exchanging ideas, I'd be happy to connect.
                    </p>
                </motion.div>

                {/* Contact Cards */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Email */}

                    <motion.a
                        whileHover={{ y: -8 }}
                        href="mailto:atharvagaur7487@gmail.com"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
                    >
                        <FaEnvelope
                            size={34}
                            className="mx-auto text-blue-400"
                        />

                        <h3 className="mt-6 text-xl font-semibold text-white">
                            Email
                        </h3>

                        <p className="mt-3 text-gray-400">
                            atharvagaur7487@gmail.com
                        </p>

                    </motion.a>

                    {/* GitHub */}

                    <motion.a
                        whileHover={{ y: -8 }}
                        href="https://github.com/Atharvagaur"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
                    >
                        <FaGithub
                            size={34}
                            className="mx-auto text-white"
                        />

                        <h3 className="mt-6 text-xl font-semibold text-white">
                            GitHub
                        </h3>

                        <p className="mt-3 text-gray-400">
                            github.com/Atharvagaur
                        </p>

                    </motion.a>

                    {/* LinkedIn */}

                    <motion.a
                        whileHover={{ y: -8 }}
                        href="https://linkedin.com/in/atharvagaur7487"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
                    >
                        <FaLinkedin
                            size={34}
                            className="mx-auto text-blue-500"
                        />

                        <h3 className="mt-6 text-xl font-semibold text-white">
                            LinkedIn
                        </h3>

                        <p className="mt-3 text-gray-400">
                            Connect with me
                        </p>

                    </motion.a>

                    {/* Location */}

                    <motion.div
                        whileHover={{ y: -8 }}
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:border-blue-500"
                    >
                        <FaMapMarkerAlt
                            size={34}
                            className="mx-auto text-red-400"
                        />

                        <h3 className="mt-6 text-xl font-semibold text-white">
                            Location
                        </h3>

                        <p className="mt-3 text-gray-400">
                            VIT Vellore, India
                        </p>

                    </motion.div>

                </div>

                {/* Bottom */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 rounded-3xl border border-slate-800 bg-linear-to-r from-blue-600/10 to-indigo-600/10 p-10 text-center"
                >
                    <h3 className="text-3xl font-bold text-white">
                        Open to Internship Opportunities
                    </h3>

                    <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">
                        Currently pursuing B.Tech in Computer Science (AI & ML) at
                        VIT Vellore with a strong interest in Software Engineering,
                        Artificial Intelligence, Machine Learning, and Full-Stack
                        Development. I'm actively seeking internship opportunities
                        where I can contribute, learn, and grow.
                    </p>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=atharvagaur7487@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                    >
                        Get In Touch
                    </a>

                </motion.div>

            </div>
        </section>
    );
};

export default Contact;