import {createParagraph, createH1, createH2} from "./create.js";

function homePage(){
    const home=document.createElement("div");
    home.classList.add("home");
    home.appendChild(createH1("Kalukhan Restaurant"));
    home.appendChild(createH2("testing"));
    home.appendChild(createParagraph("lmao xd"));
    return home;
};


function loadHomePage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(homePage());
}

export default loadHomePage;