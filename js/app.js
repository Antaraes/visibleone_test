/**
 * Main Application Entry Point
 * Orchestrates all components following Dependency Inversion Principle
 */
import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Marquee } from "./components/Marquee.js";
import { ProcessSection } from "./components/ProcessSection.js";
import { ProjectsSection } from "./components/ProjectsSection.js";
import { TestimonialsSection } from "./components/TestimonialsSection.js";
import { ContactSection } from "./components/ContactSection.js";
import { Footer } from "./components/Footer.js";

class App {
  constructor() {
    this.container = document.getElementById("app");
    this.components = [];
  }

  /**
   * Initialize and mount all components
   */
  init() {
    // Clear container
    this.container.innerHTML = "";

    // Create and mount components in order
    this.mountComponent(new Navbar());
    this.mountComponent(
      new Hero({
        title: "I design and build clean websites",
        description:
          "Write anything here something about yourself to showcase what actually you doing or targeting etc.",
        ctaText: "Hire me",
      })
    );
    this.mountComponent(
      new Marquee({
        items: ["Framer", "Webflow", "Figma", "Notion"],
      })
    );
    this.mountComponent(
      new ProcessSection({
        steps: [
          {
            number: 1,
            title: "Step 1: Product design Research",
            description:
              "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
          },
          {
            number: 2,
            title: "Step 2: UI design in figma",
            description:
              "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
          },
          {
            number: 3,
            title: "Step 3: No-code develop in webflow",
            description:
              "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
          },
        ],
      })
    );
    this.mountComponent(
      new ProjectsSection({
        projects: [
          { number: 1, title: "Project Name" },
          { number: 2, title: "Project Name" },
          { number: 3, title: "Project Name" },
        ],
      })
    );
    this.mountComponent(new TestimonialsSection());
    this.mountComponent(new ContactSection());
    this.mountComponent(new Footer());

    // Setup event listeners
    this.setupEventListeners();
  }

  /**
   * Mount a component to the app container
   */
  mountComponent(component) {
    this.components.push(component);
    component.mount(this.container);
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Scroll animations
    this.setupScrollAnimations();
  }

  /**
   * Setup scroll-based animations
   */
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
  }

  /**
   * Cleanup and destroy app
   */
  destroy() {
    this.components.forEach((component) => component.unmount());
    this.components = [];
    this.container.innerHTML = "";
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();

  // Expose app instance globally for debugging
  window.portfolioApp = app;
});

export default App;
