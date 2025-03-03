document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  // Open menu function
  function openMenu() {
    mobileMenu.classList.add('active');
    body.classList.add('menu-open');
    // Add slight delay to trigger transition
    setTimeout(() => {
      mobileMenu.classList.add('visible');
    }, 10);
  }

  // Close menu function
  function closeMenuHandler() {
    mobileMenu.classList.remove('visible');
    // Wait for transition to complete before removing active class
    setTimeout(() => {
      mobileMenu.classList.remove('active');
      body.classList.remove('menu-open');
    }, 300); // Match this to your CSS transition time
  }

  // Event listeners
  menuToggle.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', closeMenuHandler);

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
      closeMenuHandler();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenuHandler();
    }
  });

  // Support banner close functionality
  const supportBanner = document.querySelector('.support-banner');
  const closeIcon = document.querySelector('.close-icon');

  if (closeIcon && supportBanner) {
    closeIcon.addEventListener('click', function() {
      supportBanner.style.display = 'none';
    });
  }
});
