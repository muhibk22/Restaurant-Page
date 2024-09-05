import "./styles.css";
import homepage from "./home.js";
import menu from "./menu.js";


document.addEventListener("DOMContentLoaded", function() {
    homepage();

    const homeButton=document.getElementById("nav-home");
    const menuButton=document.getElementById("nav-menu");
    const aboutButton=document.getElementById("nav-about");

    homeButton.addEventListener("click",homepage);
    menuButton.addEventListener("click",menu);
});
