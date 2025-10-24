// TestimonialCard.js
import { BaseComponent } from "./BaseComponent.js";

export class TestimonialCard extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.name = props.name || "Client Name";
    this.role = props.role || "Product designer";
    this.text =
      props.text ||
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the";
  }

  render() {
    return this.createElement(`
      <div class="testimonial-card">
        <div class="testimonial-header">
          <div class="testimonial-author">
            <div class="author-avatar"></div>
            <div class="author-info">
              <div class="author-name">${this.name}</div>
              <div class="author-role">${this.role}</div>
            </div>
          </div>
          ${this.renderQuoteIcon()}
        </div>
        <p class="testimonial-text">${this.text}</p>
      </div>
    `);
  }

  renderQuoteIcon() {
    return `
      <svg class="quote-icon" width="44" height="33" viewBox="0 0 44 33" fill="none">
        <defs>
          <linearGradient id="quote-gradient-${this.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#A78BFA"/>
            <stop offset="100%" stop-color="#FBBF24"/>
          </linearGradient>
        </defs>
        <path fill="url(#quote-gradient-${this.id})" d="M19.0579 22.7327C19.0579 27.7721 15.5877 31.5898 10.307 31.5898C5.02632 31.5898 0.5 27.3139 0.5 19.6785C0.5 10.2105 7.59123 2.11689 16.7947 0.589799V6.24004C11.514 7.30901 7.59123 11.1267 7.59123 15.5553C8.49649 14.9445 9.70351 14.4863 11.6649 14.4863C15.5877 14.4863 19.0579 17.3878 19.0579 22.7327ZM43.5 22.7327C43.5 27.7721 39.8789 31.5898 34.5982 31.5898C29.4684 31.5898 24.7912 27.3139 24.7912 19.6785C24.7912 10.2105 31.8825 2.11689 41.2368 0.589799V6.24004C35.9561 7.30901 32.0333 11.1267 32.0333 15.4026C32.9386 14.7918 34.2965 14.4863 36.107 14.4863C40.0298 14.4863 43.5 17.3878 43.5 22.7327Z"/>
      </svg>
    `;
  }
}
