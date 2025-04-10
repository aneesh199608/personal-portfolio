/**
 * Navbar Component
 * Creates and returns a navbar element with logo, navigation links, and theme toggle
 */
// Removed import { toggleTheme } from '../../script.js';

import './Navbar.css';

export function createNavbar(container, toggleThemeCallback) {
  const nav = document.createElement('nav');
  nav.className = 'nav-rail';

  const destinations = document.createElement('div');
  destinations.className = 'nav-destinations';

  const links = [
    { label: 'Home', icon: '🏠', href: '/index.html' },
    { label: 'Projects', icon: '🗂️', href: '/index.html#work' },
    { label: 'About', icon: '📖', href: '/about.html' },
    { label: 'Resume', icon: '↗️', href: 'https://your-drive-resume-link', target: '_blank' }
  ];

  links.forEach(link => {
    const item = document.createElement('a');
    item.className = 'nav-item';
    item.href = link.href;
    if (link.target) item.target = link.target;

    item.innerHTML = `
      <div class="nav-icon">${link.icon}</div>
      <div class="nav-label">${link.label}</div>
    `;

    destinations.appendChild(item);
  });

  nav.appendChild(destinations);

  const toggleButton = document.createElement('button');
  toggleButton.className = 'nav-theme-toggle';
  toggleButton.innerHTML = '<span class="nav-icon">☀️</span><div class="nav-label">Theme</div>';
  toggleButton.addEventListener('click', toggleThemeCallback);

  nav.appendChild(toggleButton);

  if (container) {
    container.appendChild(nav);
  }

  return nav;
}
