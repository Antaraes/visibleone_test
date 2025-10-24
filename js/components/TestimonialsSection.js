import { BaseComponent } from "./BaseComponent.js";
import { SectionHeader } from "./SectionHeader.js";
import { TestimonialCard } from "./TestimonialCard.js";

/**
 * Testimonials Section Component
 * Single Responsibility: Manages collection of testimonials
 */
export class TestimonialsSection extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.testimonials = props.testimonials || [
      {
        name: "Client Name",
        role: "Product designer",
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      },
      {
        name: "Client Name",
        role: "Product designer",
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      },
      {
        name: "Client Name",
        role: "Product designer",
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      },
      {
        name: "Client Name",
        role: "Product designer",
        text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
      },
    ];
  }

  render() {
    const section = this.createElement(`
            <section class="section">
                <div class="container">
                    <div class="section-header-wrapper"></div>
                    <div class="testimonials-grid"></div>
                </div>
            </section>
        `);

    // Mount Section Header
    const headerWrapper = section.querySelector(".section-header-wrapper");
    const header = new SectionHeader({ title: "Client testimonials" });
    header.mount(headerWrapper);

    // Mount Testimonial Cards
    const testimonialsGrid = section.querySelector(".testimonials-grid");
    this.testimonials.forEach((testimonialData) => {
      const card = new TestimonialCard(testimonialData);
      card.mount(testimonialsGrid);
    });

    return section;
  }
}
