import { BaseComponent } from "./BaseComponent.js";

export class Button extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.text = props.text || "Button";
    this.variant = props.variant || "primary"; // primary, outline
    this.onClick = props.onClick || (() => {});
    this.className = props.className || "";
  }

  render() {
    const button = this.createElement(`
            <button class="btn btn-${this.variant} ${this.className}">
                ${this.text}
            </button>
        `);

    button.addEventListener("click", (e) => {
      e.preventDefault();
      this.onClick(e);
    });

    return button;
  }
}
