/**
 * Experience — Vertical timeline layout for work experience & education.
 * Each entry has a dot, connecting line, and fade-in animation.
 */
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experienceData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeInUp, fadeInLeft } from "../utils/animations";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          tag="experience"
          title="Experience & Education"
          description="My professional journey and academic background."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent-500/50 via-violet-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = item.type === "education" ? GraduationCap : Briefcase;

              return (
                <motion.div
                  key={`${item.organization}-${i}`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i * 0.5}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-500/30 bg-surface-950 transition-colors hover:border-accent-400">
                      <Icon size={18} className="text-accent-400" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                    <motion.div
                      variants={isLeft ? fadeInLeft : fadeInUp}
                      className="glass group rounded-xl p-6 transition-all duration-300 hover:border-accent-500/20 hover:shadow-lg hover:shadow-accent-500/5"
                    >
                      {/* Duration badge */}
                      <span className="mb-3 inline-block rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[11px] font-medium text-accent-400">
                        {item.duration}
                      </span>

                      <h3 className="mb-1 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mb-3 font-mono text-sm text-violet-400">
                        @ {item.organization}
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-gray-400">
                        {item.description}
                      </p>

                      {/* Tech stack tags (for work entries) */}
                      {item.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-gray-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
