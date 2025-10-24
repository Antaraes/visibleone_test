import { BaseComponent } from "./BaseComponent.js";
import { SectionHeader } from "./SectionHeader.js";
import { Button } from "./Button.js";

/**
 * Contact Section Component
 * Single Responsibility: Contact/CTA section
 */
export class ContactSection extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.description =
      props.description ||
      "Write anything here something about yourself to showcase what actually you doing or targeting etc.";
  }

  render() {
    const section = this.createElement(`
            <section class="section contact-section" id="contact">
                <div class="container">
                    <div class="section-header-wrapper"></div>
                    <div class="contact-content">
                        <p class="contact-description">${this.description}</p>
                        <div class="contact-cta"></div>
                    </div>
                </div>
            </section>
        `);

    // Mount Section Header
    const headerWrapper = section.querySelector(".section-header-wrapper");
    const header = new SectionHeader({ title: "Have idea about project?" });
    header.mount(headerWrapper);

    // Mount CTA Button
    const ctaContainer = section.querySelector(".contact-cta");
    const ctaButton = new Button({
      text: "Send us a message",
      variant: "primary",
      onClick: () => {
        alert("Contact form would open here!");
      },
    });
    ctaButton.mount(ctaContainer);

    return section;
  }
}
