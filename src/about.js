import make from "./create.js";
function aboutPage(){
    const about=document.createElement("div");
    about.classList.add("about");
    about.appendChild(make.createH1("Our Story"));
    about.appendChild(make.createParagraph("Founded with a passion for the vibrant flavors and aromas of Pakistani food, Kalukhan Kebab started as a small eatery with a mission to bring the best kebabs to our community. Over the years, our commitment to quality and tradition has made us a favorite destination for food lovers seeking genuine and delicious kebabs."));
    const lineBreak=document.createElement("br");
    about.appendChild(lineBreak);
    about.appendChild(make.createH1("Our Menu"));
    about.appendChild(make.createParagraph("Our menu features an array of delectable kebabs, each prepared with carefully selected spices and the freshest ingredients. From the fiery Mutton Tikka to the succulent Chapli Kebab, every dish is crafted to perfection, offering a delightful experience with every bite. Whether you prefer a spicy kick or a milder flavor, our diverse menu has something to satisfy every palate."));
    const lineBreak2=document.createElement("br");
    about.appendChild(lineBreak2);
    about.appendChild(make.createH1("Our Commitment"));
    about.appendChild(make.createParagraph("At Kalukhan Restaurant, we are committed to providing an exceptional dining experience. Our team of skilled chefs uses traditional methods and recipes passed down through generations to ensure every meal is a memorable one. We believe in using only the finest ingredients, and our dedication to quality and authenticity is reflected in every dish we serve."));

    return about;
}

function loadAboutPage(){
    const container=document.getElementById("content");
    container.innerHTML="";
    container.appendChild(aboutPage());
}
export default loadAboutPage;