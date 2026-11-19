const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.querySelector('.sr-only').textContent = isExpanded ? '開啟選單' : '收合選單';
    siteNav.classList.toggle('is-open', !isExpanded);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.querySelector('.sr-only').textContent = '開啟選單';
      siteNav.classList.remove('is-open');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.querySelector('.sr-only').textContent = '開啟選單';
      siteNav.classList.remove('is-open');
    }
  });
}
