# Active Context (as of Memory Restructuring)

This file tracks the current focus, recent changes, and the state of key files.

**Current Focus:** Restructuring the memory bank from individual file summaries (`*.memory.md`) into the six core context files (`projectbrief.md`, `productContext.md`, `techContext.md`, `systemPatterns.md`, `activeContext.md`, `progress.md`).

**Recent Changes:**
-   Created `projectbrief.md`, `productContext.md`, `techContext.md`, `systemPatterns.md`.
-   Populated these files by consolidating information from `.cline.md` and the previous individual `.memory.md` files.

**Current State Summaries (Derived from previous *.memory.md files):**

*   **`index.html`:** Main entry point. Includes Hero, Selected Work (split layout, links to detail pages), and Random Projects (grid layout) sections. Loads Navbar dynamically, applies theme via inline script, links to `styles.css`, `Navbar.css`, `projects.css`, and `script.js`.
*   **`script.js`:** Main JS file (module). Handles theme application/toggling/persistence (using `localStorage` and `data-theme` attribute). Dynamically loads Navbar using `createNavbar` from `Navbar.js`. Calls `preloadProjectPages` from `projects.js`. Relies on `#navbar-container` and `#themeToggle` IDs.
*   **`styles.css`:** Base styles, theme definitions (dark/light using CSS variables), global padding, hero section layout (flex column), random projects grid layout, footer styles. Defines `--bg-color`, `--text-color`, `--card-bg` (and RGB versions).
*   **`about.html`:** About page structure. Reuses hero style, includes placeholder content/images for journey/skills. Links to shared CSS/JS.
*   **`src/components/Navbar/Navbar.js`:** Exports `createNavbar` function which builds the `<nav>` element with logo, links (Home, Work, About, Resume), and theme toggle button (`#themeToggle`). Appends navbar to provided container.
*   **`src/components/Navbar/Navbar.css`:** Styles the navbar: fixed position (top-center), semi-transparent background with blur, rounded corners, subtle border. Uses Flexbox for layout. Styles links and theme toggle button. Relies on CSS variables from `styles.css`.
*   **`src/projects/projects.js`:** Exports `preloadProjectPages` function which fetches HTML for pages linked by `.project-card-link` elements to potentially improve navigation speed.
*   **`src/projects/projects.css`:** Styles project cards: base styles, hover effect, split layout (`.project-layout-split`) for featured work (flex row), grid card padding (`.random-projects .project-card`). Styles project detail pages (`.project-detail-page`, `.back-link`, section headings/content).
*   **`src/projects/growthschool.html`:** Detail page for GrowthSchool project. Standard head/header/footer. Uses `.project-detail-page` layout. Contains placeholder content for description, role, timeline. Links back to `index.html`.
*   **`README.md`:** Minimal, contains only the title `# personal-portfolio`.

**Next Steps:**
-   Create `progress.md`.
-   Optionally clean up old `.memory.md` files and the memory section in `.cline.md`.
