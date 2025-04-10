// src/projects/projects.js

/**
 * Preloads linked project pages for faster navigation.
 */
import './projects.css';

export function preloadProjectPages() {
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