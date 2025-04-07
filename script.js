import { createNavbar } from './src/components/Navbar/Navbar.js';

// --- Theme Handling ---

/**
 * Applies the saved theme from localStorage immediately on script load.
 */
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  // Default to 'dark' if no theme is saved
  const themeToApply = savedTheme ? savedTheme : 'dark';
  document.documentElement.setAttribute("data-theme", themeToApply);
}

/**
 * Toggles the theme between 'dark' and 'light' and saves the preference.
 * This function will be attached to the theme toggle button in each HTML file.
 */
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Apply theme immediately on script load
applySavedTheme();

function preloadProjectPages() {
  const projectLinks = document.querySelectorAll('.project-card-link');
  projectLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      fetch(href)
        .then(response => {
          if (response.ok) {
            // Cache the response
            return response.text();
          }
          throw new Error(`Failed to preload ${href}`);
        })
        .catch(error => {
          console.error('Preloading error:', error);
        });
    }
  });
}

// --- Attach Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Navbar
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    createNavbar(navbarContainer);
  }

  // Find the theme toggle button (assuming it exists in the loaded HTML)
  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }

  // Preload project pages
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    preloadProjectPages();
  }
});
