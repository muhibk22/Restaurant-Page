import "./styles.css";
import homepage from "./home.js";
import menu from "./menu.js";
import about from "./about.js";


document.addEventListener("DOMContentLoaded", function() {
    homepage();

    const homeButton=document.getElementById("nav-home");
    const menuButton=document.getElementById("nav-menu");
    const aboutButton=document.getElementById("nav-about");
    const navToggle = document.querySelector('.nav-toggle');
    const navButtons = document.querySelector('.nav-buttons');
    const nav=document.querySelector('nav');

    homeButton.addEventListener("click",() => {
        homepage();
        toggle();
    });
    menuButton.addEventListener("click",() => {
        menu();
        toggle();
    });
    aboutButton.addEventListener("click",() => {
        about();
        toggle();
    });


    navToggle.addEventListener('click', toggle);

    function toggle(){
        navButtons.classList.toggle('show');
        nav.classList.toggle('dark');
    }

});
