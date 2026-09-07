// ===========================================================
// MENU MOBILE — TOGGLE E SUBMENUS
// ===========================================================

document.addEventListener('DOMContentLoaded', function() {
  // Toggle do menu hambúrguer
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.area-navegacao');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  // Toggle de submenus no mobile (nível 2 e 3)
  function setupMobileSubmenus() {
    const isMobile = window.innerWidth <= 768;
    const submenuItems = document.querySelectorAll('.has-submenu, .has-sub-submenu');

    submenuItems.forEach(function(item) {
      const link = item.querySelector('.menu-link, .submenu-link');
      
      // Remove eventos antigos para evitar duplicação
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);

      if (isMobile && newLink) {
        newLink.addEventListener('click', function(e) {
          e.preventDefault();
          item.classList.toggle('open');
        });
      }
    });
  }

  // Executa no carregamento e no redimensionamento
  setupMobileSubmenus();

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && nav) {
      nav.classList.remove('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '☰';
      }
    }
    setupMobileSubmenus();
  });
});
