function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function performSearch() {
    const searchInput = document.getElementById('search-input').value;
    alert('Search for: ' + searchInput);
}

function toggleMenu() {
    const navbarNav = document.getElementById('navbar-nav');
    navbarNav.classList.toggle('show');
    // Ensure dropdown menu is hidden when mobile menu is toggled
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = 'none';
}
