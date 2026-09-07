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
  if (window.innerWidth <= 768) {
    const submenuItems = document.querySelectorAll('.has-submenu, .has-sub-submenu');
    
    submenuItems.forEach(function(item) {
      const link = item.querySelector('.menu-link, .submenu-link');
      
      if (link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          item.classList.toggle('open');
        });
      }
    });
  }

  // Fechar menu ao redimensionar para desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && nav) {
      nav.classList.remove('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '☰';
      }
    }
  });
});
