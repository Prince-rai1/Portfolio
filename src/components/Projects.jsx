/**
 * Projects — Grid of project cards with hover effects,
 * tech stack tags, and links to GitHub/live demos.
 */
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projectsData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background accent blobs */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="projects"
          title="Featured Projects"
          description="A selection of projects I've built. Each card links to the source code and live demo."
        />

        {/* Project Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -8 }}
              className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent-500/20 hover:shadow-xl hover:shadow-accent-500/5"
            >
              {/* Project Image / Placeholder */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-surface-800 to-surface-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <Folder
                        size={40}
                        className="mx-auto mb-2 text-accent-400/30 transition-colors group-hover:text-accent-400/60"
                      />
                      <p className="font-mono text-xs text-gray-600">
                        [Add screenshot]
                      </p>
                    </div>
                  </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent-500/20 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
                    Featured
                  </span>
                )}

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#0a0a0a]/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition-all hover:bg-accent-500 hover:text-white"
                    >
                      <SiGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition-all hover:bg-accent-500 hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent-400">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[10px] font-medium text-accent-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
