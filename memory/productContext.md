# Product Context: Personal Portfolio Website (Updated)

## Product Purpose & Goals

- **Primary Goal:** Serve as a professional portfolio for showcasing UI/UX design and design engineering capabilities.
- **Key Message:** Bridging the gap between design and code through modular, elegant implementation.
- **Audience:** Employers, recruiters, collaborators, and peers in design/tech.

## Product Structure

### Pages
1. **Homepage (`index.html`):**
   - Hero section removed.
   - Displays:
     - Selected Work (featured projects)
     - Random Projects
     - Navigation bar and footer
2. **About (`about.html`):**
   - Biography, journey, skills overview.
   - Reuses navbar and styling.
3. **Project Detail Pages:**
   - E.g. `growthschool.html`
   - Includes project title, description, role, timeline, back link
4. **Common Elements:**
   - Navbar: dynamically loaded, includes theme toggle
   - Footer: consistent across pages

## User Experience

- Persistent toggle via localStorage.
- Responsive layout and flexible components.
- Smooth page navigation and minimal page load flash due to pre-applied theming.
