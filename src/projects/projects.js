export function preloadProjectPages() {
  const projectLinks = document.querySelectorAll('.project-card-link');
  projectLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      fetch(href)
        .then(response => {
          if (response.ok) {
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
