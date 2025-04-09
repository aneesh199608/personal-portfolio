import { createNavbar } from './src/components/Navbar/Navbar.js';
import { preloadProjectPages } from './src/projects/projects.js';

/**
 * Applies the saved theme from localStorage immediately on script load.
 */
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
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

applySavedTheme();

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    createNavbar(navbarContainer);
  }

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }

  preloadProjectPages(); // Added missing call
});
