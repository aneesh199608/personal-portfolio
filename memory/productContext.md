# Product Context: Personal Portfolio Website

## Product Purpose & Goals

-   **Primary Goal:** To serve as a professional online portfolio showcasing the owner's skills, experience, and projects as a UI/UX Designer and Design Engineer.
-   **Key Message:** Highlight the ability to bridge design and code effectively.
-   **Target Audience:** Potential employers, clients, collaborators, and peers in the design and tech industry.

## Product Structure & Content

The website is structured into the following key pages and sections:

1.  **Homepage (`index.html`):**
    -   Serves as the main entry point.
    -   **Hero Section:** Introduces the owner with a photo, name, and tagline.
    -   **Selected Work Section:** Features 4 key projects presented with descriptions, key results/tags, and images, linking to individual detail pages. Uses a split layout for visual emphasis.
    -   **Random Projects Section:** Showcases smaller experiments or tools in a grid layout.
2.  **About Page (`about.html`):**
    -   Provides biographical information, details on journey, skills, and expertise.
    -   Reuses the hero section style for consistency.
3.  **Project Detail Pages (e.g., `src/projects/growthschool.html`):**
    -   Dedicated pages for in-depth descriptions of selected projects.
    -   Include sections for project description, role, timeline, etc.
    -   Feature a "Back to Projects" link for navigation.
4.  **Common Elements:**
    -   **Navigation Bar:** Dynamically loaded, fixed at the top, includes links to Home, Work (section on homepage), About, and an external Resume link. Also contains the theme toggle.
    -   **Footer:** Consistent across pages with copyright information.

## User Experience

-   **Aesthetic:** Modern, sleek, professional.
-   **Theme:** Dark mode by default, with a toggle for light mode. Theme preference is persisted using `localStorage`.
-   **Responsiveness:** The layout should adapt to different screen sizes (details TBD/implemented).
-   **Interactivity:** Smooth theme transitions, subtle hover effects on cards, project preloading for potentially faster navigation.
-   **Accessibility:** Focus styles are implemented for interactive elements like project card links. (Further accessibility considerations should be maintained).

*(Derived from .cline.md, memory/project_context.memory.md, memory/index.memory.md, memory/about.memory.md, memory/growthschool.html.memory.md)*
