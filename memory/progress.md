# Project Progress

This file tracks the current status of features, known issues, and future work.

## Current Status (as of Memory Restructuring)

**Completed / Functional:**

-   **Basic Site Structure:** `index.html` and `about.html` pages exist.
-   **Core Layout:** Hero section, Work section, Random Projects section, Footer are present.
-   **Navigation:** Dynamic navbar loading is functional, links mostly point to correct pages/sections.
-   **Theming:** Dark/Light mode switching works, theme preference is persisted via `localStorage`. Immediate theme application prevents FOUC.
-   **Styling:** Base styles, navbar styles, and project card/detail page styles are implemented. Uses CSS variables effectively.
-   **Project Linking:** Featured projects on `index.html` link to detail pages (though only `growthschool.html` exists).
-   **Project Preloading:** Basic mechanism implemented in `projects.js`.
-   **Memory Bank:** Restructured into the six core context files.

**In Progress / Partially Implemented:**

-   **Content:** Most content is placeholder text (`Lorem ipsum`, bracketed descriptions) in `about.html` and `src/projects/growthschool.html`. Hero section needs actual name/photo. Resume link is a placeholder.
-   **Projects:**
    -   Only one project detail page (`growthschool.html`) exists. Links for VR Training and Print & Mail projects in `index.html` point to non-existent files.
    -   Random Projects section has placeholder divs.
-   **Responsiveness:** Basic structure exists, but thorough testing and refinement across different screen sizes haven't been explicitly done.

**Not Started / Future Work:**

-   Adding actual content (text, images) to all pages and sections.
-   Creating missing project detail pages (`project-vr-training.html`, `project-print-mail.html`).
-   Implementing actual "Random Projects".
-   Adding the correct Resume link.
-   Detailed responsiveness testing and adjustments.
-   Adding any further interactivity or features.
-   Expanding `README.md` with useful project information.

**Known Issues / Limitations:**

-   Project preloading (`projects.js`) uses basic `fetch` without sophisticated caching or error handling beyond console logging.
-   `backdrop-filter` CSS property may not work in all older browsers.
-   'Inter' font dependency is assumed, not explicitly managed.

*(Derived from analysis of all component/core file summaries and project structure)*
