# Portfolio Website - znisa

A modern, responsive portfolio website built with vanilla JavaScript using a component-based architecture.

## Features

- **Component-Based Architecture**: Modular and reusable JavaScript components
- **Responsive Design**: Mobile-first approach with burger menu navigation
- **Modern UI**: Smooth animations, gradients, and glassmorphism effects
- **Vanilla JavaScript**: No framework dependencies, pure ES6+ modules
- **Cross-Browser Compatible**: Works on all modern browsers

## Project Structure

```
testofvisibleone/
├── index.html              # Main HTML entry point
├── js/
│   ├── app.js             # Application entry point
│   └── components/        # Reusable UI components
│       ├── BaseComponent.js
│       ├── Navbar.js
│       ├── Hero.js
│       ├── ProjectCard.js
│       ├── ProjectsSection.js
│       └── ...
└── styles/
    ├── variables.css      # CSS custom properties (colors, fonts, etc.)
    ├── main.css          # Global styles and layout
    └── components.css    # Component-specific styles
```

## Prerequisites

To run this project, you only need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for development)

## Running Locally

Since this project uses ES6 modules, you need to serve it through a local web server. Here are several methods:

### Method 1: Using Python (Recommended for Quick Setup)

If you have Python installed:

**Python 3.x:**

```bash
python -m http.server 8000
```

**Python 2.x:**

```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to:

```
http://localhost:8000
```

### Method 2: Using Node.js (http-server)

If you have Node.js installed:

1. Install http-server globally (one-time setup):

```bash
npm install -g http-server
```

2. Run the server:

```bash
http-server -p 8000
```

Then open: `http://localhost:8000`

### Method 3: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser will open automatically

### Method 4: Using PHP

If you have PHP installed:

```bash
php -S localhost:8000
```

Then open: `http://localhost:8000`

## Building for Production

This is a static website with no build process required. To deploy to production:
