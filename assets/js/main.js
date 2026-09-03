// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }

  // Submenu toggle no mobile (para sub-submenus)
  const submenuItems = document.querySelectorAll('.has-sub-submenu');
  submenuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    }
  });
});
