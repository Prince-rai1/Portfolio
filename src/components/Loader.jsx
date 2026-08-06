/**
 * Loader — Full-screen loading animation shown on initial page load.
 * Displays a pulsing code icon with gradient accents.
 */
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-500 opacity-20 blur-xl" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-surface-900">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="gradient-text font-mono text-3xl font-bold"
            >
              &lt;/&gt;
            </motion.span>
          </div>
        </motion.div>

        {/* Loading bar */}
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
