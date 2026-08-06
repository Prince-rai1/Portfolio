/**
 * About — Bio section with profile image placeholder, key highlights,
 * and staggered fade-in animations.
 */
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { aboutData, personalInfo } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="about"
          title="About Me"
          description="Here's a little bit about who I am and what I do."
        />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Profile Image / Avatar Placeholder */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center lg:col-span-2"
          >
            <div className="group relative">
              {/* Gradient border ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-500 via-violet-500 to-cyan-500 opacity-50 blur-sm transition-opacity duration-500 group-hover:opacity-75" />

              <div className="relative overflow-hidden rounded-2xl bg-surface-900">
                {aboutData.profileImage ? (
                  <img
                    src={aboutData.profileImage}
                    alt={personalInfo.name}
                    className="h-72 w-72 object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80 sm:w-80"
                    loading="lazy"
                  />
                ) : (
                  /* Placeholder avatar */
                  <div className="flex h-72 w-72 items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900 sm:h-80 sm:w-80">
                    <div className="text-center">
                      <User size={64} className="mx-auto mb-3 text-accent-400/40" />
                      <p className="font-mono text-xs text-gray-500">
                        [Add your photo]
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {aboutData.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="text-base leading-relaxed text-gray-400 md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
