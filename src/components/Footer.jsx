/**
 * Footer — Social links, copyright notice, and credits.
 */
import { Mail, Heart } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { personalInfo, socialLinks, navLinks } from "../data/portfolio";

const footerSocials = [
  { icon: SiGithub, href: socialLinks.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: SiX, href: socialLinks.twitter, label: "Twitter" },
  { icon: Mail, href: socialLinks.email, label: "Email" },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-surface-900/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="mb-4 inline-block font-mono text-xl font-bold">
              <span className="gradient-text">{personalInfo.name.charAt(0) !== "[" ? personalInfo.name.split(" ").map(n => n[0]).join("") : "</>"}</span>
            </a>
            <p className="max-w-xs text-sm text-gray-500">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-500 transition-colors hover:text-accent-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-gray-400">
              Connect
            </h4>
            <div className="flex gap-3">
              {footerSocials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg border border-white/5 bg-white/5 p-2.5 text-gray-500 transition-all duration-300 hover:border-accent-500/30 hover:text-accent-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-gray-600">
            Built with <Heart size={12} className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
