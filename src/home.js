import make from "./create.js";
import chefImg from "./images/chef.jpg"

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

    const chef=document.createElement("img");
    chef.src=chefImg;
    home.appendChild(chef);

    whyUs.appendChild(make.createH2("Why choose us?"));
    whyUs.appendChild(make.createUl("Authentic Pakistani flavors","Freshly prepared kebabs","Warm and inviting atmosphere", "The restaurant has a nice name", "The chef is jacked"));
    home.appendChild(whyUs);
    home.appendChild(make.createParagraph("Visit us today or order online to experience the taste of authentic Pakistani kebabs!"));

    
    return home;
};


function loadHomePage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(homePage());
}

export default loadHomePage;