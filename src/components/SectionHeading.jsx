/**
 * SectionHeading — Reusable heading component for each section.
 * Displays a mono-font tag label above the main heading with gradient accent.
 */
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

export default function SectionHeading({ tag, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-16 text-center"
    >
      {/* Mono tag label */}
      <span className="mb-4 inline-block font-mono text-sm font-medium text-accent-400">
        &lt;{tag} /&gt;
      </span>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">
          {description}
        </p>
      )}

      {/* Gradient underline */}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-500" />
    </motion.div>
  );
}
