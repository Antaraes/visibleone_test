// ProcessStep.js
import { BaseComponent } from "./BaseComponent.js";
import { Button } from "./Button.js";

export class ProcessStep extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.number = props.number;
    this.title = props.title;
    this.description = props.description;
    this.buttonText = props.buttonText;
    this.iconGradient = props.iconGradient;
    this.showLine = props.showLine;
  }

  render() {
    const step = this.createElement(`
      <div class="process-step">
        <div class="step-number-wrapper">
          <div class="step-number">
            <span class="step-number-text">${this.number}</span>
          </div>
          <div class="step-icon-circle bg-gradient-to-r ${this.iconGradient}">
            ${this.renderIcon()}
          </div>
        </div>

        <div class="step-content">
          <h3 class="step-title">${this.title}</h3>
          <p class="step-description">${this.description}</p>
          <div class="step-actions">
            ${this.buttonText ? `<div class="example-btn"></div>` : ""}
          </div>
        </div>

        ${this.showLine ? '<div class="step-line"></div>' : ""}
      </div>
    `);

    // Mount Button
    if (this.buttonText) {
      const btnContainer = step.querySelector(".example-btn");
      const btn = new Button({
        text: this.buttonText,
        variant: "outline",
        size: "sm",
      });
      btn.mount(btnContainer);
    }

    return step;
  }

  renderIcon() {
    const gradients = {
      "from-yellow-400 to-orange-500":
        "M8 16C8 11.7565 11.134 8 15 8C18.866 8 22 11.7565 22 16C22 20.2435 18.866 24 15 24C11.134 24 8 20.2435 8 16Z M15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12Z",
      "from-blue-400 to-purple-600":
        "M3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15Z M15 8C12.2386 8 10 10.2386 10 13C10 15.7614 12.2386 18 15 18C17.7614 18 20 15.7614 20 13C20 10.2386 17.7614 8 15 8Z M15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12Z",
      "from-purple-400 to-pink-500":
        "M8 16C8 11.7565 11.134 8 15 8C18.866 8 22 11.7565 22 16C22 20.2435 18.866 24 15 24C11.134 24 8 20.2435 8 16Z M15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12Z",
    };

    const path =
      gradients[this.iconGradient] ||
      gradients["from-yellow-400 to-orange-500"];

    return `
      <svg width="36" height="36" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="${path}" fill="white"/>
      </svg>
    `;
  }
}
