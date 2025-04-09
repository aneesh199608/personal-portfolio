# System Patterns: Personal Portfolio Website

This document outlines the key architectural patterns, design decisions, and component interactions within the portfolio website.

## Core Architecture

-   **Static Site:** Built entirely with client-side HTML, CSS, and JavaScript. No backend or build process required. Suitable for hosting on platforms like GitHub Pages.
-   **Component-Based (Conceptual):** While not using a framework, the code is organized with components in mind (e.g., Navbar). CSS and JS related to specific features are grouped (e.g., `src/components/Navbar/`, `src/projects/`).
-   **Modular JavaScript:** Uses ES Modules (`import`/`export`) for organizing JavaScript logic (`script.js`, `Navbar.js`, `projects.js`).

## Key Patterns & Techniques

1.  **Dynamic Component Loading (Navbar):**
    -   HTML files (`index.html`, `about.html`) include a placeholder element (`<header id="navbar-container">`).
    -   `script.js`, on `DOMContentLoaded`, calls the `createNavbar` function exported from `src/components/Navbar/Navbar.js`.
    -   `createNavbar` builds the `<nav>` element structure programmatically using DOM manipulation.
    -   The generated navbar is appended to the `#navbar-container` placeholder.
    -   *Benefit:* Avoids repeating navbar HTML across multiple files, making updates easier.

2.  **CSS Theming with Custom Properties:**
    -   Base theme variables (colors, etc.) are defined in `styles.css` within `html[data-theme="dark"]` and `html[data-theme="light"]` rules. RGB versions are included for use with `rgba()`.
    -   Components (`Navbar.css`, `projects.css`) and global styles use these variables (`var(--variable-name)`).
    -   Theme switching is handled by JavaScript (`script.js`) which toggles the `data-theme` attribute on the `<html>` element.
    -   *Benefit:* Centralized theme control, easy switching between dark/light modes.

3.  **Immediate Theme Application (FOUC Prevention):**
    -   A small inline `<script>` in the `<head>` of each HTML page reads the theme from `localStorage` and applies the `data-theme` attribute *before* the rest of the page loads.
    -   *Benefit:* Prevents a "flash of unstyled content" or flash of the wrong theme during page load.

4.  **Theme Persistence:**
    -   The user's selected theme ('dark' or 'light') is saved to `localStorage` by `script.js` whenever the theme is toggled.
    -   The inline script and `applySavedTheme` function in `script.js` read from `localStorage` on page load.
    -   *Benefit:* Remembers the user's preference across sessions.

5.  **Project Page Preloading:**
    -   `projects.js` exports a `preloadProjectPages` function, called by `script.js`.
    -   This function finds all `.project-card-link` elements and uses `fetch` to request the linked HTML pages.
    -   *Benefit:* May improve perceived navigation speed to project detail pages by having the browser potentially cache the content ahead of time.

6.  **CSS Layout Techniques:**
    -   **Flexbox:** Used extensively for component layout (e.g., `.navbar`, `.hero`, `.project-layout-split`, `.nav-links`, `.project-tags`).
    -   **Grid:** Used for the `.random-projects` section layout.
    -   **Fixed Positioning:** Used for the `.navbar` to keep it visible on scroll. Centered using `left: 50%` and `transform: translateX(-50%)`.
    -   **`backdrop-filter`:** Used on the `.navbar` for a frosted glass effect.
    -   **`aspect-ratio`:** Used on `.project-image-container` to maintain image proportions.
    -   **`object-fit: cover`:** Used on `.project-thumbnail` to ensure images cover their container.

7.  **Accessibility Considerations:**
    -   `:focus-visible` styles applied to `.project-card-link` for keyboard navigation focus indication.
    -   Semantic HTML elements used (`nav`, `main`, `section`, `article`, etc.).

*(Derived from analysis of all component/core file summaries)*
