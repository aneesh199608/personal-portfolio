// script.js
import './styles.css';
import { createNavbar } from './src/components/NavRail/index.js';
import { preloadProjectPages } from './src/projects/projects.js';

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

applySavedTheme();

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) createNavbar(navContainer, toggleTheme);

  preloadProjectPages();
});
