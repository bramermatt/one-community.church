document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mobile-nav');
  const icon = document.getElementById('menu-icon');

  function closeDetails() {
    document.querySelectorAll('.mobile-nav details[open]').forEach(detail => {
      detail.removeAttribute('open');
    });
  }

  function mobileMenu() {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.classList.remove('no-scroll');
      closeDetails();  // Close details when menu is closed
    } else {
      menu.classList.add('open');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      document.body.classList.add('no-scroll');
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // matt was here


  // Close menu when a menu item is clicked
  document.querySelectorAll('.mobile-nav a').forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('open');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      document.body.classList.remove('no-scroll');
      scrollToTop();
      closeDetails();  // Close details when a menu item is clicked
    });
  });

  // Attach mobileMenu function to the icon click event
  icon.addEventListener('click', mobileMenu);
});
