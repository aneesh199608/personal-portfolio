# Technical Context: Personal Portfolio Website

## Core Technologies

-   **Languages:** HTML5, CSS3, JavaScript (ES Modules)
-   **Styling:** Vanilla CSS. Uses CSS Custom Properties (variables) for theming.
-   **Scripting:** Vanilla JavaScript. No external libraries or frameworks (e.g., React, Vue, jQuery) are used unless explicitly requested.
-   **Font:** 'Inter' (Assumed to be available via import or system).

## Development & Hosting

-   **Environment:** Standard web browser environment. No build tools (like Webpack, Parcel) or backend required.
-   **Hosting:** Intended for static hosting, specifically GitHub Pages.

## Key Dependencies & Constraints

-   **CSS Variables:** Theming relies heavily on CSS variables defined in `styles.css` (e.g., `--bg-color`, `--text-color`, `--card-bg`, and their `--*-rgb` counterparts). These are toggled via the `data-theme` attribute on the `<html>` element.
-   **JavaScript Modules:** Uses ES Module syntax (`import`/`export`). Main script is `script.js`, which imports functionality from:
    -   `src/components/Navbar/Navbar.js` (`createNavbar`)
    -   `src/projects/projects.js` (`preloadProjectPages`)
-   **DOM Element IDs:** JavaScript relies on specific element IDs for functionality:
    -   `#navbar-container`: Target element in HTML files (`index.html`, `about.html`, etc.) where the navbar is injected.
    -   `#themeToggle`: Button (created by `Navbar.js`) used to trigger theme changes in `script.js`.
-   **DOM Element Classes:**
    -   `.project-card-link`: Used by `projects.js` to find project links for preloading.
-   **Browser APIs:**
    -   `localStorage`: Used by `script.js` to persist the user's theme preference.
    -   `fetch`: Used by `projects.js` to preload project detail pages.
    -   `backdrop-filter`: Used in `Navbar.css` for styling (requires browser support, includes `-webkit-` prefix).
-   **File Paths:** Project detail pages (e.g., `growthschool.html`) use relative paths (`../../`) to access shared assets like `styles.css` and `script.js`.
-   **Inline Scripts:** An inline script exists in the `<head>` of HTML pages (`index.html`, `about.html`, etc.) to apply the theme immediately from `localStorage` before full CSS/JS loading, preventing theme flashing.

*(Derived from .cline.md, memory/project_context.memory.md, and dependency sections of individual file summaries)*
