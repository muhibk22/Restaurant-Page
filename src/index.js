import "./styles.css";
import homepage from "./home.js";
import menu from "./menu.js";
import about from "./about.js";


document.addEventListener("DOMContentLoaded", function() {
    homepage();

    const homeButton=document.getElementById("nav-home");
    const menuButton=document.getElementById("nav-menu");
    const aboutButton=document.getElementById("nav-about");

    homeButton.addEventListener("click",homepage);
    menuButton.addEventListener("click",menu);
    aboutButton.addEventListener("click",about);

    const navToggle = document.querySelector('.nav-toggle');
    const navButtons = document.querySelector('.nav-buttons');

    navToggle.addEventListener('click', () => {
        navButtons.classList.toggle('show');
    });

});
