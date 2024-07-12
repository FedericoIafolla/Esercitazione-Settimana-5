// script.js

// Funzione per rendere sticky la navbar quando l'utente scorre la pagina
window.onscroll = function() {
    stickyNavbar();
};

// Seleziona la navbar
var navbar = document.getElementById("navbar");

// Ottieni la posizione della navbar
var sticky = navbar.offsetTop;

// Funzione stickyNavbar
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
