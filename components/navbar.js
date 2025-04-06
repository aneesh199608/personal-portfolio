
<![CDATA[
/**
 * Loads the navigation bar HTML, injects it into the header,
 * and adjusts link paths based on the current page's location.
 * @param {string} basePath - The relative path prefix needed to reach the root directory (e.g., './' or '../../').
 * @param {function} themeToggler - The function to attach to the theme toggle button.
 */
export async function loadNavigation(basePath = './', themeToggler) {
  console.log('[NAV] loadNavigation called with basePath:', basePath); // DEBUG
  // Ensure basePath ends with a slash
  if (!basePath.endsWith('/')) {
    basePath += '/';
    console.log('[NAV] Adjusted basePath:', basePath); // DEBUG
  }

  const navHtmlPath = `${basePath}components/navbar.html`;
  const indexPath = `${basePath}index.html`;
  // const assetsPath = `${basePath}assets/`; // Base path for assets if needed in nav (kept for potential future use)

  try {
    console.log(`[NAV] Fetching navbar HTML from: ${navHtmlPath}`); // DEBUG
    const response = await fetch(navHtmlPath);
    console.log(`[NAV] Fetch response status: ${response.status}`, response.ok); // DEBUG
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const html = await response.text();
    console.log('[NAV] Navbar HTML fetched successfully.'); // DEBUG

    console.log('[NAV] Looking for header element...'); // DEBUG
    const header = document.querySelector('header');
    if (!header) {
      console.error('[NAV] Header element not found to inject navigation.'); // DEBUG
      return;
    }
    console.log('[NAV] Header element found. Injecting HTML...'); // DEBUG
    header.innerHTML = html;
    console.log('[NAV] HTML injected.'); // DEBUG

    // Adjust links after injection
    console.log('[NAV] Adjusting navigation links...'); // DEBUG
    const navLinks = header.querySelectorAll('.nav-links a');
    const isProjectPage = window.location.pathname.includes('/projects/');
    console.log(`[NAV] isProjectPage: ${isProjectPage}`); // DEBUG

    navLinks.forEach(link => {
      const originalHref = link.getAttribute('href');
      if (!originalHref) return; // Skip if no href

      if (originalHref === '#') { // Typically the 'Home' link
        link.setAttribute('href', isProjectPage ? '../../index.html' : './index.html');
      } else if (originalHref.startsWith('#')) { // Section links like #work, #about
        // If on a project page, link back to index.html#section
        if (isProjectPage) {
          link.setAttribute('href', `../../index.html${originalHref}`);
        }
        // If on index.html, the hash link is already correct, no change needed.
      } else if (!originalHref.startsWith('http') && !originalHref.startsWith('mailto:')) {
        // Adjust relative links (like Resume) if needed, assuming it's relative to root
        if (isProjectPage) {
           // Example: If resume link was relative like 'assets/resume.pdf'
           // link.setAttribute('href', `../../${originalHref}`);
           // For external links (like the current Google Drive link), no change needed.
        }
      }
    });
    console.log('[NAV] Links adjusted.'); // DEBUG

    // Adjust logo link/text to link to index.html
    console.log('[NAV] Adjusting logo link...'); // DEBUG
    const logoDiv = header.querySelector('.logo'); // Select the original div
    if (logoDiv) {
      const homeLink = document.createElement('a');
      homeLink.href = isProjectPage ? '../../index.html' : './index.html';
      homeLink.textContent = logoDiv.textContent; // Keep original text "YourName"
      homeLink.classList.add('logo-link'); // Add class for potential styling
      // Replace the div with the new anchor tag
      logoDiv.parentNode.replaceChild(homeLink, logoDiv);
      console.log('[NAV] Logo link adjusted.'); // DEBUG
    } else {
      console.warn('[NAV] Logo div (.logo) not found in navbar HTML.'); // DEBUG
    }


    // Attach the theme toggle listener passed from the main script
    console.log('[NAV] Attaching theme toggle listener...'); // DEBUG
    const themeToggleButton = document.getElementById('themeToggle');
    if (themeToggleButton && typeof themeToggler === 'function') {
      themeToggleButton.addEventListener('click', themeToggler);
      console.log('[NAV] Theme toggle listener attached.'); // DEBUG
    } else if (!themeToggleButton) {
       console.warn('[NAV] Theme toggle button (#themeToggle) not found in navbar HTML.'); // DEBUG
    } else if (typeof themeToggler !== 'function') {
       console.warn('[NAV] Valid themeToggler function was not provided to loadNavigation.'); // DEBUG
    }

  } catch (error) {
    console.error('[NAV] Error during loadNavigation:', error); // DEBUG
  }
}
]]>
