import { BaseComponent } from "./BaseComponent.js";
import { Logo } from "./Logo.js";
import { Button } from "./Button.js";

/**
 * Footer Component
 * Single Responsibility: Site footer with navigation and social links
 */
export class Footer extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.socialLinks = props.socialLinks || [
      "X",
      "Dribbble",
      "Instagram",
      "Facebook",
    ];
  }

  render() {
    const footer = this.createElement(`
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-logo"></div>
                        <div class="footer-menu"></div>
                        <div class="footer-actions"></div>
                    </div>
                </div>
            </footer>
        `);

    // Mount Logo
    const logoWrapper = footer.querySelector(".footer-logo");
    const logo = new Logo();
    logo.mount(logoWrapper);

    // Mount Social Links
    const footerMenu = footer.querySelector(".footer-menu");
    this.socialLinks.forEach((link) => {
      const socialIcon = this.createElement(`
                <div class="footer-social-icon" title="${link}">
                    ${this.getSocialIcon(link)}
                </div>
            `);
      footerMenu.appendChild(socialIcon);
    });

    // Mount Hire Button
    const footerActions = footer.querySelector(".footer-actions");
    const hireButton = new Button({
      text: "Hire me",
      variant: "primary",
      onClick: () => {
        window.location.hash = "#contact";
      },
    });
    hireButton.mount(footerActions);

    return footer;
  }

  getSocialIcon(name) {
    const icons = {
      X: '<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="white" d="M11.6175 8.66L17.9463 1.25H16.4463L10.9525 7.68375L6.5625 1.25H1.5L8.1375 10.98L1.5 18.75H3L8.8025 11.955L13.4388 18.75H18.5013L11.6175 8.66ZM9.56375 11.065L8.89125 10.0962L3.54 2.3875H5.84375L10.1613 8.60875L10.8338 9.5775L16.4475 17.665H14.1438L9.56375 11.065Z"/></svg>',
      Dribbble:
        '<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" stroke="white" stroke-width="2"/></svg>',
      Instagram:
        '<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="2" width="16" height="16" rx="4" stroke="white" stroke-width="2"/><circle cx="10" cy="10" r="3" stroke="white" stroke-width="2"/></svg>',
      Facebook:
        '<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="white" d="M10 2C5.58 2 2 5.58 2 10c0 3.98 2.92 7.28 6.75 7.87v-5.57H6.89V10h1.86V8.23c0-1.84 1.09-2.85 2.77-2.85.8 0 1.64.14 1.64.14v1.81h-.92c-.91 0-1.19.56-1.19 1.14V10h2.03l-.32 2.3h-1.71v5.57C15.08 17.28 18 14 18 10c0-4.42-3.58-8-8-8z"/></svg>',
    };
    return icons[name] || icons["X"];
  }
}
