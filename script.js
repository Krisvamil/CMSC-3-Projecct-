document.addEventListener('DOMContentLoaded', () => {

    // Cart Item Count: Update cart item count dynamically (can be set based on actual cart data)
    let cartCount = 2;  // Example starting count, this would come from the actual cart data
    const cartCountElement = document.querySelector('.cart-count');
    cartCountElement.textContent = cartCount;

    // Search Bar Focus: Add functionality to highlight input field when clicked and clear when clicked again
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('focus', () => {
        searchInput.style.backgroundColor = '#f4f4f4'; // Light background when focused
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.backgroundColor = 'white'; // Revert background when focus is lost
    });

    // Mobile Navbar Toggle: Show and hide the navigation links on mobile devices
    const navbarLinks = document.querySelector('.navbar-links');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';  // Hamburger icon for mobile
    toggleButton.classList.add('navbar-toggle');
    navbarLinks.parentElement.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        navbarLinks.classList.toggle('hidden');
    });

    // Smooth Scroll: Add smooth scrolling behavior for navigation links
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adds a small offset for a better visual
                behavior: 'smooth'
            });
        });
    });

});
