document.addEventListener('DOMContentLoaded', function() {
  const dropdownTrigger = document.querySelector('.dropdown-trigger');
  const dropdown = document.querySelector('.dropdown');
  
  // Handle mobile dropdown
  if (window.innerWidth <= 768) {
    dropdownTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      dropdown.classList.toggle('active');
      
      // Close dropdown when clicking outside
      document.addEventListener('click', function closeDropdown(e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('active');
          document.removeEventListener('click', closeDropdown);
        }
      });
    });
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      dropdown.classList.remove('active');
    }
  });
}); 