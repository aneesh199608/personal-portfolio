# System Patterns (Updated)

## Architecture

- Static modular site (HTML/CSS/JS only)
- Bundled with Webpack
- Hosted on GitHub Pages

## Key Patterns

1. **Modular JS via ES Modules**
   - Components like `Navbar.js`, `projects.js`
   - Imports managed in `script.js`

2. **Dynamic Navbar Injection**
   - Navbar created and injected at runtime
   - Target: `#navbar-container`

3. **Theme Switching**
   - Toggle button injected with navbar
   - Data applied to `<html>` via `data-theme`
   - State stored in `localStorage`
   - Inline script applied early to avoid FOUC

4. **Page Preloading**
   - `preloadProjectPages` used to prefetch `.project-card-link` targets

5. **Webpack Plugins**
   - `html-webpack-plugin`: builds `index.html`
   - `mini-css-extract-plugin`: extracts CSS to separate file

6. **GitHub Pages Deployment**
   - `npm run deploy` pushes `dist` to `gh-pages`
