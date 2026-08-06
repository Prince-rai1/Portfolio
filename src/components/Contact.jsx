/**
 * Contact — Contact form with validation + direct social links.
 * Connects to EmailJS for form submissions (configure IDs in portfolio.js).
 */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { contactData, personalInfo, socialLinks } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  // ─── Validation ──────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Handle Change ──────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ─── Handle Submit ──────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      // If EmailJS is configured, use it; otherwise just simulate success
      const { serviceId, templateId, publicKey } = contactData.emailjs;
      if (serviceId.startsWith("[")) {
        // Not configured — simulate success for demo
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
      } else {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus("success");
      }
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // ─── Contact Info Cards ─────────────────────────────────
  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: socialLinks.email },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  const socialItems = [
    { icon: SiGithub, href: socialLinks.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: SiX, href: socialLinks.twitter, label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-500/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="contact"
          title={contactData.heading}
          description={contactData.description}
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left — Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 lg:col-span-2"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass flex items-start gap-4 rounded-xl p-5">
                <div className="rounded-lg bg-accent-500/10 p-3">
                  <Icon size={20} className="text-accent-400" />
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-gray-500">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-gray-300 transition-colors hover:text-accent-400"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass rounded-xl p-5">
              <p className="mb-4 font-mono text-xs text-gray-500">Follow me</p>
              <div className="flex gap-3">
                {socialItems.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-lg border border-white/5 bg-white/5 p-3 text-gray-400 transition-all duration-300 hover:border-accent-500/30 hover:text-accent-400 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8"
              noValidate
            >
              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="mb-2 block font-mono text-xs text-gray-500">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 ${
                      errors.name ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="mb-2 block font-mono text-xs text-gray-500">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="mb-2 block font-mono text-xs text-gray-500">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey, I'd like to discuss a project..."
                    rows={5}
                    className={`w-full resize-none rounded-lg border bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-500 via-violet-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-sm text-green-400"
                  >
                    <CheckCircle2 size={16} /> Message sent successfully! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-sm text-red-400"
                  >
                    <AlertCircle size={16} /> Failed to send. Please try again or email me directly.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
