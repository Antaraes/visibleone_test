import { BaseComponent } from "./BaseComponent.js";

/**
 * Project Card Component
 * Single Responsibility: Renders individual project card
 */
export class ProjectCard extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.number = props.number || 1;
    this.title = props.title || "Project Name";
    this.image = props.image || null;
  }

  render() {
    return this.createElement(`
            <div class="project-card animate-fade-in">
                <div class="project-image" style="${
                  this.image ? `background-image: url(${this.image})` : ""
                }"></div>
                <div class="project-content">
                    ${this.renderBadge()}
                    <h3 class="project-title">${this.title}</h3>
                </div>
            </div>
        `);
  }

  renderBadge() {
    return `
            <div class="project-badge">
                <svg width="53" height="53" fill="none" viewBox="0 0 53 53">
                    <rect width="53" height="53" rx="26.5" fill="rgba(0,0,0,0.05)" stroke="#7d7d7d" stroke-width="0.84"/>
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="url(#badge-gradient-${this.number})" font-family="Roboto Mono, monospace" font-weight="700" font-size="25">${this.number}</text>
                    <defs>
                        <linearGradient id="badge-gradient-${this.number}" x1="0" x2="53" y1="26.5" y2="26.5">
                            <stop stop-color="#7A87FB"/>
                            <stop offset="1" stop-color="#FFD49C"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        `;
  }
}
