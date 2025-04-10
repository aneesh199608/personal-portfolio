// script.js
import './styles.css';
import './src/components/NavRail/style.css'; // Import NavRail styles
import { createNavbar } from './src/components/NavRail/index.js';
import avatarUrl from './src/images/aneesh-3d-avatar.png'; // Import the image

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

  const avatarImage = document.getElementById('avatar-image'); // Get the image element by ID
  if (avatarImage) {
    avatarImage.src = avatarUrl; // Set the src to the imported URL
  }
});

function preloadProjectPages() {
  const links = document.querySelectorAll('.project-card-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkTag = document.createElement('link');
      linkTag.rel = 'prefetch';
      linkTag.href = href;
      document.head.appendChild(linkTag);
    }
  });
}
