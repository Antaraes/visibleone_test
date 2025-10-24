import { BaseComponent } from "./BaseComponent.js";
import { Button } from "./Button.js";
import { Logo } from "./Logo.js";

/**
 * Navbar Component
 * Single Responsibility: Main navigation header
 */
export class Navbar extends BaseComponent {
  constructor(props = {}) {
    super(props);
    this.navItems = props.navItems || [
      { text: "Home", active: true, icon: true },
      { text: "About", active: false },
      { text: "Projects", active: false },
      { text: "Contact me", active: false },
    ];
  }

  render() {
    const navbar = this.createElement(`
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-content">
                        <div class="logo-wrapper"></div>
                        <button class="burger-menu" aria-label="Toggle navigation">
                            <span class="burger-line"></span>
                            <span class="burger-line"></span>
                            <span class="burger-line"></span>
                        </button>
                        <div class="nav-menu"></div>
                        <div class="nav-actions"></div>
                    </div>
                </div>
            </nav>
        `);

    // Mount Logo
    const logoWrapper = navbar.querySelector(".logo-wrapper");
    const logo = new Logo();
    logo.mount(logoWrapper);

    // Mount Nav Items
    const navMenu = navbar.querySelector(".nav-menu");
    this.navItems.forEach((item) => {
      const navItem = this.createElement(`
                <a href="#${item.text.toLowerCase().replace(" ", "-")}" 
                   class="nav-item ${item.active ? "active" : ""} ${
        item.icon ? "nav-item-icon" : ""
      }">
                    ${item.icon ? this.getHomeIcon() : item.text}
                </a>
            `);
      navMenu.appendChild(navItem);
    });

    // Mount Action Button
    const navActions = navbar.querySelector(".nav-actions");
    const hireButton = new Button({
      text: "Hire me",
      variant: "primary",
      onClick: () => {
        window.location.hash = "#contact";
      },
    });
    hireButton.mount(navActions);

    // Burger menu toggle functionality
    const burgerMenu = navbar.querySelector(".burger-menu");
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
      navActions.classList.toggle("active");
    });

    // Close menu when clicking on nav items
    const navItems = navbar.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
        navActions.classList.remove("active");
      });
    });

    return navbar;
  }

  getHomeIcon() {
    return `
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path stroke="white" stroke-width="1.5" d="M1.66667 10.1699C1.66667 8.26291 1.66667 7.3094 2.09933 6.51895C2.532 5.72851 3.32245 5.23793 4.90336 4.25677L6.57003 3.22239C8.24116 2.18524 9.07672 1.66667 10 1.66667C10.9233 1.66667 11.7588 2.18524 13.43 3.22239L15.0966 4.25677C16.6775 5.23793 17.468 5.72851 17.9007 6.51895C18.3333 7.3094 18.3333 8.26291 18.3333 10.1699V11.4375C18.3333 14.6882 18.3333 16.3136 17.357 17.3235C16.3807 18.3333 14.8094 18.3333 11.6667 18.3333H8.33333C5.19064 18.3333 3.61929 18.3333 2.64298 17.3235C1.66667 16.3136 1.66667 14.6882 1.66667 11.4375V10.1699Z"/>
                <path stroke="white" stroke-linecap="round" stroke-width="1.5" d="M10 12.5L10 15"/>
            </svg>
        `;
  }
}
