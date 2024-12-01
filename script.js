// Selecting the menu icon and the nav-links
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

// Adding a click event to toggle the 'active' class
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});