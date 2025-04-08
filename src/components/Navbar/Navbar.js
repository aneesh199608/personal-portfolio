/**
 * Navbar Component
 * Creates and returns a navbar element with logo, navigation links, and theme toggle
 */
export function createNavbar(container) {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  // Logo
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Aneesh';
  navbar.appendChild(logo);

  // Navigation Links
  const navLinks = document.createElement('ul');
  navLinks.className = 'nav-links';

  const links = [
    { text: 'Home', href: 'index.html' }, // Updated href
    { text: 'Work', href: 'index.html#work' }, // Keep linking to section on home page
    { text: 'About', href: 'about.html' }, // Updated href
    { text: 'Resume', href: 'https://your-drive-resume-link', target: '_blank' }
  ];

  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.target) a.target = link.target;
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  navbar.appendChild(navLinks);

  // Theme Toggle Button
  const themeToggle = document.createElement('button');
  themeToggle.id = 'themeToggle';
  themeToggle.textContent = '🌓';
  navbar.appendChild(themeToggle);

  // Insert into container
  if (container) {
    container.appendChild(navbar);
  }

  return navbar;
}
