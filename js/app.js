// MOBILE NAVIGATION MENU
const menuButton = document.querySelector('.menu-toggle');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav__list');

menuButton.addEventListener('click', function () {
    navList.classList.toggle('active');
    open.classList.toggle('active');
    close.classList.toggle('active');
});

// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED
let navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navList.classList.remove('active');
        open.classList.remove('active');
        close.classList.remove('active');
    })
})