# 🚀 Portfolio — Full Stack Developer

A modern, dark-themed developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, responsive design, and a clean developer-centric aesthetic.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## ✨ Features

- 🌑 **Dark theme** with indigo-violet-cyan accent gradient
- 🎬 **Smooth animations** (fade-in, slide-up, scale) powered by Framer Motion
- ⌨️ **Typing effect** in the hero section
- 📱 **Fully responsive** — mobile, tablet, desktop
- 📧 **Contact form** with validation (EmailJS integration)
- ⚡ **Code splitting** via React.lazy for fast loading
- 🔍 **SEO-optimized** with meta tags and semantic HTML
- 🎨 **Glassmorphism** cards and glow effects
- 🔝 **Scroll-to-top** button
- 📄 **Loading animation** on initial page load

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with scroll blur
│   ├── Hero.jsx            # Hero section with typing animation
│   ├── About.jsx           # Bio, profile image, highlights
│   ├── Skills.jsx          # Tech skills grid by category
│   ├── Projects.jsx        # Project cards with hover effects
│   ├── Experience.jsx      # Timeline layout for work/education
│   ├── Contact.jsx         # Contact form with EmailJS
│   ├── Footer.jsx          # Social links, copyright
│   ├── Loader.jsx          # Initial loading animation
│   ├── ScrollToTop.jsx     # Floating scroll-to-top button
│   └── SectionHeading.jsx  # Reusable section heading
├── data/
│   └── portfolio.js        # ⭐ ALL your content lives here
├── utils/
│   └── animations.js       # Reusable Framer Motion variants
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Tailwind + custom styles
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## 📝 How to Customize

### 1. Edit Your Content

All personal content is centralized in **`src/data/portfolio.js`**. Open this file and search for `[` brackets to find all placeholders:

| Placeholder | Where to Find | What to Replace |
|---|---|---|
| `[Your Name]` | `personalInfo.name` | Your full name |
| `[your.email@example.com]` | `personalInfo.email` | Your email |
| `[Your City, Country]` | `personalInfo.location` | Your location |
| `[your-username]` | `socialLinks` | GitHub, LinkedIn, Twitter usernames |
| `[Project Title N]` | `projectsData` | Your project names & descriptions |
| `[Job Title]` | `experienceData` | Your work/education details |
| `[Company Name]` | `experienceData` | Company/university names |

### 2. Add Your Profile Photo

In `src/data/portfolio.js`, update `aboutData.profileImage`:

```js
// Option 1: URL
profileImage: "https://example.com/your-photo.jpg",

// Option 2: Local file (place in public/ folder)
profileImage: "/your-photo.jpg",
```

### 3. Add Project Screenshots

For each project in `projectsData`, update the `image` field:

```js
image: "/projects/my-project-screenshot.png",
```

Place images in the `public/projects/` folder.

### 4. Set Up Contact Form (EmailJS)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and template
3. Update `contactData.emailjs` in `portfolio.js`:

```js
emailjs: {
  serviceId: "service_xxxxx",
  templateId: "template_xxxxx",
  publicKey: "your_public_key",
},
```

### 5. Update Resume

Place your resume PDF in the `public/` folder and update:

```js
resumeUrl: "/resume.pdf",
```

### 6. Add/Remove Skills

Edit the `skillsData` array in `portfolio.js`. Each skill needs:
- `name` — Display name
- `icon` — Icon component name from the `iconMap` in `Skills.jsx`
- `color` — Brand color (hex)

### 7. Customize Colors

Edit accent colors in `src/index.css` under `@theme`:

```css
@theme {
  --color-accent-500: #6366f1;  /* Change this for a different accent */
  --color-violet-500: #8b5cf6;
  --color-cyan-500: #06b6d4;
}
```

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | UI icons |
| [React Icons](https://react-icons.github.io/) | Brand/tech icons |
| [EmailJS](https://www.emailjs.com/) | Contact form emails |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React & Tailwind CSS
