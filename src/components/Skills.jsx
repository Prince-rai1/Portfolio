/**
 * Skills — Grid of tech skills grouped by category with hover animations.
 * Uses react-icons for all skill icons via a dynamic lookup map.
 */
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiVscodium,
  SiSocketdotio, SiGithub, SiCloudinary, SiGoogle, SiMongoose, SiMysql
} from "react-icons/si";
import { Rocket, LayoutTemplate, Network, Database, Shield } from "lucide-react";
import { skillsData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeInUp, scaleIn, staggerContainer } from "../utils/animations";

// ─── Icon Registry (maps icon string names → components) ───
// Keys match the "icon" strings in portfolio.js skillsData
const iconMap = {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5,
  SiCss3: SiCss, // renamed in react-icons v5
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit,
  SiVisualstudiocode: SiVscodium, // renamed in react-icons v5
  SiAntigravity: Rocket, // Custom: no brand icon, using Rocket as fallback
  SiSocketdotio, SiGithub, SiCloudinary, SiGoogle, SiMongoose, SiMysql,
  LuLayoutTemplate: LayoutTemplate,
  LuNetwork: Network,
  LuDatabase: Database,
  LuShield: Shield,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="skills"
          title="Skills & Technologies"
          description="Technologies I've been working with and love using."
        />

        {/* Category Groups */}
        <div className="space-y-12">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={groupIndex}
            >
              {/* Category label */}
              <h3 className="mb-6 flex items-center gap-3 font-mono text-sm font-medium text-gray-400">
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                <span className="text-accent-400">{group.category}</span>
                <span className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
              </h3>

              {/* Skill cards grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7"
              >
                {group.skills.map((skill, i) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={scaleIn}
                      custom={i}
                      whileHover={{ y: -6, scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="glass group flex cursor-default flex-col items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:border-white/10 hover:shadow-lg"
                      style={{
                        "--skill-color": skill.color,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          size={32}
                          className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_var(--skill-color)]"
                          style={{ color: skill.color }}
                        />
                      )}
                      <span className="text-center font-mono text-xs text-gray-400 transition-colors group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
