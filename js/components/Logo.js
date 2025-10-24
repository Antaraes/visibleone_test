import { BaseComponent } from "./BaseComponent.js";

export class Logo extends BaseComponent {
  render() {
    return this.createElement(`
            <a href="#" class="logo">
                <div class="logo-icon">
                    <svg width="39" height="30" fill="none" viewBox="0 0 39 30">
                        <defs>
                            <linearGradient id="logo-gradient-1" x1="0" x2="15.4375" y1="15" y2="15">
                                <stop stop-color="#7A87FB"/>
                                <stop offset="1" stop-color="#FFD49C"/>
                            </linearGradient>
                            <linearGradient id="logo-gradient-2" x1="16.7744" x2="26.6031" y1="8.78049" y2="8.78049">
                                <stop stop-color="#7A87FB"/>
                                <stop offset="1" stop-color="#FFD49C"/>
                            </linearGradient>
                            <linearGradient id="logo-gradient-3" x1="16.7744" x2="39.0002" y1="24.5378" y2="24.5378">
                                <stop stop-color="#7A87FB"/>
                                <stop offset="1" stop-color="#FFD49C"/>
                            </linearGradient>
                        </defs>
                        <path fill="url(#logo-gradient-1)" d="M15.4375 30C6.91935 30 0 23.101 0 14.608V0C8.51814 0 15.4375 6.89896 15.4375 15.392V30Z"/>
                        <path fill="url(#logo-gradient-2)" d="M16.7744 17.561V9.79965C16.7744 4.39024 21.1777 3.86952e-07 26.6031 3.86952e-07V7.76132C26.6031 13.1707 22.1998 17.561 16.7744 17.561Z"/>
                        <path fill="url(#logo-gradient-3)" d="M39.0002 29.9995H27.7301C21.6756 29.9995 16.7744 25.1127 16.7744 19.0761H28.0446C34.099 19.0761 39.0002 23.9629 39.0002 29.9995Z"/>
                    </svg>
                </div>
                <span>znisa</span>
            </a>
        `);
  }
}
