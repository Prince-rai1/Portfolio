/**
 * Hero — Full viewport hero section with typing animation,
 * CTA buttons, social icons, and glowing gradient blobs.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ArrowDown } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { personalInfo, socialLinks } from "../data/portfolio";
import { fadeInUp, fadeInLeft } from "../utils/animations";

// ─── Typing Effect Hook ────────────────────────────────────
function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// ─── Social Icon Map ───────────────────────────────────────
const socials = [
  { icon: SiGithub, href: socialLinks.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: SiX, href: socialLinks.twitter, label: "Twitter" },
  { icon: Mail, href: socialLinks.email, label: "Email" },
];

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.roles);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center md:text-left">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column — Text content */}
          <div>
            {/* Greeting */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="mb-4 font-mono text-sm font-medium text-accent-400 md:text-base"
            >
              Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-2 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
              <span className="gradient-text">.</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-6 flex items-center justify-center gap-1 text-xl text-gray-400 sm:text-2xl md:justify-start md:text-3xl"
            >
              <span className="font-mono text-accent-400">&gt;</span>
              <span className="font-mono">{typedText}</span>
              <span className="animate-blink font-mono text-accent-400">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-gray-400 md:mx-0 md:text-lg"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mb-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="glow group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25"
              >
                View Projects
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="resume.pdf"
                className="group inline-flex items-center gap-2 rounded-lg border border-accent-500/30 px-6 py-3 text-sm font-semibold text-accent-400 transition-all duration-300 hover:border-accent-400 hover:bg-accent-500/10 hover:scale-105"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center justify-center gap-4 md:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative rounded-lg border border-white/5 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:border-accent-500/30 hover:text-accent-400 hover:shadow-lg hover:shadow-accent-500/10 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column — Decorative code block */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            custom={3}
            className="hidden lg:block"
          >
            <div className="glass glow-sm rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-gray-500">developer.js</span>
              </div>
              <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>{" "}
                  <span className="text-white">=</span> {"{\n"}
                  {"  "}
                  <span className="text-accent-400">name</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-green-400">"{personalInfo.name}"</span>,{"\n"}
                  {"  "}
                  <span className="text-accent-400">skills</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-yellow-400">[</span>
                  <span className="text-green-400">"React"</span>,{" "}
                  <span className="text-green-400">"Node.js"</span>,{" "}
                  <span className="text-green-400">"..."</span>
                  <span className="text-yellow-400">]</span>,{"\n"}
                  {"  "}
                  <span className="text-accent-400">hardWorker</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-orange-400">true</span>,{"\n"}
                  {"  "}
                  <span className="text-accent-400">hireable</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-cyan-400">function</span>
                  <span className="text-white">() {"{"}</span>{"\n"}
                  {"    "}
                  <span className="text-violet-400">return</span> <span className="text-orange-400">true</span>;{"\n"}
                  {"  "}
                  <span className="text-white">{"}"}</span>,{"\n"}
                  <span className="text-white">{"}"}</span>;
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-gray-500">scroll</span>
          <ArrowDown size={16} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
