import make from "./create.js";

function homePage(){
    const home=document.createElement("div");
    home.classList.add("home");
    const intro=document.createElement("div");
    intro.classList.add("intro");
    const whyUs=document.createElement("div");
    whyUs.classList.add("list");
    home.appendChild(make.createH1("Welcome to Kalukhan Kebab"));
    home.appendChild(make.createH3("Serving the best Pakistani kebabs in town!"));
    intro.appendChild(make.createParagraph("At Kalukhan Kebab, we take pride in offering an exquisite variety of Pakistani kebabs. Our menu features juicy, flavorful kebabs made with the finest ingredients and traditional recipes."));
    home.appendChild(intro);
    whyUs.appendChild(make.createH2("Why choose us?"));
    whyUs.appendChild(make.createUl("Authentic Pakistani flavors","Freshly prepared kebabs","Warm and inviting atmosphere", "The restaurant has a nice name"));
    home.appendChild(whyUs);
    return home;
};


function loadHomePage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(homePage());
}

export default loadHomePage;