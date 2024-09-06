import make from "./create.js";
import img1 from "./images/chapli.webp"
import img2 from "./images/chef.jpg"
import img3 from "./images/chef.jpg"
import img4 from "./images/chef.jpg"



function menuPage(){
    const menu=document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(make.createH1("Menu"));
    const kebab=document.createElement("div");
    kebab.classList.add("grid");
    menu.appendChild(kebab);
    let item=[];
    for (let i=0; i<4; i++){
        item[i]=document.createElement("div");
        item[i].classList.add("item");
        kebab.appendChild(item[i]);
    }
    item[0].appendChild(make.createH2(`Chapli Kebab`));
    const kebabArr=[];
    const kebabImages = [img1, img2, img3, img4]; 
    for (let i=0; i<4; i++){
        const img=document.createElement("img");
        img.src=kebabImages[i];
        img.alt=`Kabab Image ${i}`;
        kebabArr.push(img);
        item[i].appendChild(kebabArr[i]);
    }
    item[0].appendChild(make.createParagraph("A rustic, flattened kebab made with minced beef, fresh herbs, and spices. Grilled to a crispy finish, it's a true street food delight from the Khyber Pakhtunkhwa region."));
    return menu;
};

function loadMenuPage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(menuPage());
}

export default loadMenuPage;