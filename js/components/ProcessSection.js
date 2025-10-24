// ProcessSection.js
import { BaseComponent } from "./BaseComponent.js";
import { SectionHeader } from "./SectionHeader.js";
import { ProcessStep } from "./ProcessStep.js";

export class ProcessSection extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.steps = props.steps || [
      {
        number: 1,
        title: "Step 1: Product design Research",
        description:
          "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
        buttonText: "See Examples",
        iconGradient: "from-yellow-400 to-orange-500",
      },
      {
        number: 2,
        title: "Step 2: UI design in figma",
        description:
          "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
        iconGradient: "from-blue-400 to-purple-600",
      },
      {
        number: 3,
        title: "Step 3: No-code develop in webflow",
        description:
          "This initial step involves a systematic and thorough exploration of the market landscape, user needs, and existing solutions.",
        iconGradient: "from-purple-400 to-pink-500",
      },
    ];
  }

  render() {
    const section = this.createElement(`
      <section class="process-section">
        <div class="container">
          <div class="section-header-wrapper"></div>
          <div class="process-steps"></div>
        </div>
      </section>
    `);

    // Header
    const headerWrapper = section.querySelector(".section-header-wrapper");
    const header = new SectionHeader({
      title: "My process to design",
      icon: "star",
    });
    header.mount(headerWrapper);

    // Steps
    const stepsContainer = section.querySelector(".process-steps");
    this.steps.forEach((stepData, index) => {
      const step = new ProcessStep({
        ...stepData,
        showLine: index < this.steps.length - 1,
      });
      step.mount(stepsContainer);
    });

    return section;
  }
}
