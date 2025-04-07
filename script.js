import { createNavbar } from './src/components/Navbar/Navbar.js'; // Reverted import path
import { preloadProjectPages } from './src/projects/projects.js';

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

  // No change needed here as preloadProjectPages is already being called
});
