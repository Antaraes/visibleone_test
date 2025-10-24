import { BaseComponent } from "./BaseComponent.js";
import { SectionHeader } from "./SectionHeader.js";
import { ProjectCard } from "./ProjectCard.js";

/**
 * Projects Section Component
 * Single Responsibility: Manages collection of project cards
 */
export class ProjectsSection extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.projects = props.projects || [
      { number: 1, title: "Project Name" },
      { number: 2, title: "Project Name" },
      { number: 3, title: "Project Name" },
    ];
  }

  render() {
    const section = this.createElement(`
            <section class="section">
                <div class="container">
                    <div class="section-header-wrapper"></div>
                    <div class="projects-grid"></div>
                </div>
            </section>
        `);

    // Mount Section Header
    const headerWrapper = section.querySelector(".section-header-wrapper");
    const header = new SectionHeader({ title: "Some Featured projects" });
    header.mount(headerWrapper);

    // Mount Project Cards
    const projectsGrid = section.querySelector(".projects-grid");
    this.projects.forEach((projectData) => {
      const card = new ProjectCard(projectData);
      card.mount(projectsGrid);
    });

    return section;
  }
}
