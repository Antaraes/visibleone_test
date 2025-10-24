// Hero.js
import { BaseComponent } from "./BaseComponent.js";
import { Button } from "./Button.js";

export class Hero extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.title = props.title || "I design and build clean websites";
    this.description =
      props.description ||
      "Write anything here something about yourself to showcase what actually you doing or targeting etc.";
    this.ctaText = props.ctaText || "Hire me";
  }

  render() {
    const hero = this.createElement(`
      <section class="hero">
        <!-- Full square grid -->
        <div class="hero-grid">${this.renderGrid()}</div>

        <!-- Stars -->
        <div class="star star-1">${this.renderStar()}</div>
        <div class="star star-2">${this.renderStar()}</div>

        <!-- Content -->
        <div class="hero-content">
          <h1 class="hero-title">${this.title}</h1>
          <p class="hero-description">${this.description}</p>
          <div class="hero-cta"></div>
        </div>
      </section>
    `);

    // CTA button
    const cta = new Button({
      text: this.ctaText,
      variant: "primary",
      onClick: () => (window.location.hash = "#contact"),
    });
    cta.mount(hero.querySelector(".hero-cta"));

    return hero;
  }

  renderGrid() {
    const width = 1091;
    const height = 567;

    // Choose the number of equal square columns
    const columnCount = 10;
    const squareSize = width / columnCount;

    // Compute rows based on square size
    const rowCount = Math.floor(height / squareSize);

    const vLines = Array.from(
      { length: columnCount + 1 },
      (_, i) => i * squareSize
    );

    const hLines = Array.from(
      { length: rowCount + 1 },
      (_, i) => i * squareSize
    );

    const svgLines = [
      ...vLines.map(
        (x) => `<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`
      ),
      ...hLines.map((y) => `<line x1="0" y1="${y}" x2="${width}" y2="${y}" />`),
    ].join("");

    return `
    <svg class="hero-grid-svg"
         width="100%" height="100%"
         viewBox="0 0 ${width} ${height}"
         preserveAspectRatio="xMidYMid slice"
         xmlns="http://www.w3.org/2000/svg">
      ${svgLines}
    </svg>
  `;
  }

  renderStar() {
    return `
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path fill="white" fill规章 d="M15.5 36C15.469 27.4501 8.54135 20.5287 0 20.5287C8.56041 20.5287 15.5 13.5762 15.5 5C15.5309 13.5499 22.4586 20.4713 31 20.4713C22.4394 20.4713 15.5 27.4238 15.5 36Z"/>
        <path fill="white" fill规章 d="M28.5 15C28.485 10.863 25.1329 7.5139 21 7.5139C25.1421 7.5139 28.5 4.14977 28.5 0C28.5149 4.13704 31.8671 7.4861 36 7.4861C31.8578 7.4861 28.5 10.8502 28.5 15Z"/>
      </svg>
    `;
  }
}
