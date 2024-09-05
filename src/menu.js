function menuPage(){
    const home=document.createElement("div");
    home.classList.add("menu");
    home.appendChild(createParagraph("Menu"));
    home.appendChild(createParagraph("lmao xd"));
    return home;
};


function createParagraph(content){
    const paragraph=document.createElement("p");
    paragraph.textContent=content;
    return paragraph;
}

function loadMenuPage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(menuPage());
}

export default loadMenuPage;