// include.js - Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
  // Load the header
  fetch('header.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('header-placeholder').innerHTML = html;

          // Set active nav link based on current page
          const currentPage = window.location.pathname.split('/').pop();
          let navId = 'nav-home'; // Default

          if (currentPage === 'builds.html') {
              navId = 'nav-builds';
          } else if (currentPage === 'products.html') {
              navId = 'nav-products';
          } else if (currentPage === 'about.html') {
              navId = 'nav-about';
          } else if (currentPage === 'contact.html') {
              navId = 'nav-contact';
          }

          // Add active class to the current nav link
          const activeLink = document.getElementById(navId);
          if (activeLink) {
              activeLink.classList.add('active');
          }
      })
      .catch(error => {
          console.error('Error loading header:', error);
      });

  // Load the footer
  fetch('footer.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('footer-placeholder').innerHTML = html;
      })
      .catch(error => {
          console.error('Error loading footer:', error);
      });
});