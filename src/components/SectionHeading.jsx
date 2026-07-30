import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <p className="text-blue-500 font-semibold uppercase tracking-[4px]">
                {subtitle}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
                {title}
            </h2>

            <div className="h-1 w-28 bg-blue-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>
    );
};

export default SectionHeading;