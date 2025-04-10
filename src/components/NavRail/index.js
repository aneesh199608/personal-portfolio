// src/components/NavRail/index.js
import './style.css';

/**
 * Creates and injects a vertical navigation rail.
 * @param {HTMLElement} container - Where to inject the nav rail
 * @param {Function} toggleThemeCallback - Theme toggle handler
 */
export function createNavbar(container, toggleThemeCallback) {
  const nav = document.createElement('nav');
  nav.className = 'nav-rail';

  const ul = document.createElement('ul');
  ul.className = 'nav-destinations';

  const links = [
    { label: 'Home', icon: '🏠', href: 'index.html' },
    { label: 'Projects', icon: '🗂️', href: 'index.html#work' },
    { label: 'About', icon: '📖', href: 'about.html' },
    { label: 'Resume', icon: '↗️', href: 'https://your-drive-resume-link', target: '_blank' }
  ];

  links.forEach(({ label, icon, href, target }) => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.href = href;
    a.className = 'nav-link';
    if (target) a.target = target;
    a.innerHTML = `
      <span class="nav-icon">${icon}</span>
      <span class="nav-label">${label}</span>
    `;

    li.appendChild(a);
    ul.appendChild(li);
  });

  const themeButton = document.createElement('button');
  themeButton.className = 'nav-theme-toggle';
  themeButton.innerHTML = `
    <span class="nav-icon">☀️</span>
    <span class="nav-label">Theme</span>
  `;
  themeButton.addEventListener('click', toggleThemeCallback);

  nav.appendChild(ul);
  nav.appendChild(themeButton);

  container.appendChild(nav);
  return nav;
}
