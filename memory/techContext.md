# Technical Context (Updated)

## Stack

- HTML5, CSS3, JavaScript (ES Modules)
- No frameworks
- Webpack used for bundling

## Key Features

- Theme toggle logic: JS + CSS variables
- DOM access: `#navbar-container`, `#themeToggle`
- CSS: modular styles, extracted into `main.css`
- Project structure: ES modules with `createNavbar`, `preloadProjectPages`
- Output: `/dist` folder with HTML/CSS/JS built by Webpack
- Deployment: `gh-pages` publishes from `dist`
