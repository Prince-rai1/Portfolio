/**
 * ========================================
 * PORTFOLIO DATA — Edit your info here!
 * ========================================
 *
 * Replace all "[Your ...]" placeholders with your actual data.
 * This single file controls all content across the site.
 */

// ─── Personal Info ──────────────────────────────────────────
export const personalInfo = {
  name: "Prince Kumar Rai",
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ],
  tagline: "I build exceptional digital experiences that live on the internet.",
  description:
    "A passionate Full Stack Developer with expertise in building scalable web applications using modern technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  email: "princeraia578@gmail.com",
  resumeUrl: "/resume.pdf", // Ensure your resume is named resume.pdf in the public folder
  location: "Jaipur, Rajasthan",
};

// ─── Social Links ───────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/Prince-rai1",
  linkedin: "https://linkedin.com/in/[your-username]",
  twitter: "https://twitter.com/[your-username]",
  email: "mailto:princeraia578@gmail.com",
};

// ─── About Section ──────────────────────────────────────────
export const aboutData = {
  bio: [
    "Hello! I'm Prince Kumar Rai, a detail-oriented Full-Stack Developer (MERN) passionate about building real-time, interactive, and AI-integrated web applications.",
    "My focus is on creating seamless digital experiences. With a strong foundation in Javascript, React, Node.js, and modern tools like Next.js and Tailwind CSS, I enjoy tackling complex problems and turning them into scalable solutions.",
    "I am currently seeking an internship opportunity to apply my strong programming and problem-solving skills within a dynamic development team.",
  ],
  highlights: [
    { label: "Years of Experience", value: "[X]+" },
    { label: "Projects Completed", value: "3+" },
    { label: "Open Source Repos", value: "[X]+" },
    { label: "Cups of Coffee", value: "∞" },
  ],
  profileImage: "/projects/Prince.png", // Path to profile photo
};

// ─── Skills Section ─────────────────────────────────────────
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "React.js", icon: "SiReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Shadcn UI", icon: "LuLayoutTemplate", color: "#ffffff" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    ],
  },
  {
    category: "Backend & Real-Time",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
      { name: "Socket.io", icon: "SiSocketdotio", color: "#ffffff" },
      { name: "REST APIs", icon: "LuNetwork", color: "#00FF00" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "Mongoose", icon: "SiMongoose", color: "#880000" },
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
    ],
  },
  {
    category: "APIs & Integrations",
    skills: [
      { name: "Google Gemini API", icon: "SiGoogle", color: "#4285F4" },
      { name: "Liveblocks", icon: "LuDatabase", color: "#ff4f00" },
      { name: "BetterAuth", icon: "LuShield", color: "#4f46e5" },
      { name: "Cloudinary", icon: "SiCloudinary", color: "#F4A261" },
    ],
  },
];

// ─── Projects Section ───────────────────────────────────────
export const projectsData = [
  {
    title: "Mystery Message",
    description:
      "An AI-powered anonymous messaging platform where users can receive honest, anonymous feedback. Features AI-generated conversation starters, secure authentication, and a sleek dark UI with glassmorphism design.",
    image: "/projects/mestry-message.png",
    techStack: ["Next.js", "MongoDB", "Google AI", "Shadcn UI", "Tailwind CSS"],
    githubUrl: "https://github.com/Prince-rai1/Mestry_Message",
    liveUrl: "https://mestry-message.vercel.app/",
    featured: true,
  },
  {
    title: "Live Docs",
    description:
      "A real-time collaborative document editor with live cursors, inline comments, and role-based permissions. Multiple users can edit documents simultaneously with instant synchronization.",
    image: "/projects/live-docs.png",
    techStack: ["Next.js", "Liveblocks", "Lexical Editor", "Better Auth", "MongoDB"],
    githubUrl: "https://github.com/Prince-rai1/LiveDocs",
    liveUrl: "https://live-docs-beta-flame.vercel.app/",
    featured: true,
  },
  {
    title: "Chatify",
    description:
      "A modern real-time chat application with instant messaging, user authentication, and a clean responsive interface. Built for seamless communication across devices.",
    image: "/projects/chatify.png",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Prince-rai1/Chatify-Frontend",
    liveUrl: "https://chatify-nu-ruby.vercel.app/",
    featured: true,
  },
];

// ─── Experience Section ─────────────────────────────────────
export const experienceData = [
  {
    type: "work",
    title: "Seeking Internship",
    organization: "Open to Opportunities",
    duration: "Present",
    description:
      "Currently actively looking for internship opportunities in Full Stack Web Development to apply my skills in React, Node.js, and MongoDB in a professional, real-world environment.",
    techStack: ["React", "Node.js", "MongoDB", "Next.js"],
  },
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    organization: "Maharishi Arvind Institute of Science and Management",
    duration: "Currently Pursuing",
    description:
      "Advanced studies in computer applications, focusing on software engineering, web development, and modern technologies.",
    techStack: [],
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Maharishi Arvind Institute of Science and Management",
    duration: "Completed",
    description:
      "Graduated with a strong foundation in computer science principles, programming languages, and database management.",
    techStack: [],
  },
  {
    type: "education",
    title: "12th Grade (PCM)",
    organization: "Eklavya International Academy",
    duration: "Completed",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    techStack: [],
  },
];

// ─── Contact Section ────────────────────────────────────────
export const contactData = {
  heading: "Get In Touch",
  description:
    "I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!",
  // EmailJS configuration — sign up at https://www.emailjs.com/
  emailjs: {
    serviceId: "[YOUR_EMAILJS_SERVICE_ID]",
    templateId: "[YOUR_EMAILJS_TEMPLATE_ID]",
    publicKey: "[YOUR_EMAILJS_PUBLIC_KEY]",
  },
};

// ─── Navigation ─────────────────────────────────────────────
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
