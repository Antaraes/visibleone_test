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

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

Your site will be live at: `https://yourusername.github.io/your-repo`

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for a free account
3. Drag and drop your project folder
4. Your site is live instantly!

Or use Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: Vercel

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
cd "/Users/minbhonethant/Documents/web development/testofvisibleone"
vercel --prod
```

### Option 4: Traditional Web Hosting

Upload all files via FTP/SFTP to your web hosting provider:

- Upload `index.html` to the root directory
- Upload `js/` and `styles/` folders
- Ensure file permissions are set correctly (644 for files, 755 for directories)

## Production Optimization Tips

Before deploying to production, consider these optimizations:

### 1. Minify CSS and JavaScript

Install a minifier:

```bash
npm install -g minify
```

Minify files:

```bash
# Minify CSS
minify styles/variables.css > styles/variables.min.css
minify styles/main.css > styles/main.min.css
minify styles/components.css > styles/components.min.css

# Minify JS (if needed)
minify js/app.js > js/app.min.js
```

Update `index.html` to reference minified files.

### 2. Optimize Images

- Compress images using tools like [TinyPNG](https://tinypng.com/)
- Use WebP format for better compression
- Add `loading="lazy"` attribute to images

### 3. Add Caching Headers

If using your own server, add cache headers in `.htaccess` (Apache):

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 4. Enable Gzip Compression

Add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript ES6+**: Modules, Classes, Arrow functions
- **Google Fonts**: Poppins, Roboto Mono

## Component Architecture

This project follows a component-based architecture pattern:

```javascript
// BaseComponent.js - Parent class
class BaseComponent {
  createElement(html) {
    /* ... */
  }
  mount(parent) {
    /* ... */
  }
}

// All components extend BaseComponent
class Navbar extends BaseComponent {
  render() {
    // Returns rendered component
  }
}
```

## Responsive Breakpoints

- Mobile: < 768px (burger menu enabled)
- Tablet: 768px - 1200px
- Desktop: > 1200px

## Customization

### Colors

Edit `styles/variables.css` to change the color scheme:

```css
:root {
  --color-primary-start: #7a87fb;
  --color-primary-end: #ffd49c;
  --color-bg-dark: #000000;
  /* ... */
}
```

### Fonts

Change fonts in `index.html` and `styles/variables.css`.

### Content

Update component content in respective JavaScript files in `js/components/`.

## Troubleshooting

### Issue: "CORS error" when opening index.html directly

**Solution**: You must use a local web server. ES6 modules don't work with `file://` protocol.

### Issue: Changes not reflecting

**Solution**: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R) to clear cache.

### Issue: Fonts not loading

**Solution**: Check your internet connection. Google Fonts require internet access.

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or support, please contact the developer.

---

Made with vanilla JavaScript and modern CSS
