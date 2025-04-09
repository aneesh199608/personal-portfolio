/**
 * Navbar Component
 * Creates and returns a navbar element with logo, navigation links, and theme toggle
 */
export function createNavbar(container) {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Aneesh';
  navbar.appendChild(logo);

  const navLinks = document.createElement('ul');
  navLinks.className = 'nav-links';

  const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '' && segment !== 'index.html');
  const depth = pathSegments.length;
  const prefix = '../'.repeat(depth);

  const links = [
    { text: 'Home', href: `${prefix}index.html` },
    { text: 'Work', href: `${prefix}index.html#work` },
    { text: 'About', href: `${prefix}about.html` },
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

  const themeToggle = document.createElement('button');
  themeToggle.id = 'themeToggle';
  themeToggle.textContent = '🌓';
  navbar.appendChild(themeToggle);

  if (container) {
    container.appendChild(navbar);
  }

  return navbar;
}
