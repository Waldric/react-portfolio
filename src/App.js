import Navbar from "./Navbar";
import "./App.css";
import Hero from "./Hero";
import "./hero.css";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import useScrollReveal from "./useScrollReveal";
import { useEffect } from "react";

function useScrollSpy() {
  useEffect(() => {
    const links = [...document.querySelectorAll('a.nav-link[href^="#"]')];
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    links.forEach((l) => {
      l.addEventListener("click", (e) => {
        e.preventDefault();
        const id = l.getAttribute("href");
        document
          .querySelector(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          const link = document.querySelector(`a.nav-link[href="${id}"]`);
          if (link) {
            if (entry.isIntersecting) link.classList.add("active");
            else link.classList.remove("active");
          }
        });
      },
      { rootMargin: "-60% 0px -35% 0px", threshold: [0, 1] },
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      sections.forEach((s) => obs.unobserve(s));
      obs.disconnect();
      links.forEach((l) => l.replaceWith(l.cloneNode(true))); // remove listeners
    };
  }, []);
}

function App() {
  useScrollReveal();
  return (
    <div className="App">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
