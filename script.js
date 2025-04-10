import './styles.css'; // Import global styles
import './src/components/Navbar/Navbar.css'; // Import Navbar styles
// Add other CSS imports if needed (e.g., projects.css, Hero.css)
import './src/projects/projects.css';
// import './src/components/Hero/Hero.css'; // Assuming you might have this from previous task

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
 */
export function toggleTheme() {
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
    createNavbar(navbarContainer, toggleTheme); // Pass toggleTheme
  }

  preloadProjectPages();
});
