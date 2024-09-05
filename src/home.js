function homePage(){
    const home=document.createElement("div");
    home.classList.add("home");
    home.appendChild(createParagraph("loram ipsum bipsum mipusm"));
    home.appendChild(createParagraph("lmao xd"));
    return home;
};


function createParagraph(content){
    const paragraph=document.createElement("p");
    paragraph.textContent=content;
    return paragraph;
}

function loadHomePage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(homePage());
}

export default loadHomePage;