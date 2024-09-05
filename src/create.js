function createParagraph(content){
    const paragraph=document.createElement("p");
    paragraph.textContent=content;
    return paragraph;
}

function createH1(content){
    const paragraph=document.createElement("h1");
    paragraph.textContent=content;
    return paragraph;
}

function createH2(content){
    const paragraph=document.createElement("h2");
    paragraph.textContent=content;
    return paragraph;
}
export {createParagraph,createH1, createH2};