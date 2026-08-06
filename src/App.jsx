/**
 * App.jsx — Root component that assembles all sections.
 * Manages the loading state and renders all portfolio sections in order.
 */
import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Lazy-load heavier sections for better initial load performance
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Initial loading animation */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Main content */}
      <div className={loading ? "invisible" : "visible"}>
        <Navbar />

        <main>
          <Hero />

          <Suspense fallback={null}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
