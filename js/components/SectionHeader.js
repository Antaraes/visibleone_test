import { BaseComponent } from "./BaseComponent.js";

/**
 * Section Header Component
 * Single Responsibility: Renders section titles with decorative icons
 */
export class SectionHeader extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.title = props.title || "Section Title";
  }

  render() {
    return this.createElement(`
            <div class="section-header">
                <h2 class="section-title">${this.title}</h2>
                ${this.renderIcon()}
            </div>
        `);
  }

  renderIcon() {
    return `
            <svg class="section-icon" width="36" height="36" fill="none" viewBox="0 0 36 36">
                <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M15.5 36C15.469 27.4501 8.54135 20.5287 0 20.5287C8.56041 20.5287 15.5 13.5762 15.5 5C15.5309 13.5499 22.4586 20.4713 31 20.4713C22.4394 20.4713 15.5 27.4238 15.5 36Z"/>
                <path fill="white" fill-rule="evenodd" clip-rule="evenodd" d="M28.5 15C28.485 10.863 25.1329 7.5139 21 7.5139C25.1421 7.5139 28.5 4.14977 28.5 0C28.5149 4.13704 31.8671 7.4861 36 7.4861C31.8578 7.4861 28.5 10.8502 28.5 15Z"/>
            </svg>
        `;
  }
}
